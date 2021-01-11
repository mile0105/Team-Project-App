import * as React from 'react';
import {useEffect} from 'react';
import {fetchAchievements} from "../api/apis";

import { useNavigation } from '@react-navigation/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';

import MenuIcon from '../components/MenuIcon';
import {useState} from 'react';
import {Achievement} from "../api/models/achievements";
import {ScrollView} from "react-native-gesture-handler";
import AchievementComponent from "../components/AchievementComponent";

export default function AchievementsScreen() {

  const navigation = useNavigation();

  const [achievements, setAchievements] = useState<Achievement[]>([]);

  useEffect(() => {
    navigation.setOptions({
      showHeader: true,
      headerLeft: (props: StackHeaderLeftButtonProps) => (<MenuIcon/>)
    });

    fetchAchievements().then(data => {
      setAchievements(data.achievements);
    }).catch(err => {
      alert('Error occured');
    })
  }, []);

  return (

    <ScrollView>
      {achievements.map((achievement, index) =>
        <AchievementComponent achievement={achievement} key={index}/>
      )}
    </ScrollView>


  )
};
