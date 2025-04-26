import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const faqType = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "question",
      type: "string",
    }),
    defineField({
      name: "answer",
      type: "string",
    }),
  ],
});
