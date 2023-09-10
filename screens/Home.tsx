import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { StoriesComponent } from "../components/Stories";

const Products = [
  { src: require("../assets/images/product1.png"), id: "1" },
  { src: require("../assets/images/product1.png"), id: "2" },
  { src: require("../assets/images/product1.png"), id: "3" },
];

type Props = BottomTabScreenProps<RootTabParamList, "Home">;
export default function HomeScreen({ navigation, route }: Props) {
  return (
    <SafeAreaView className="flex-1 bg-white items-center justify-center">
      <StoriesComponent />
      <FlatList
        data={Products}
        keyExtractor={(i) => i.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 20,
          marginVertical: 40,
          gap: 20,
        }}
        renderItem={({ item }) => (
          <View className="">
            <Image source={item.src} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}
