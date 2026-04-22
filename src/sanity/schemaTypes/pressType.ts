import { defineField, defineType } from 'sanity'

export const pressType = defineType({
    name: 'press',
    title: 'Press & News',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'orderRank',
            title: 'Display Order',
            type: 'number',
            description: 'Optional: Enter a number (1, 2, 3...) to pin this item to a specific position. Leave blank for automatic sorting.',
        }),
        defineField({
            name: 'sourceName',
            title: 'Source Name',
            type: 'string',
            description: 'e.g., "Magazine Name" or "News Site"',
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
        }),
        defineField({
            name: 'externalLink',
            title: 'External Link',
            type: 'url',
            description: 'Link to the actual article',
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'A short description or summary.',
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: ['published', 'draft'],
                layout: 'dropdown',
            },
            initialValue: 'published',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            author: 'sourceName',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection
            return { ...selection, subtitle: author ? `from ${author}` : '' }
        },
    },
})
