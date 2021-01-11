import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';

import MenuIcon from '../components/MenuIcon';

import {useEffect, useState} from 'react';
import {fetchSeasonalChallenges} from "../api/apis";
import {NonWeeklyChallenge, Week} from "../api/models/challenges";
import WeekComponent from "../components/WeekComponent";
import NonWeeklyChallengeComponent from "../components/NonWeeklyChallengeComponent";
import {ScrollView} from "react-native-gesture-handler";

export default function ChallengesScreen() {

  const navigation = useNavigation();
  const [weeks, setWeeks] = useState<Week[]>([]);
  const [otherChallenges, setOtherChallenges] = useState<NonWeeklyChallenge[]>([]);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props: StackHeaderLeftButtonProps) => (<MenuIcon/>)
    });

    fetchSeasonalChallenges().then(data => {

      const weeks: Week[] = [];

      for (let weekNumber of data.seasonWeeks) {
        weeks.push(data.weeks[weekNumber]);
      }

      setWeeks(weeks);
      setOtherChallenges(data.other.slice(0, 5))
    }).catch(err => {
      console.log('Error occurred');
      console.log(err);
    })

  }, []);

  return (
    <ScrollView>

      <>
        {weeks.map((week, index) => <WeekComponent week={week} key={index}/>)}
      </>
      <>
        {otherChallenges.map((nonWeeklyChallenge, index) => <NonWeeklyChallengeComponent
          nonWeeklyChallenge={nonWeeklyChallenge} key={index}/>)}
      </>
    </ScrollView>

  )
};
