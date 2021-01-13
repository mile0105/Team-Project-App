import * as React from "react";
import {AllStats} from "../api/models/accounts";
import StatisticsComponent from "./StatisticsComponent";
import {Text, View} from "react-native";
import {Col, Grid, Row} from "react-native-easy-grid";
import main from "../styles/main";

export interface StatsComponentProps {
  stats: AllStats
}

export default function StatsComponent({stats: {all}}: StatsComponentProps) {


  const {solo, duo, trio, squad, overall, ltm} = all;

  return (
    <View>
      <Grid style={{marginTop: 15}}>
        <Row>
          <Col>
            <Text style={main.boldText}>
              Type
            </Text>
          </Col>
          <Col>
            <Text style={main.boldText}>
              Kills
            </Text>
          </Col>
          <Col>
            <Text style={main.boldText}>
              Deaths
            </Text>
          </Col>
          <Col>
            <Text style={main.boldText}>
              Matches played
            </Text>
          </Col>
        </Row>

        {solo && (
          <StatisticsComponent statistics={solo} type={'Solo'}/>
        )}

        {duo && (
          <StatisticsComponent statistics={duo} type={'Duo'}/>
        )}

        {trio && (
          <StatisticsComponent statistics={trio} type={'Trio'}/>
        )}

        {squad && (
          <StatisticsComponent statistics={squad} type={'Squad'}/>
        )}

        {ltm && (
          <StatisticsComponent statistics={ltm} type={'LTM'}/>
        )}

        {overall && (
          <StatisticsComponent statistics={overall} type={'Overall'}/>
        )}

      </Grid>

    </View>
  )
}
