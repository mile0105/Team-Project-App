import {Text} from "./Themed";
import * as React from "react";
import {AllStats, Statistics} from "../api/models/accounts";
import {View} from "react-native";

export interface StatisticsComponentProps {
  statistics: Statistics
}

export default function StatisticsComponent({statistics}: StatisticsComponentProps) {

  return (
    <View>
      <Text>
        {`K:${statistics.kills} D:${statistics.deaths}`}
      </Text>

    </View>
  )
}
