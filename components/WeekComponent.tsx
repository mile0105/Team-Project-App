import * as React from "react";
import {Week} from "../api/models/challenges";
import ChallengeComponent from "./ChallengeComponent";
import {Card} from "react-native-elements";

export interface WeekComponentProps {
  week: Week
}

export default function WeekComponent({week}: WeekComponentProps) {

  return (
    <>
      <Card>
        <Card.Title>{week.name}</Card.Title>
        <Card.Divider/>
        {week.challenges.map((challenge, index) => <ChallengeComponent challenge={challenge} key={index}/>)}
      </Card>
    </>
  )
}
