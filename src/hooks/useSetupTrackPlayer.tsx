import { useEffect, useRef } from "react"
import TrackPlayer, { RepeatMode } from "react-native-track-player"

const setupPlayer = async() => {
  await TrackPlayer.setupPlayer({
    maxCacheSize: 1024 * 10,
  })

  await TrackPlayer.setVolume(0.6)
  await TrackPlayer.setRepeatMode(RepeatMode.Queue)
}

export const useSetupTrackPlayer = ({ onLoad }: { onLoad?: () => void }) => {
  /* avoid reinitializing if program is reloaded */
  const isInitialized = useRef(false)
  
  useEffect(() => {
    setupPlayer()

      .then(() => {
        isInitialized.current = true,
        onLoad?.()
      })

      .catch((error) => {
        isInitialized.current = false,
        console.log(error)
      })

  }, [onLoad])
}
