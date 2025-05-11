// import { Redirect, Tabs } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
// import { Image, Text, View } from 'react-native';
// import { Loader } from "../../components/index.js";
// import { icons } from "../../constants";
// import { useGlobalContext } from '../../context/GlobalProvider.js';

// const TabIcon = ({ icon, color, name, focused }) => {
//   return (
//     <View className="flex items-center justify-center gap-2">
//       <Image
//         source={icon}
//         resizeMode="contain"
//         tintColor={color}
//         className="w-6 h-6"
//       />
//       <Text
//         className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
//         style={{ color: color }}
//       >
//         {name}
//       </Text>
//     </View>
//   );
// }

// const TabLayout = () => {

//   const { loading, isLogged} = useGlobalContext();

//   if(!loading && !isLogged) return <Redirect href="/sign-in" />;

//   return (
//     <>
//       <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: "#FFA001",
//         tabBarInactiveTintColor: "#CDCDE0",
//         tabBarShowLabel: false,
//         tabBarStyle: {
//           backgroundColor: "#161622",
//           borderTopWidth: 1,
//           borderTopColor: "#232533",
//           height: 70,
//         },
//       }}
//       >
//         <Tabs.Screen
//         name='home'
//         options={{
//           title: 'Home',
//           headerShown: false,
//           tabBarIcon: ({ color, focused }) => (
//             <TabIcon
//              icon={icons.home}
//              color={color}
//              name="Home"
//              focused={focused}
//             />
//           )
//         }}
//         />
//         {/* <Tabs.Screen
//         name='bookmark'
//         options={{
//           title: 'Bookmark',
//           headerShown: false,
//           tabBarIcon: ({ color, focused }) => (
//             <TabIcon
//              icon={icons.bookmark}
//              color={color}
//              name="Bookmark"
//              focused={focused}
//             />
//           )
//         }}
//         /> */}
//         <Tabs.Screen
//         name='create'
//         options={{
//           title: 'Create',
//           headerShown: false,
//           tabBarIcon: ({ color, focused }) => (
//             <TabIcon
//              icon={icons.upload}
//              color={color}
//              name="Create"
//              focused={focused}
//             />
//           )
//         }}
//         />
//         <Tabs.Screen
//         name='profile'
//         options={{
//           title: 'Profile',
//           headerShown: false,
//           tabBarIcon: ({ color, focused }) => (
//             <TabIcon
//              icon={icons.profile}
//              color={color}
//              name="Profile"
//              focused={focused}
//             />
//           )
//         }}
//         />
//       </Tabs>

//         <Loader isLoading={loading} />
//         <StatusBar backgroundColor='#161622' style='light' />

//     </>
//   )
// }

// export default TabLayout;

import { Redirect, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Loader } from "../../components/index.js";
import { icons } from "../../constants";
import { useGlobalContext } from "../../context/GlobalProvider.js";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 8,
      }}
    >
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        style={{ width: 24, height: 24 }}
      />
      <Text
        style={{
          color,
          fontSize: 12,
          fontWeight: focused ? "600" : "400",
          marginTop: 3,
        }}
      >
        {name}
      </Text>
    </View>
  );
};


const TabLayout = () => {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && !isLogged) return <Redirect href="/sign-in" />;

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom']}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 85, // KEY CHANGE: increase height
            paddingBottom: 12, // bottom padding
            paddingTop: 6,   // top padding to center content
            position: "absolute"
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.upload}
                color={color}
                name="Create"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>

      <Loader isLoading={loading} />
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default TabLayout;
