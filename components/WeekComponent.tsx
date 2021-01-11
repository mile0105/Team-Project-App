import {Text} from "./Themed";
import * as React from "react";
import {Week} from "../api/models/challenges";
import ChallengeComponent from "./ChallengeComponent";

export interface WeekComponentProps {
  week: Week
}

export default function WeekComponent({week}: WeekComponentProps) {

  return (
    <>
      <Text>
        {week.name}
      </Text>
      {week.challenges.map((challenge, index) => <ChallengeComponent challenge={challenge} key={index}/>)}
    </>
  )
}
