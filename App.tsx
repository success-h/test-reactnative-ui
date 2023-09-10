import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import DiscoverScreen from "./screens/Discover";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/Home";
import ChatScreen from "./screens/Chat";
import PostScreen from "./screens/Post";
import NotificationScreen from "./screens/Notifications";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View, Text, SafeAreaView, TextInput } from "react-native";
import { HomeHeader } from "./components/Header";

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar animated style="dark" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            title: "",
          }}
        >
          <Tab.Screen
            options={{
              tabBarIcon: ({ color, focused }) => (
                <Image
                  className="h-6 w-6"
                  style={{ opacity: focused ? 0.4 : 1 }}
                  source={require("./assets/icons/home.png")}
                />
              ),
              header: (props) => <HomeHeader {...props} />,
            }}
            name="Home"
            component={HomeScreen}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ color, focused }) => (
                <Image
                  className="h-6 w-6"
                  style={{ opacity: focused ? 0.4 : 1 }}
                  source={require("./assets/icons/chat.png")}
                />
              ),
            }}
            name="Chat"
            component={ChatScreen}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ color, focused }) => (
                <Image
                  className="h-6 w-6"
                  style={{ opacity: focused ? 0.4 : 1 }}
                  source={require("./assets/icons/post.png")}
                />
              ),
            }}
            name="Post"
            component={PostScreen}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ color, focused }) => (
                <Image
                  className="h-6 w-6"
                  style={{ opacity: focused ? 0.4 : 1 }}
                  source={require("./assets/icons/bell.png")}
                />
              ),
            }}
            name="Notification"
            component={NotificationScreen}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ color, focused }) => (
                <Image
                  className="h-6 w-6"
                  style={{ opacity: focused ? 0.4 : 1 }}
                  source={require("./assets/icons/discover.png")}
                />
              ),
            }}
            name="Discover"
            component={DiscoverScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
