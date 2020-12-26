import { GestureResponderEvent } from "react-native";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type DrawerParamList = {
  Achievements: undefined;
  Challenges: undefined;
  Events: undefined;
  Shop: undefined;
  Stats: undefined;
  Requirements: undefined;
};

export type AchievementsParamList = {
  Achievements: undefined;
};

export type ChallengesParamList = {
  Challenges: undefined;
};

export type EventsParamList = {
  Events: undefined;
};

export type AccountStatsParamList = {
  Stats: undefined;
}

export type ShopParamList = {
  Shop: undefined;
}

export type RequirementsParamList = {
  Requirements: undefined;
}

export type onPressFunc = (event: GestureResponderEvent) => void;
