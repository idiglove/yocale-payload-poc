import { CollectionConfig } from "payload/types";

export const Subscription: CollectionConfig = {
  slug: "subscription",
  auth: {
    useAPIKey: true,
    // disableLocalStrategy: true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "features",
      type: "array",
      fields: [
        {
          name: "featureText",
          type: "text",
          required: true,
        },
      ],
      required: true,
    },
  ],
};
