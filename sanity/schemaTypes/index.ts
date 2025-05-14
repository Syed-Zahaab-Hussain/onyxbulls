import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { statType } from "./statType";
import { faqType } from "./faqType";
import { courseType } from "./courseType";
import { achievementType } from "./achievementType";
import { pricingPlanType } from "./pricingPlanType";
import { reviewType } from "./reviewType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    statType,
    faqType,
    courseType,
    achievementType,
    pricingPlanType,
    reviewType,
  ],
};
