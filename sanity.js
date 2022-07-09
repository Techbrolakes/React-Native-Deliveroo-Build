import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "xrmihu1s",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
