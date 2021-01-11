import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';

import { View } from '../components/Themed';
import MenuIcon from '../components/MenuIcon';
import { useEffect, useState } from 'react';
import main from '../styles/main';
import {fetchEvents} from "../api/apis";
import {Event} from '../api/models/events';
import EventComponent from "../components/EventComponent";

export default function EventsScreen() {
  const navigation = useNavigation();

  const [currentEvents, setCurrentEvents] = useState<Event[]>([]);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props: StackHeaderLeftButtonProps) => (<MenuIcon/>)
    });

    fetchEvents().then(data => {
      const events = data.events.filter(ev => new Date(ev.beginTime) > new Date('2020-12-20'));
      setCurrentEvents(events);
    }).catch(err => {
      console.log('Error occurred');
      console.log(err);
    })
  }, []);

  return (
    <View style={main.centered}>
      {currentEvents.map((event, index) => <EventComponent event={event} key={index}/>)}
    </View>
  )
};
