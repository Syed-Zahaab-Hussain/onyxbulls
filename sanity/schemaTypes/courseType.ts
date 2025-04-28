import { defineField, defineType } from "sanity";

// schemas/course.js
export const courseType = defineType({
  name: "course",
  title: "Course",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "longDescription",
      title: "Long Description",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "salePrice",
      title: "Sale Price",
      type: "number",
      validation: (Rule) => Rule.positive().min(0),
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
      description: 'e.g. "6 weeks"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "lessons",
      title: "Number of Lessons",
      type: "number",
      validation: (Rule) => Rule.required().positive().integer(),
    }),
    defineField({
      name: "level",
      title: "Difficulty Level",
      type: "string",
      options: {
        list: [
          { title: "Beginner", value: "Beginner" },
          { title: "Intermediate", value: "Intermediate" },
          { title: "Advanced", value: "Advanced" },
          { title: "All Levels", value: "All Levels" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Course Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "instructor",
      title: "Instructor",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "syllabus",
      title: "Syllabus",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Module Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "lessons",
              title: "Lessons",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "title",
                      title: "Lesson Title",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: "duration",
                      title: "Duration",
                      type: "string",
                      description: 'e.g. "45 min"',
                      validation: (Rule) => Rule.required(),
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "learningOutcomes",
      title: "What You'll Learn",
      type: "array",
      of: [{ type: "string" }],
      description: "List of key learning outcomes",
      validation: (Rule) => Rule.required().min(3),
    }),
    defineField({
      name: "courseIncludes",
      title: "This Course Includes",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "item",
              title: "Item",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "icon",
              title: "Icon Name",
              type: "string",
              description:
                'Name of the icon to use (e.g. "BookOpen", "CheckCircle")',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "requirements",
      title: "Requirements",
      type: "array",
      of: [{ type: "string" }],
      description: "List of course requirements",
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: "title",
      level: "level",
      media: "image",
    },
    prepare(selection) {
      const { title, level, media } = selection;
      return {
        title: title,
        subtitle: level,
        media: media,
      };
    },
  },
});
