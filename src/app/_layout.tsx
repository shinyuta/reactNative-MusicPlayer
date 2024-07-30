import React, { useCallback } from "react";

import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { useSetupTrackPlayer } from "@/hooks/useSetupTrackPlayer";
import { SplashScreen } from "expo-router";
import { useLogTrackPlayerState } from "@/hooks/useLogTrackPlayerState";

SplashScreen.preventAutoHideAsync()

/* initialize import parts of the application */
const App = () => {

  const handleTrackPlayerLoaded = useCallback(() => {
    /* when the track player is finished loading, hide the splash screen and show the song screen*/
    SplashScreen.hideAsync()
  }, [])

  useSetupTrackPlayer({
    onLoad: handleTrackPlayerLoaded,
  })

  useLogTrackPlayerState()

  return (
    <SafeAreaProvider>
      <RootNavigation />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
};

/* (tabs) used by expo-router to group common screens or common layouts/domains  */
const RootNavigation = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default App;
