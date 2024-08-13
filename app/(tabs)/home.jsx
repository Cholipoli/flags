import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGlobalContext } from '../../context/GlobalProvider'
import PieChart from 'react-native-pie-chart'
import countryData from '../../data/countryData.json'
import { Image } from 'react-native'
import { images } from '../../constants';

const calculateProgression = () => {
  let totalLearned = 0;
  let totalLearning = 0;
  let totalToLearn = 0;

  for (var i = 0; i < countryData.length; i++){
    var obj = countryData[i];
    if (obj.isNew){
      totalToLearn += 1;
    }

    else if((obj.ncorrect >= 2) && (obj.ncorrect/(obj.ncorrect + obj.nfalse) >= .7)){
      console.log(obj.ncorrect >= 2)
      console.log(obj.ncorrect/(obj.ncorrect + obj.nfalse))
      totalLearned += 1;
    }

    else {
      totalLearning += 1;
    }
    
  }
  return [totalToLearn, totalLearning, totalLearned]
};


const Home = () => {
  const {user} = useGlobalContext();

  const widthAndHeight = 200
  const series = calculateProgression();
  const p = Math.round(series[2]/(series[0]+series[1]+series[2])*10000)/100
  const sliceColor = ['#38bdf8','#34d399','#16a34a']

  return (
    <SafeAreaView className="bg-slate-100">
      <FlatList
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 space-y-6">
            <View className="flex justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-slate-700">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-psemibold text-slate-900">
                  {user.username} !
                </Text>
              </View>
              <Image
                source={images.logoSmall}
                className="max-w-[80px] w-full h-[80px]"
                resizeMode="contain"
              />
            </View>
            <Text className="font-pmedium text-sm text-slate-700" >You know {p}% of all flags : </Text>
            <View className="flex flex-row border-2 rounded-md border-gray-400 p-2">
              <PieChart
              widthAndHeight={widthAndHeight}
              series={series}
              sliceColor={sliceColor}
              />
              <View className="flex-col-reverse">
                <View className=" px-1">
                <Text className="text-sky-500 font-pmedium text-xs">Learned ({series[2]})</Text>
                <Text className="text-emerald-400 font-pmedium text-xs">Learning ({series[1]})</Text>
                <Text className="text-green-700 font-pmedium text-xs">Yet to learn ({series[0]})</Text>
                </View>

              </View>
              <View>
                <Text className="font-pmedium text-slate-700">Votre progrès face au srolling</Text>
              </View>
            </View>

          
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default Home