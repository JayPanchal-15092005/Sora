// import { ResizeMode, Video } from "expo-av";
// import { useState } from "react";
// import { Image, Text, TouchableOpacity, View } from "react-native";
// import { icons } from "../constants";

// const VideoCard = ({ title, creator, avatar, thumbnail, video }) => {

//   // const VideoCard = ({ video: { title, thumbnail,video, creator: {username, avatar}}}) 
    
//   const [play, setPlay] = useState(false);

//   return (
//     <View className="flex flex-col items-center px-4 mb-14">
//       <View className="flex flex-row gap-3 items-start">
//         <View className="flex justify-center items-center flex-row flex-1">
//           <View className="w-[46px] h-[46px] rounded-lg border border-secondary flex justify-center items-center p-0.5">
//             <Image
//               source={{ uri: avatar }}
//               className="w-full h-full rounded-lg"
//               resizeMode="cover"
//             />
//           </View>

//           <View className="flex justify-center flex-1 ml-3 gap-y-1">
//             <Text
//               className="font-psemibold text-sm text-white"
//               numberOfLines={1}
//             >
//               {title}
//             </Text>
//             <Text
//               className="text-xs text-gray-100 font-pregular"
//               numberOfLines={1}
//             >
//               {creator}
//             </Text>
//           </View>
//         </View>

//         <View className="pt-2">
//           <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
//         </View>
//       </View>

//       {play ? (
//         <Video
//           source={{ uri: video }}
//           className="w-full h-60 rounded-xl mt-3"
//           resizeMode={ResizeMode.CONTAIN}
//           useNativeControls
//           shouldPlay
//           onPlaybackStatusUpdate={(status) => {
//             if (status.didJustFinish) {
//               setPlay(false);
//             }
//           }}
//         />
//       ) : (
//         <TouchableOpacity
//           activeOpacity={0.7}
//           onPress={() => setPlay(true)}
//           className="w-full h-60 rounded-xl mt-3 relative flex justify-center items-center"
//         >
//           <Image
//             source={{ uri: thumbnail }}
//             className="w-full h-full rounded-xl mt-3"
//             resizeMode="cover"
//           />

//           <Image
//             source={icons.play}
//             className="w-12 h-12 absolute"
//             resizeMode="contain"
//           />
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// export default VideoCard;

import { useState } from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import Video from "react-native-video";
import { icons } from "../constants";

const { width } = Dimensions.get("window");

const VideoCard = ({ title, creator, avatar, thumbnail, video }) => {
  const [play, setPlay] = useState(false);

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

        <View className="pt-2">
          <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
        </View>
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
