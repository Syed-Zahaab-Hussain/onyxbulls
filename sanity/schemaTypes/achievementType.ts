import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const achievementType = defineType({
  name: "achievement",
  title: "Achievement",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "title",
      title: "Award Title",
      type: "string",
      description: "The name/title of the achievement or award",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Award Image",
      type: "image",
      description: "Image of the award, trophy, or recognition",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          type: "string",
          description: "Important for SEO and accessibility",
          options: {
            isHighlighted: true,
          },
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year Received",
      type: "string",
      description: "Year the award was received (e.g., 2023)",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});
