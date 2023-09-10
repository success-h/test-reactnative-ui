import { View, Text } from "react-native";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

type Props = BottomTabScreenProps<RootTabParamList, "Post">;

export default function PostScreen({}: Props) {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl">Post</Text>
    </View>
  );
}
