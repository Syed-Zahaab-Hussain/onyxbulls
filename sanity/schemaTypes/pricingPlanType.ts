import { defineField, defineType } from "sanity";

export const pricingPlanType = defineType({
  name: "pricingPlan",
  title: "Pricing Plan",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Plan Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Monthly Price",
      description: "Price in cents (e.g., $100 = 10000)",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "ctaText",
      title: "Call-to-Action Text",
      type: "string",
      initialValue: "Get Started",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "highlightColor",
      title: "Highlight Color",
      type: "string",
      options: {
        list: [
          { title: "Neon", value: "neon" },
          { title: "Blue", value: "blue" },
          { title: "Purple", value: "purple" },
        ],
      },
      initialValue: "neon",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      price: "price",
      features: "features",
    },
    prepare(selection) {
      const { title, price, features } = selection;
      return {
        title: title,
        subtitle: `$${(price / 100).toFixed(2)}/mo • ${
          features?.length || 0
        } features`,
      };
    },
  },
});
