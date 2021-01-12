import * as React from "react";
import {NonWeeklyChallenge} from "../api/models/challenges";
import ChallengeComponent from "./ChallengeComponent";
import {Card} from "react-native-elements";

export interface NonWeeklyChallengeComponentProps {
  nonWeeklyChallenge: NonWeeklyChallenge
}

export default function NonWeeklyChallengeComponent({nonWeeklyChallenge}: NonWeeklyChallengeComponentProps) {

  return (
    <>
      <Card>
        <Card.Title>{nonWeeklyChallenge.name}</Card.Title>
        <Card.Divider/>
        {nonWeeklyChallenge.challenges.map((challenge, index) => <ChallengeComponent challenge={challenge} key={index}/>)}
      </Card>
    </>
  )
}
