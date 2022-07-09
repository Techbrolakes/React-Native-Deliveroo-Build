import { color } from "../config/Colors";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/category/Categories";
import FeaturedRow from "../components/features/FeaturedRow";

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container} className="space-y-4">
      <View className="flex-row items-center space-x-2 px-4 pt-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location <ChevronDownIcon size={20} color={color.primary} />
          </Text>
        </View>

        <UserIcon size={35} color={color.primary} />
      </View>

      {/* SEARCH BOX */}
      <View className="flex-row items-center  space-x-2 pb-2 px-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <SearchIcon color={color.primary} size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon color={color.primary} />
      </View>

      {/* SCROLL VIEW */}
      <ScrollView className="bg-gray-100">
        {/* Categories */}
        <Categories />

        {/* Featured Rowa */}

        <FeaturedRow
          title="Featured"
          description="paid placements from our partners"
          featuredCategory="featured"
        />
        
        <FeaturedRow
          title="Offers near you!"
          description="Why not support your local restaurant tonight"
          featuredCategory="offer"
        />

        <FeaturedRow
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts"
          featuredCategory="discounts"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
