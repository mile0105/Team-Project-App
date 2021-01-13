import * as React from 'react';
import {useEffect, useState} from 'react';
import {fetchAchievements} from "../api/apis";

import {useNavigation} from '@react-navigation/native';
import {StackHeaderLeftButtonProps} from '@react-navigation/stack';

import MenuIcon from '../components/MenuIcon';
import {Achievement} from "../api/models/achievements";
import {ScrollView} from "react-native-gesture-handler";
import AchievementComponent from "../components/AchievementComponent";
import {ActivityIndicator} from "react-native";

export default function AchievementsScreen() {

  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [achievements, setAchievements] = useState<Achievement[]>([]);

  useEffect(() => {

    if (!isLoading) {
      setIsLoading(true);
      navigation.setOptions({
        showHeader: true,
        headerLeft: (props: StackHeaderLeftButtonProps) => (<MenuIcon/>)
      });

      fetchAchievements().then(data => {
        setAchievements(data.achievements);
        setIsLoading(false);
      }).catch(err => {
        alert('Error occured');
        setIsLoading(false);
      })
    }

  }, []);

  return (

    <ScrollView>
      {isLoading ? (
        <ActivityIndicator size="large" color={'#0000ff'}/>
      ) : (
        <>
          {achievements.map((achievement, index) =>
            <AchievementComponent achievement={achievement} key={index}/>
          )}
        </>
      )}
    </ScrollView>


  )
};
