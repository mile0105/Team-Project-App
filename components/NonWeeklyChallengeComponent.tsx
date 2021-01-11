import {Text} from "./Themed";
import * as React from "react";
import {NonWeeklyChallenge, Week} from "../api/models/challenges";
import ChallengeComponent from "./ChallengeComponent";

export interface NonWeeklyChallengeComponentProps {
  nonWeeklyChallenge: NonWeeklyChallenge
}

export default function NonWeeklyChallengeComponent({nonWeeklyChallenge}: NonWeeklyChallengeComponentProps) {

  return (
    <>
      <Text>
        {nonWeeklyChallenge.name}
      </Text>
      {nonWeeklyChallenge.challenges.map((challenge, index) => <ChallengeComponent challenge={challenge} key={index}/>)}
    </>
  )
}
