export default {
  name: "category",
  title: "Menu Category",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      type: "image",
      title: "Category Image",
    },
  ],
};
