import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";

const data = ["Nita’s glam", "Burger restaurant", "Nita’s glam"];
const categories = ["Electrician", "Restaurants", "Clothing", "Burgers"];

const SearchHistoryDropdown = ({ isVisible, onSelect }) => {
  return (
    isVisible && (
      <View
        className={`h-screen top-28 bg-white border-t border-gray-200 w-full p-4 z-10 absolute ${
          Platform.OS == "ios" && "tm-32"
        }`}
      >
        <View>
          <FlatList
            data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 10, gap: 20 }}
            renderItem={({ item }) => (
              <TouchableOpacity
                className="p-4 rounded-full bg-[#f4f4f4]"
                onPress={() => onSelect(item)}
              >
                <Text className="font-bold">{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View>
          <Text className="text-lg my-5 font-bold">Recent</Text>
          <FlatList
            data={data}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 20 }}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => onSelect(item)}
                className="flex-row flex-1 items-center rounded-lg gap-x-2"
              >
                <Image
                  source={require("../assets/icons/search.png")}
                  className="h-[24px] w-[24px]"
                />
                <Text className="text-lg my-2 flex-1">{item}</Text>
                <Text className="text-lg my-2">x</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    )
  );
};

export default SearchHistoryDropdown;
