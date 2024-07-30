import { defaultStyles } from "@/styles";
import { View } from "react-native";
import { Stack } from "expo-router";
import { StacksScreenWithSearchBar } from "@/constants/layout";

const FavoritesScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            ...StacksScreenWithSearchBar,
            headerTitle: "Favorites",
          }}
        />
      </Stack>
    </View>
  );
};

export default FavoritesScreenLayout;
