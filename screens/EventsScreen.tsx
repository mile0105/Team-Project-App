import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';

import { Text, View } from '../components/Themed';
import MenuIcon from '../components/MenuIcon';
import { useEffect } from 'react';
import main from '../styles/main';
import {fetchEvents} from "../api/apis";

export default function EventsScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props: StackHeaderLeftButtonProps) => (<MenuIcon/>)
    });

    fetchEvents().then(data => {
      const events = data.events.filter(ev => new Date(ev.beginTime) > new Date('2020-12-20'));
      console.log(events);
    }).catch(err => {
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
        This is Events Screen
      </Text>
    </View>
  )
};
