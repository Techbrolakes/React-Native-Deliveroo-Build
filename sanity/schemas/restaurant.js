export default {
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Restaurant Name",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short Description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      type: "image",
      title: "Image of the restaurant",
    },
    {
      name: "lat",
      type: "string",
      title: "Latitude of the restaurant",
    },
    {
      name: "long",
      type: "string",
      title: "Longitude of the restaurant",
    },
    {
      name: "address",
      type: "string",
      title: "Restaurant Address",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: "number",
      title: "Enter a Rating from (1-5 Stars)",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("Please enter a rating between 1 and 5"),
    },
    {
      name: "type",
      type: "Category",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "dishes",
      type: "array",
      title: "Dishes",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
};
