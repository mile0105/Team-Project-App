import * as React from 'react';
import { ListItem } from 'react-native-elements';

import {Achievement} from "../api/models/achievements";
import {Text} from "./Themed";


export interface AchievementComponentProps {
  achievement: Achievement
}

export default function AchievementComponent({achievement}: AchievementComponentProps) {

  return(

    <>
      <Text>
        {achievement.name}
      </Text>
    </>
  )

}
