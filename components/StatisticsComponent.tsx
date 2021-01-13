import {Text} from "./Themed";
import * as React from "react";
import {Statistics} from "../api/models/accounts";
import {View} from "react-native";
import {Col, Row} from "react-native-easy-grid";
import main from "../styles/main";

export interface StatisticsComponentProps {
  statistics: Statistics,
  type: string,
}

export default function StatisticsComponent({statistics, type}: StatisticsComponentProps) {

  return (
    <>
      <Row style={{marginTop: 10}}>
        <Col>
          <Text style={main.boldText}>
            {type}
          </Text>
        </Col>
        <Col>
          <Text>
            {statistics.kills}
          </Text>
        </Col>
        <Col>
          <Text>
            {statistics.deaths}
          </Text>
        </Col>

        <Col>
          <Text>
            {statistics.matches}
          </Text>
        </Col>
      </Row>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          marginTop: 5,
        }}
      />
    </>
  )
}
