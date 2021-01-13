import * as React from 'react';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackHeaderLeftButtonProps} from '@react-navigation/stack';

import MenuIcon from '../components/MenuIcon';
import {fetchEvents} from "../api/apis";
import {Event} from '../api/models/events';
import EventComponent from "../components/EventComponent";
import {ActivityIndicator, ScrollView} from "react-native";

export default function EventsScreen() {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [currentEvents, setCurrentEvents] = useState<Event[]>([]);

  useEffect(() => {

    if (!isLoading) {
      setIsLoading(true);
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
        setIsLoading(false);
      }).catch(err => {
        console.log('Error occurred');
        console.log(err);
        setIsLoading(false);
      })
    }

  }, []);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size="large" color={'#0000ff'}/>
      ) : (
        <ScrollView style={{marginTop: 10, marginBottom: 10}}>
          {currentEvents.map((event, index) => <EventComponent event={event} key={index}/>)}
        </ScrollView>
      )}

    </>
  )
};
