import {
  Image,
  View,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import SearchHistoryDropdown from "./SearchHistoryDropdown";
import { useState } from "react";
export function HomeHeader(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleSearchInputChange = (text) => {
    setSearchTerm(text);
    setIsDropdownVisible(text.length > 0);
  };

  return (
    <SafeAreaView className="w-full bg-white relative">
      <View
        className={`p-5 flex-row items-center ${
          Platform.OS == "android" && "mt-4"
        }`}
      >
        <View className="flex-row flex-1 items-center rounded-lg bg-[#F8F8F8] px-3">
          <Image
            source={require("../assets/icons/search.png")}
            className="h-[24px] w-[24px]"
          />
          <TextInput
            placeholder="Search for restaurants, foods and people"
            value={searchTerm}
            onChangeText={handleSearchInputChange}
            onBlur={() => setIsDropdownVisible(false)}
            onFocus={() => setIsDropdownVisible(searchTerm.length > 0)}
            className="py-5 h-full w-[90%] rounded-lg px-3"
          />
        </View>
        {searchTerm ? (
          <TouchableOpacity
            onPress={() => {
              setIsDropdownVisible(false);
              setSearchTerm("");
            }}
          >
            <Text className="px-3 text-green-800">Cancel</Text>
          </TouchableOpacity>
        ) : (
          <Image
            source={require("../assets/icons/cart.png")}
            className="h-[24px] w-[24px] ml-2"
          />
        )}
      </View>
      {searchTerm && (
        <SearchHistoryDropdown
          isVisible={isDropdownVisible}
          onSelect={setSearchTerm}
        />
      )}
    </SafeAreaView>
  );
}
