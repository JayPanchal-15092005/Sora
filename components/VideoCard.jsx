import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import { useState } from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import Video from "react-native-video";
import { icons } from "../constants";

const { width } = Dimensions.get("window");

const VideoCard = ({ title, creator, avatar, thumbnail, video }) => {
  const [play, setPlay] = useState(false);

   const handleDownload = async () => {
    try {
      // Ask permission for media library (only on iOS/Android)
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        return Alert.alert("Permission required", "Need access to save files");
      }

      const fileUri = FileSystem.documentDirectory + `${title || "video"}.mp4`;
      const downloadResumable = FileSystem.createDownloadResumable(video, fileUri);

      const { uri } = await downloadResumable.downloadAsync();

      if (uri) {
        const asset = await MediaLibrary.createAssetAsync(uri);
        await MediaLibrary.createAlbumAsync("Download", asset, false);
        Alert.alert("Success", "Video downloaded to your gallery");
      }
    } catch (error) {
      console.error("Download error:", error);
      Alert.alert("Error", "Failed to download video");
    }
  };

   return (
    <View className="flex flex-col items-center px-4 mb-14">
      <View className="flex flex-row gap-3 items-start">
        <View className="flex justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary flex justify-center items-center p-0.5">
            <Image
              source={{ uri: avatar }}
              className="w-full h-full rounded-lg"
              resizeMode="cover"
            />
          </View>

          <View className="flex justify-center flex-1 ml-3 gap-y-1">
            <Text className="font-psemibold text-sm text-white" numberOfLines={1}>
              {title}
            </Text>
            <Text className="text-xs text-gray-100 font-pregular" numberOfLines={1}>
              {creator}
            </Text>
          </View>
        </View>

        <TouchableOpacity onPress={handleDownload} className="pt-2">
          <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
        </TouchableOpacity>
      </View>

      {play ? (
        <Video
          source={{ uri: video }}
          style={{ width: width - 32, height: 240, borderRadius: 12, marginTop: 12 }}
          controls
          resizeMode="contain"
          onEnd={() => setPlay(false)}
          paused={false}
        />
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
          className="w-full h-60 rounded-xl mt-3 relative flex justify-center items-center"
        >
          <Image
            source={{ uri: thumbnail }}
            className="w-full h-full rounded-xl"
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
