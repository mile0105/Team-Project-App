import * as React from "react";
import {useState} from "react";
import {Challenge} from "../api/models/challenges";
import {ListItem} from "react-native-elements";
import ChallengeDetailsComponent from "./ChallengeDetailsComponent";
import {Modal} from "react-native";

export interface ChallengeComponentProps {
  challenge: Challenge
}

export default function ChallengeComponent({challenge}: ChallengeComponentProps) {

  const [modalVisible, setModalVisible] = useState(false);

  const color = challenge.prestige? 'red': 'white';

  return (
    <>
      <ListItem bottomDivider style={{backgroundColor: color}} onPress={() => {
        setModalVisible(true);
      }}>
        <ListItem.Content style={{width: "85%"}}>
          <ListItem.Title style={{width: "85%"}}>{challenge.title}</ListItem.Title>
          <ListItem.Subtitle>{`Experience: ${challenge.xp}`}</ListItem.Subtitle>
          <ListItem.Subtitle>{`Progress: ${challenge.progress_total}`}</ListItem.Subtitle>
          <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible)
            }}
          >
            <ChallengeDetailsComponent challenge={challenge}/>
          </Modal>
        </ListItem.Content>
        <ListItem.Chevron onPress={() => {
          setModalVisible(true)
        }}/>
      </ListItem>
    </>
  )

}
