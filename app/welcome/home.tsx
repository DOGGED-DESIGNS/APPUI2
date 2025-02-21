import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icons, Images } from "@/constants";

const home = () => {
  return (
    <SafeAreaView className="  px-3  flex-1  bg-slate-50 ">
      <View className=" mt-3 flex-row     ">
        <TouchableOpacity className=" p-2">
          <Image className="h-6 w-6" source={Icons.menu} resizeMode="contain" />
        </TouchableOpacity>
        <View className=" items-center ml-auto flex-row  gap-2">
          <TouchableOpacity className="p-2 rounded-full border border-zinc-500">
            <Image
              className="h-5 w-5"
              source={Icons.notification}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity className=" p-1 flex shrink-0">
            <Image
              className=" rounded-full   h-9 w-9"
              source={Images.uifaces}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* this is the text area */}

      <Text className=" mt-12 font-PoppinsRegular text-zinc-500 text-xs ">
        Good morning dogged
      </Text>
      <Text className=" text-4xl  font-PoppinsSemiBold leading-relaxed">
        Find your closest tailor or dry cleaners
      </Text>

      {/* this is the location section */}

      <View className=" items-center mt-12 px-6 py-4 flex-row shadow-[10px_10px_3px_5px_rgba(255,0,0,0.5)]  border-[4px] rounded-xl border-zinc-300  gap-5 p-3 bg-white  ">
        <View className=" p-3 rounded-full   bg-orange-300   ">
          <Image
            className="h-10 w-10 "
            resizeMode="contain"
            source={Icons.location}
          />
        </View>
        <View className=" ">
          <Text className=" text-zinc-400 text-sm leading-relaxed ">
            your location
          </Text>
          <View className=" items-center flex-row gap-2">
            <Text className=" text-base text-zinc-600">
              No 15 fabukade street shougunle
            </Text>
            <TouchableOpacity className="p-2">
              <Image
                className="h-4 w-4"
                resizeMode="contain"
                source={Icons.dropdown}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default home;
