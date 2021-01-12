import * as React from "react";
import {Event} from "../api/models/events";
import {Text} from "react-native";
import {Card} from "react-native-elements";

export interface EventComponentProps {
  event: Event
}

export default function EventComponent({event}: EventComponentProps) {

  const getEventDurationScreen = () => {
    const beginTime = new Date(event.beginTime);
    const endTime = new Date(event.endTime);

    return `${beginTime.toLocaleDateString()} - ${endTime.toLocaleDateString()}`

  };

  return (
    <Card containerStyle={{width: "90%"}}>
      <Card.Title style={{textAlign: 'center', fontWeight: 'bold'}}>
        {`${event.name_line1} | ${event.name_line2}`}
      </Card.Title>
      <Card.Divider/>
      <Card.Title>
        {getEventDurationScreen()}
      </Card.Title>
      <Card.Divider/>
      <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
        {event.short_description}
      </Text>
      <Card.Divider/>
      <Text>
        {event.long_description}
      </Text>

      <Card.Image source={{ uri: event.poster}}/>
    </Card>
  )

}
