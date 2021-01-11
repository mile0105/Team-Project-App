import {Text} from "./Themed";
import * as React from "react";
import {Challenge} from "../api/models/challenges";

export interface ChallengeComponentProps {
  challenge: Challenge
}

export default function ChallengeComponent({challenge}: ChallengeComponentProps) {

  return(

    <>
      <Text>
        {challenge.title}
      </Text>
    </>
  )

}
