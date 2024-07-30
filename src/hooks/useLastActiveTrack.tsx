import { useEffect, useState } from "react";
import { Track, useActiveTrack } from "react-native-track-player";

export const useLastActiveTrack = () => {
  const activeTrack = useActiveTrack();
  const [lastActiveTrack, setLastActiveTrack] = useState<Track>();

  useEffect(() => {
    // if not active track return
    if (!activeTrack) return;

    setLastActiveTrack(activeTrack);
    // run on activeTrack change
  }, [activeTrack]);

  return lastActiveTrack;
};
