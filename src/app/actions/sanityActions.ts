'use server';

import { client } from '@/sanity/lib/client';
import { revalidatePath } from 'next/cache';

export async function submitSanityDocument(formData: FormData) {
    try {
        const type = formData.get('type') as string;
        const title = formData.get('title') as string;
        const image = formData.get('image') as File;
        const description = formData.get('description') as string;
        const status = formData.get('status') as string || 'published';
        const orderRankValue = formData.get('orderRank') as string;
        const orderRank = orderRankValue ? parseInt(orderRankValue, 10) : undefined;

        let data: any = { _type: type, title, description, status };
        if (orderRank !== undefined && !isNaN(orderRank)) {
            data.orderRank = orderRank;
        }

        if (type === 'press') {
            data.sourceName = formData.get('sourceName');
            data.publishedAt = formData.get('publishedAt');
            data.externalLink = formData.get('externalLink');
        }

        if (!process.env.SANITY_API_WRITE_TOKEN) {
            return { error: 'SANITY_API_WRITE_TOKEN is not configured in local environment variables.' };
        }

        const writeClient = client.withConfig({
            token: process.env.SANITY_API_WRITE_TOKEN,
            useCdn: false
        });

        // Use the native File object directly as Sanity supports Web APIs globally now
        const imageAsset = await writeClient.assets.upload('image', image, {
            filename: image.name,
            contentType: image.type
        });

        data.mainImage = { _type: 'image', asset: { _type: 'reference', _ref: imageAsset._id } };

        const createdDoc = await writeClient.create(data);

        // Flushes Next.js Native Server Actions
        revalidatePath('/press');

        return { success: true, doc: createdDoc, type };

    } catch (error: any) {
        console.error('Mutation error:', error);
        return { error: error.message || 'Server error tracking API connection' };
    }
}

// -------------------------------------------------------------
// DRAFT MANAGEMENT ARCHITECTURE
// -------------------------------------------------------------

export async function getAdminContent() {
    try {
        const query = `*[_type == "press"] | order(_createdAt desc) {
            _id,
            title,
            _type,
            status,
            _createdAt
        }`;
        // Since admin runs completely unprotected internally besides simple password, standard client fetch is adequate here:
        const items = await client.fetch(query);
        return { success: true, items };
    } catch (error: any) {
        console.error('Fetch error:', error);
        return { error: error.message || 'Failed to pull CMS Data Arrays from Sanity' };
    }
}

export async function publishSanityDocument(id: string) {
    if (!process.env.SANITY_API_WRITE_TOKEN) {
        return { error: 'SANITY_API_WRITE_TOKEN is not configured.' };
    }
    const writeClient = client.withConfig({
        token: process.env.SANITY_API_WRITE_TOKEN,
        useCdn: false
    });

    try {
        await writeClient.patch(id).set({ status: 'published' }).commit();
        revalidatePath('/works');
        revalidatePath('/press');
        return { success: true };
    } catch (err: any) {
        return { error: err.message || 'Failed to patch document internally.' };
    }
}

export async function deleteSanityDocument(id: string) {
    if (!process.env.SANITY_API_WRITE_TOKEN) {
        return { error: 'SANITY_API_WRITE_TOKEN is not configured.' };
    }
    const writeClient = client.withConfig({
        token: process.env.SANITY_API_WRITE_TOKEN,
        useCdn: false
    });

    try {
        await writeClient.delete(id);
        revalidatePath('/works');
        revalidatePath('/press');
        return { success: true };
    } catch (err: any) {
        return { error: err.message || 'Failed to delete target document.' };
    }
}
