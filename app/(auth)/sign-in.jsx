import { useState } from "react";
import { Link, router } from "expo-router";
import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from "../../components/CustomButton";
import { signIn } from "../../lib/appwrite";

const SignIn = () => {
    const [isSubmitting, setSubmitting] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: "",
      });
      //submit
      const submit = async () => {
        if ( form.email === "" || form.password === "") {
          Alert.alert("Error", "Please fill in all fields");
        }
    
        setSubmitting(true);
        try {
          await signIn(form.email, form.password);
  
          console.log('hey')
  
          router.replace("/home");
        } catch (error) {
          Alert.alert("Error", error.message);
        } finally {
          setSubmitting(false);
        }
      };
  return (
    <SafeAreaView className="bg-slate-100 h-full">
        <ScrollView>
            <View className="w-full justify-center h-full px-4 my-6">
                <Image
                    source={images.logo}
                    resizeMode='contain' className="w-[172px] h-[52px]"
                />
                <Text className="text-2xl text-slate-900 text-semibold mt-10 font-psemibold">Log in to Pause & Play</Text>
                <FormField
                    title="Email"
                    value={form.email}
                    handleChangeText={(e) => setForm({ ...form, email: e })}
                    otherStyles="mt-7"
                    keyboardType="email-address"
                />    
                <FormField
                    title="Password"
                    value={form.password}
                    handleChangeText={(e) => setForm({ ...form, password: e })}
                    otherStyles="mt-7"
                />       
                <CustomButton 
                    title="Sign In"
                    handlePress={submit}
                    containerStyles="mt-7"
                    isLoading={isSubmitting}
                />
                <View className="flex justify-center pt-5 flex-row gap-2">
                    <Text className="text-lg text-slate-600 font-pregular">
                    Don't have an account?
                    </Text>
                    <Link
                    href="/sign-up"
                    className="text-lg font-psemibold text-teal-600"
                    >
                    Sign up
                    </Link>
                </View>
            </View>
        </ScrollView>

    </SafeAreaView>
  )
}

export default SignIn;