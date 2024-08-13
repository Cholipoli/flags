import { View, Text, Image } from 'react-native'
import React from 'react'
import {Tabs, Redirect} from 'expo-router';
import { icons } from '../../constants';
const TabIcon = ({icon, color, name, focused}) => {
    return (
        <View className="items-center justify-center gap-1">
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{color}}>
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
  return (
    <>
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#FFC107',
                tabBarStyle: {
                    backgroundColor: '#F8F9FA',
                    borderTopWidth : 1,
                }
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    headerShown:false,
                    tabBarIcon: ({ color, focused}) => (
                        <TabIcon
                            icon={icons.home}
                            color={color}
                            name="Home"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="games"
                options={{
                    title: 'Games',
                    headerShown:false,
                    tabBarIcon: ({ color, focused}) => (
                        <TabIcon
                            icon={icons.gameController}
                            color={color}
                            name="Game"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown:false,
                    tabBarIcon: ({ color, focused}) => (
                        <TabIcon
                            icon={icons.profile}
                            color={color}
                            name="Profile"
                            focused={focused}
                        />
                    )
                }}
            />

        </Tabs>
    </>
  )
}

export default TabsLayout