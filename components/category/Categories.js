import { ScrollView, Text, View } from "react-native";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../../sanity";
import { useEffect, useState } from "react";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type = "category"]`)
      .then((data) => setCategories(data));
  }, []);
  console.log(categories);
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((category) => {
        <CategoryCard
          key={category._id}
          title={category.title}
          imgUrl={urlFor(category.image).width(200).url()}
        />;
      })}
    </ScrollView>
  );
}
