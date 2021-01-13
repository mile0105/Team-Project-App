import * as React from 'react';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackHeaderLeftButtonProps} from '@react-navigation/stack';

import MenuIcon from '../components/MenuIcon';
import {fetchSeasonalChallenges} from "../api/apis";
import {NonWeeklyChallenge, Week} from "../api/models/challenges";
import WeekComponent from "../components/WeekComponent";
import NonWeeklyChallengeComponent from "../components/NonWeeklyChallengeComponent";
import {ScrollView} from "react-native-gesture-handler";
import {ActivityIndicator} from "react-native";

export default function ChallengesScreen() {

  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [weeks, setWeeks] = useState<Week[]>([]);
  const [otherChallenges, setOtherChallenges] = useState<NonWeeklyChallenge[]>([]);

  useEffect(() => {

    if (!isLoading) {
      setIsLoading(true);
      navigation.setOptions({
        headerLeft: (props: StackHeaderLeftButtonProps) => (<MenuIcon/>)
      });

      fetchSeasonalChallenges().then(data => {

        const weeks: Week[] = [];

        for (let weekNumber of data.seasonWeeks) {
          weeks.push(data.weeks[weekNumber]);
        }

        setWeeks(weeks);
        setOtherChallenges(data.other);
        setIsLoading(false);
      }).catch(err => {
        alert('Could not fetch challenges');
        console.log('Error occurred');
        console.log(err);
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
          {weeks.map((week, index) => <WeekComponent week={week} key={index}/>)}
          {otherChallenges.map((nonWeeklyChallenge, index) => <NonWeeklyChallengeComponent
            nonWeeklyChallenge={nonWeeklyChallenge} key={index}/>)}
        </>
      )}
    </ScrollView>

  )
};
