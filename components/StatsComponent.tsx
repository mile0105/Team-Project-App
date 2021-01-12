import * as React from "react";
import {AllStats} from "../api/models/accounts";
import {ListItem} from "react-native-elements";
import StatisticsComponent from "./StatisticsComponent";
import {View} from "react-native";

export interface StatsComponentProps {
  stats: AllStats
}

export default function StatsComponent({stats: {all}}: StatsComponentProps) {


  const {solo, duo, trio, squad, overall, ltm} = all;

  return (
    <View>
      {solo && (
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>Solo</ListItem.Title>
          </ListItem.Content>
          <StatisticsComponent statistics={solo}/>
        </ListItem>
      )}


      {duo && (
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>Duo</ListItem.Title>
          </ListItem.Content>
          <StatisticsComponent statistics={duo}/>
        </ListItem>
      )}


      {trio && (
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>Trio</ListItem.Title>
          </ListItem.Content>
          <StatisticsComponent statistics={trio}/>
        </ListItem>
      )}


      {squad && (
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>Squad</ListItem.Title>
          </ListItem.Content>
          <StatisticsComponent statistics={squad}/>
        </ListItem>
      )}


      {ltm && (
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>LTM</ListItem.Title>
          </ListItem.Content>
          <StatisticsComponent statistics={ltm}/>
        </ListItem>
      )}

      {overall && (
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>Overall</ListItem.Title>
          </ListItem.Content>
          <StatisticsComponent statistics={overall}/>
        </ListItem>
      )}

    </View>
  )
}
