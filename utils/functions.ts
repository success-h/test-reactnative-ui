import AsyncStorage from "@react-native-async-storage/async-storage";

export const addSearchTermToHistory = async (term) => {
  try {
    let history = await AsyncStorage.getItem("searchHistory");
    if (!history) {
      history = [];
    } else {
      history = JSON.parse(history);
    }
    history.push(term);
    await AsyncStorage.setItem("searchHistory", JSON.stringify(history));
  } catch (error) {
    console.error("Error adding search term to history:", error);
  }
};

export const getSearchHistory = async () => {
  try {
    const history = await AsyncStorage.getItem("searchHistory");
    return history ? JSON.parse(history) : [];
  } catch (error) {
    console.error("Error retrieving search history:", error);
    return [];
  }
};
