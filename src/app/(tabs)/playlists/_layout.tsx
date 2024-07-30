import { defaultStyles } from "@/styles";
import { View } from "react-native";
import { Stack } from "expo-router";
import { StacksScreenWithSearchBar } from "@/constants/layout";

const PlaylistsScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            ...StacksScreenWithSearchBar,
            headerTitle: "Playlists",
          }}
        />
      </Stack>
    </View>
  );
};

export default PlaylistsScreenLayout;
