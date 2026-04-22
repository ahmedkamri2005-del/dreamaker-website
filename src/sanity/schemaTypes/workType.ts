import { defineField, defineType } from 'sanity'

export const workType = defineType({
    name: 'work',
    title: 'Works / Portfolio',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'orderRank',
            title: 'Display Order',
            type: 'number',
            description: 'Optional: Enter a number (1, 2, 3...) to pin this item to a specific position. Leave blank for automatic sorting.',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'coverImage',
            title: 'Cover Poster / Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                }
            ]
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Feature Film', value: 'Feature Film' },
                    { title: 'Short Film', value: 'Short Film' },
                    { title: 'TV Series', value: 'TV Series' },
                    { title: 'Commercial / Promo', value: 'Commercial / Promo' },
                    { title: 'Documentary', value: 'Documentary' },
                    { title: 'Music Video', value: 'Music Video' }
                ],
                layout: 'dropdown'
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'role',
            title: 'Dreamaker Role',
            description: 'e.g., "Production Services", "Line Producer"',
            type: 'string',
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
            subtitle: 'category',
            media: 'coverImage',
        },
    },
})
