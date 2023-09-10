import { View, ScrollView, TouchableOpacity, Image, Text } from "react-native";

const Stories = [
  { src: require("../assets/images/story.png"), id: "0" },
  { src: require("../assets/images/story1.png"), id: "1" },
  { src: require("../assets/images/story2.png"), id: "2" },
  { src: require("../assets/images/story3.png"), id: "3" },
  { src: require("../assets/images/story2.png"), id: "4" },
  { src: require("../assets/images/story1.png"), id: "5" },
];
export function StoriesComponent() {
  return (
    <View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{
          alignItems: "flex-start",
          paddingLeft: 15,
        }}
        style={{
          maxHeight: 120,
        }}
      >
        {Stories.map((item) => (
          <TouchableOpacity
            key={item.id}
            className="p-2 flex items-center justify-center"
          >
            <Image source={item.src} className="" />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View className="flex-row justify-between px-5 mt-5">
        <View>
          <Text className="text-xl font-medium my-1">
            Best shopping experience ever
          </Text>
          <View className="flex-row gap-x-2 items-center">
            <Image
              source={require("../assets/icons/location.png")}
              className="h-6 w-6"
            />
            <Text className="text-green-800">Around Ugbowo</Text>
          </View>
        </View>
        <Image
          source={require("../assets/icons/arrowleft.png")}
          className="h-6 w-6"
        />
      </View>
    </View>
  );
}
