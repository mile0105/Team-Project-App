import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackHeaderLeftButtonProps} from '@react-navigation/stack';

import {Text, View} from '../components/Themed';
import MenuIcon from '../components/MenuIcon';
import {useEffect} from 'react';
import main from '../styles/main';
import {fetchAccountStatistics} from "../api/apis";

export default function AccountStatsScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      showHeader: true,
      headerLeft: (props: StackHeaderLeftButtonProps) => (<MenuIcon/>)
    });

    fetchAccountStatistics('Grunec1').then(data => {
        console.log(data);
    }
    ).catch(err => {
      console.log('Error occurred');
      console.log(err);
    })

  });

  return (
    <View style={main.centered}>
      <Text
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        This is Stats Screen
      </Text>
    </View>
  )
};
