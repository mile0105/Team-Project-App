import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import * as React from 'react';

import AchievementsScreen from '../screens/AchievementsScreen';
import ChallengesScreen from '../screens/ChallengesScreen';
import EventsScreen from '../screens/EventsScreen';
import {
  AccountStatsParamList,
  AchievementsParamList,
  ChallengesParamList,
  DrawerParamList,
  EventsParamList,
  RequirementsParamList,
  ShopParamList
} from '../types';
import ShopScreen from "../screens/ShopScreen";
import RequirementsScreen from "../screens/RequirementsScreen";
import AccountStatsScreen from "../screens/AccountStatsScreen";

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Achievements"
        component={DatabaseNavigator}/>
      <Drawer.Screen
        name="Challenges"
        component={ChallengesNavigator}
      />
      <Drawer.Screen
        name="Events"
        component={EventsNavigator}
      />
      <Drawer.Screen
        name="Stats"
        component={AccountStatsNavigator}
      />
      <Drawer.Screen
        name="Shop"
        component={ShopNavigator}
      />
      <Drawer.Screen
        name="Requirements"
        component={RequirementsNavigator}
      />

    </Drawer.Navigator>
  );
}

const AchievementsStack = createStackNavigator<AchievementsParamList>();

function DatabaseNavigator() {
  return (
    <AchievementsStack.Navigator>
      <AchievementsStack.Screen
        name="Achievements"
        component={AchievementsScreen}
      />
    </AchievementsStack.Navigator>
  )
}

const ChallengesStack = createStackNavigator<ChallengesParamList>();

function ChallengesNavigator() {
  return (
    <ChallengesStack.Navigator>
      <ChallengesStack.Screen
        name="Challenges"
        component={ChallengesScreen}
      />
    </ChallengesStack.Navigator>
  )
}

const EventsStack = createStackNavigator<EventsParamList>();

function EventsNavigator() {
  return (
    <EventsStack.Navigator>
      <EventsStack.Screen
        name="Events"
        component={EventsScreen}
      />
    </EventsStack.Navigator>
  )
}

const AccountStatsStack = createStackNavigator<AccountStatsParamList>();

function AccountStatsNavigator() {
  return (
    <AccountStatsStack.Navigator>
      <AccountStatsStack.Screen
        name="Stats"
        component={AccountStatsScreen}
      />
    </AccountStatsStack.Navigator>
  )
}

const ShopStack = createStackNavigator<ShopParamList>();

function ShopNavigator() {
  return (
    <ShopStack.Navigator>
      <ShopStack.Screen
        name="Shop"
        component={ShopScreen}
      />
    </ShopStack.Navigator>
  )
}

const RequirementsStack = createStackNavigator<RequirementsParamList>();

function RequirementsNavigator() {
  return (
    <RequirementsStack.Navigator>
      <RequirementsStack.Screen
        name="Requirements"
        component={RequirementsScreen}
      />
    </RequirementsStack.Navigator>
  )
}
