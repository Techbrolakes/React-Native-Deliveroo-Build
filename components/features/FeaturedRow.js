import { View, Text, ScrollView } from "react-native";
import { color } from "../../config/Colors";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "../restaurants/RestaurantCard";

export default function FeaturedRow({ title, description, featuredCategory }) {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color={color.primary} />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="KFC"
          rating={4.5}
          genre={"Fast Food"}
          address={"123 Main St"}
          short_description={"KFC is a fast food restaurant"}
          dishes={["Chicken, Beef, Pork"]}
          long={-123.123}
          lat={123.123}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="KFC"
          rating={4.5}
          genre={"Fast Food"}
          address={"123 Main St"}
          short_description={"KFC is a fast food restaurant"}
          dishes={["Chicken, Beef, Pork"]}
          long={-123.123}
          lat={123.123}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="KFC"
          rating={4.5}
          genre={"Fast Food"}
          address={"123 Main St"}
          short_description={"KFC is a fast food restaurant"}
          dishes={["Chicken, Beef, Pork"]}
          long={-123.123}
          lat={123.123}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="KFC"
          rating={4.5}
          genre={"Fast Food"}
          address={"123 Main St"}
          short_description={"KFC is a fast food restaurant"}
          dishes={["Chicken, Beef, Pork"]}
          long={-123.123}
          lat={123.123}
        />
      </ScrollView>
    </View>
  );
}
