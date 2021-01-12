import * as React from "react";
import {AccountResponseData} from "../api/models/accounts";
import StatsComponent from "./StatsComponent";
import {View} from "react-native";

export interface AccountComponentProps {
  data: AccountResponseData
}

export default function AccountComponent({data}: AccountComponentProps) {

  const {stats} = data;

  return (
    <View>
      <StatsComponent stats={stats}/>
    </View>
  )
}
