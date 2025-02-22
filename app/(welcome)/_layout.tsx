import { View, Text } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import TailorButton from "@/components/TailorButton";
import { Icons } from "@/constants";

const _layout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#F2F2F2",
            height: 70,

            alignItems: "center",
            display: "flex",
            flexDirection: "row",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,

            tabBarButton: (props) => (
              <TailorButton
                imageinactive={Icons.homeoutlined}
                imageactive={Icons.homefilled}
                {...props}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="comment"
          options={{
            headerShown: false,

            tabBarButton: (props) => (
              <TailorButton
                imageinactive={Icons.commentoutlined}
                imageactive={Icons.commentfilled}
                {...props}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="tailor"
          options={{
            headerShown: false,

            tabBarButton: (props) => (
              <TailorButton
                imageinactive={Icons.hangeroutline}
                imageactive={Icons.hangerfilled}
                {...props}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="machine"
          options={{
            headerShown: false,

            tabBarButton: (props) => (
              <TailorButton
                imageinactive={Icons.machineoutline}
                imageactive={Icons.machinefilled}
                {...props}
              />
            ),
          }}
        />
      </Tabs>

      <StatusBar
        // Background color of the status bar
        style="dark" // Text color: "light" (white) or "dark" (black)
      />
    </>
  );
};

export default _layout;
