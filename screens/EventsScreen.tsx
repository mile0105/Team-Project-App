import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackHeaderLeftButtonProps} from '@react-navigation/stack';

import MenuIcon from '../components/MenuIcon';
import {useEffect, useState} from 'react';
import {fetchEvents} from "../api/apis";
import {Event} from '../api/models/events';
import EventComponent from "../components/EventComponent";
import {ScrollView} from "react-native";

export default function EventsScreen() {
  const navigation = useNavigation();

  const [currentEvents, setCurrentEvents] = useState<Event[]>([]);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props: StackHeaderLeftButtonProps) => (<MenuIcon/>)
    });

    fetchEvents().then(data => {
      const now = new Date();
      const currEvents = data.events.filter(ev => new Date(ev.beginTime) < now && new Date(ev.endTime) > now);

      const distinctEvents: Event[] = [];

      for (let ev of currEvents) {
        if (!distinctEvents.some(existingEvent => existingEvent.name_line1 === ev.name_line1
                                                      && existingEvent.name_line2 === existingEvent.name_line2)) {
          distinctEvents.push(ev)
        }
      }

      setCurrentEvents(distinctEvents);
    }).catch(err => {
      console.log('Error occurred');
      console.log(err);
    })
  }, []);

  return (
    <ScrollView style={{marginTop: 10, marginBottom: 10}}>
      {currentEvents.map((event, index) => <EventComponent event={event} key={index}/>)}
    </ScrollView>

  )
};
