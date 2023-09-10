import { View, Text } from "react-native";

import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

type Props = BottomTabScreenProps<RootTabParamList, "Chat">;
export default function ChatScreen({ navigation, route }: Props) {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl">Chat</Text>
    </View>
  );
}
