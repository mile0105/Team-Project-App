import {Text} from "./Themed";
import * as React from "react";
import {Challenge, SubChallenge} from "../api/models/challenges";
import {Card, ListItem} from "react-native-elements";
import {ScrollView} from "react-native";

export interface ChallengeComponentProps {
  challenge: Challenge | SubChallenge
}

export default function ChallengeDetailsComponent({challenge}: ChallengeComponentProps) {

  return (
    <>
      <ScrollView>
        <Card>
          <Card.Title>{challenge.title}</Card.Title>
          <Card.Divider/>
          <ListItem>
            <ListItem.Title>
              {`Experience:  ${challenge.xp}`}
            </ListItem.Title>
          </ListItem>
          <ListItem>
            <ListItem.Title>
              {`Progress: ${challenge.progress_total}`}
            </ListItem.Title>
          </ListItem>

          {challenge.sub_challenge && (
            <>
              <Text style={{fontWeight: 'bold', textAlign: 'center'}}>Subchallenge:</Text>
              <ChallengeDetailsComponent challenge={challenge.sub_challenge}/>
            </>
          )}

        </Card>
      </ScrollView>
    </>
  )

}
