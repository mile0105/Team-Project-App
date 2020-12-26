export interface Challenge {
  title: string,
  stars: number,
  xp: number,
  progress_total: number,
  party_assist: boolean,
  quest_id: string,
  sub_challenge: SubChallenge,
  reward: Reward | null,
  prestige: boolean
}

export interface SubChallenge {
  title: string,
  progress_total: number,
  xp: number,
  quest_id: string
  sub_challenge: SubChallenge | null
}

export interface Reward {

}

export interface Week {
  week: string,
  name: string,
  color: string,
  challenges: Challenge[]
}

export interface NonWeeklyChallenges {
  name: string,
  tags: string[],
  color: string,
  challenges: Challenge[]
}

export interface ChallengesResponse {
  weeks: Week[],
  seasonWeeks: string[],
  other: NonWeeklyChallenges[]
}
