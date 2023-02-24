import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      title: 'Intro Section',
      name: 'introSection',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {name: 'companyName', title: 'Company Name', type: 'string'},
        {name: 'companyDescription', title: 'Company Description', type: 'text'},
        {title: 'The Brief', name: 'brief', type: 'array', of: [{type: 'string'}]},
        {title: 'Deliverable', name: 'deliverable', type: 'array', of: [{type: 'string'}]},
      ],
    }),
    defineField({
      title: 'Gallery',
      name: 'gallery',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {name: 'galleryTitle', type: 'string', title: 'Gallery Title'},
        {name: 'galleryText', type: 'text', title: 'Gallery Text'},
        {name: 'galleryImages', type: 'array', title: 'Gallery Images', of: [{type: 'image'}]},
      ],
    }),
    defineField({
      title: 'Main Section',
      name: 'mainSection',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {name: 'mainTitle', type: 'string', title: 'Main Section Title'},
        {
          title: 'Section',
          name: 'section',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'sectionTitle', type: 'string', title: 'Section Title'},
                {
                  title: 'Section Image',
                  name: 'sectionImage',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      title: 'Conclusion',
      name: 'conclusion',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {name: 'conclusionTitle', type: 'string', title: 'Conclusion Title'},
        {name: 'conclusionText', type: 'text', title: 'Conclusion Text'},        
        {name: 'buttonLabel', type: 'string', title: 'Button Label'},
        {name: 'buttonUrl', type: 'url', title: 'Button URL'},
      ],
    }),
  ],
})
