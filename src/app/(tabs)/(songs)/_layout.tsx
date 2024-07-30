import { defaultStyles } from "@/styles";
import { View } from "react-native";
import { Stack } from "expo-router";
import { StacksScreenWithSearchBar } from "@/constants/layout";

const SongsScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            ...StacksScreenWithSearchBar,
            headerTitle: "Songs",
          }}
        />
      </Stack>
    </View>
  );
};

export default SongsScreenLayout;
