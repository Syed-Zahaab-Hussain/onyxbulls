import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const statType = defineType({
  name: "stat",
  title: "Stat",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "label",
      type: "string",
    }),
    defineField({
      name: "value",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "string",
    }),
  ],
});
