import { defineType, defineField, defineArrayMember } from 'sanity';

const certificate = defineType({
  name: 'certificate',
  title: 'Certificates',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
    }),
    defineField({
      name: 'infoText',
      title: 'Info Text',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          name: 'Block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [{ title: 'Bullet', value: 'bullet' }],
          marks: {
            decorators: [{ title: 'Strong', value: 'strong' }],
            annotations: [],
          },
        }),
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt',
          type: 'string',
        }),
      ],
    }),
  ],
});
export default certificate;
