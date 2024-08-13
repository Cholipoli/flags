import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Redirect, router } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import { useGlobalContext } from '../context/GlobalProvider';

export default function App() {
  const {loading, isLogged} = useGlobalContext();
  console.log('hi')
  console.log(isLogged)
  if(!loading, isLogged) return <Redirect href='/home' />

  return (
    <SafeAreaView className="bg-slate-100 h-full">
      
      <ScrollView contentContainerStyle={{height : '100%'}}>
      <View className="w-full flex justify-center items-center min-h-full px-4">
          <Image
            source={images.logo}
            className="w-[260px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.artwork}
            className="max-w-[380px] w-full h-[298px] shadow-md shadow-white"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-slate-900 font-bold text-center">
              Stop scrolling and{"\n"}
              Start learning with{"\n"}
              <Text className="text-teal-600">Pause & Play</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[236px] h-[15px] absolute -bottom-1"
              resizeMode="stretch"
            />

          </View>
          <Text className="text-sm font-pregular text-slate-500 mt-7 text-center">
          Break the Scroll: Master geography on {"\n"} Pause and Play!
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}