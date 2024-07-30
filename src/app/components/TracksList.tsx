import { TrackListItem } from "./TrackListItem";
import { FlatList, FlatListProps, Text, View } from "react-native";
import { utilsStyles } from "@/styles";
import TrackPlayer, { Track } from "react-native-track-player";
import FastImage from "react-native-fast-image";
import { unknownTrackImageUri } from "@/constants/images";

export type TracksListProps = Partial<FlatListProps<Track>> & {
  tracks: Track[];
};

const ItemDivider = () => (
  <View
    style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }}
  />
);

/* library is a [] of items from library.json */
export const TracksList = ({ tracks, ...flatlistprops }: TracksListProps) => {
  const handleTrackSelect = async (track: Track) => {
    /* play song when pressed */
    await TrackPlayer.load(track);
  };

  return (
    <FlatList
      data={tracks}
      ListFooterComponent={ItemDivider}
      contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
      ItemSeparatorComponent={ItemDivider}
      // when no songs are found (for example when searching) display an empty list component.
      ListEmptyComponent={
        <View>
          <Text style={utilsStyles.emptyComponentText}>No songs found</Text>

          <FastImage
            source={{
              uri: unknownTrackImageUri,
              priority: FastImage.priority.normal,
            }}
            style={utilsStyles.emptyComponentImage}
          />
        </View>
      }
      renderItem={({ item: track }) => (
        <TrackListItem track={track} onTrackSelect={handleTrackSelect} />
      )}
      {...flatlistprops}
    />
  );
};
