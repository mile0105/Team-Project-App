import * as React from 'react';
import {Avatar, ListItem} from 'react-native-elements';

import {Achievement} from "../api/models/achievements";
import {View} from "react-native";


export interface AchievementComponentProps {
  achievement: Achievement
}

export default function AchievementComponent({achievement}: AchievementComponentProps) {

  return(

    <View>
      <ListItem bottomDivider topDivider>
        <Avatar source={{uri: achievement.image}}/>
        <ListItem.Content>
          <ListItem.Title>{achievement.name}</ListItem.Title>
          <ListItem.Subtitle>{achievement.description}</ListItem.Subtitle>
        </ListItem.Content>

      </ListItem>
    </View>
  )

}
