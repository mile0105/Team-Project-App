import {
  ACCOUNTS_URL,
  ACHIEVEMENTS_URL,
  API_TOKEN,
  CHALLENGES_URL,
  EVENTS_URL,
  SHOP_URL
} from "../constants/APIConstants";
import {ChallengesResponse} from "./models/challenges";
import {gretch} from "gretchen";
import {AccountsResponse} from "./models/accounts";
import {EventsResponse} from "./models/events";
import {AchievementResponse} from "./models/achievements";
import {ShopResponse} from "./models/shop";

export const authorizationHeader = {'Authorization': API_TOKEN };

export const makeGetRequest = async<T> (url: string): Promise<T> => {

  const {data, error} = await gretch<T>(url, {
    method: 'GET',
    headers: authorizationHeader
  }).json();

  if (error) {
    throw error;
  }

  return data!!;
};

export const fetchSeasonalChallenges = async (): Promise<ChallengesResponse> => {
  return await makeGetRequest<ChallengesResponse>(CHALLENGES_URL);
};

export const fetchAccountStatistics = async (accountName: string): Promise<AccountsResponse> => {
  const url = `${ACCOUNTS_URL}${accountName}`;
  return await makeGetRequest<AccountsResponse>(url);
};

export const fetchEvents = async (): Promise<EventsResponse> => {
  return await makeGetRequest<EventsResponse>(EVENTS_URL);
};

export const fetchAchievements = async (): Promise<AchievementResponse> => {
  return await makeGetRequest<AchievementResponse>(ACHIEVEMENTS_URL);
};

export const fetchShop = async (): Promise<ShopResponse> => {
  return await makeGetRequest<ShopResponse>(SHOP_URL);
};
