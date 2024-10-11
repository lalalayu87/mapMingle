import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "홈",
          tabBarActiveTintColor: "black",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Ionicons name="home-sharp" size={24} />
            ) : (
              <Ionicons name="home-outline" size={24} />
            ),
        }}
      />
      <Tabs.Screen
        name="share"
        options={{
          title: "공유기록",
          tabBarActiveTintColor: "black",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Ionicons name="share" size={24} />
            ) : (
              <Ionicons name="share-outline" size={24} />
            ),
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: "즐겨찾기",
          tabBarActiveTintColor: "black",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Ionicons name="bookmark" size={24} />
            ) : (
              <Ionicons name="bookmark-outline" size={24} />
            ),
        }}
      />
      <Tabs.Screen
        name="my"
        options={{
          title: "마이",
          tabBarActiveTintColor: "black",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Ionicons name="person" size={24} />
            ) : (
              <Ionicons name="person-outline" size={24} />
            ),
        }}
      />
    </Tabs>
  );
}
