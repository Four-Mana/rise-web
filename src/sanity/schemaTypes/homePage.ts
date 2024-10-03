import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'home',
  title: 'Home page',
  type: 'document',
  groups: [
    { name: 'seo', title: 'SEO' },
    { name: 'hero', title: 'Hero' },
  ],
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'seo',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'seo',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'description',
      title: 'description',
      type: 'text',
      rows: 3,
      group: 'seo',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      type: 'object',
      name: 'backgroundImage',
      group: 'hero',
      fields: [
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          validation: (Rule) => [Rule.required()],
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Image description',
              hidden: ({ parent }) => !parent?.asset,
              validation: (Rule) => [Rule.required()],
            },
          ],
        }),
      ],
    }),
    defineField({
      type: 'object',
      name: 'frontImage',
      group: 'hero',
      fields: [
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          validation: (Rule) => [Rule.required()],
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Image description',
              hidden: ({ parent }) => !parent?.asset,
              validation: (Rule) => [Rule.required()],
            },
          ],
        }),
      ],
    }),
  ],
});
