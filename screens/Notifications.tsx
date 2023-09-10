import { View, Text } from "react-native";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

type Props = BottomTabScreenProps<RootTabParamList, "Notification">;
export default function NotificationScreen({}: Props) {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl">Notification</Text>
    </View>
  );
}
