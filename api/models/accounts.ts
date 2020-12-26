export interface AccountsResponse {
  status: number,
  data: AccountResponseData
}

export interface AccountResponseData {
  account: Account,
  battlePass: BattlePass,
  image: string | null,
  stats: AllStats

}

export interface Account {
  id: string,
  name: string
}

export interface BattlePass {
  level: number,
  progress: number
}

export interface AllStats {
  all: Stats,
  keyboardMouse: Stats | null,
  gamepad: Stats | null,
  touch: Stats | null
}

export interface Stats {
  overall: Statistics | null,
  solo: Statistics | null,
  duo: Statistics | null,
  trio: Statistics | null,
  squad: Statistics | null,
  ltm: Statistics | null
}

export interface Statistics {
  score: number,
  scorePerMin: number
  scorePerMatch: number,
  wins: number,
  top3: number,
  top5: number,
  top6: number,
  top10: number,
  top12: number,
  top25: number,
  kills: number,
  killsPerMin: number,
  killsPerMatch: number,
  deaths: number,
  kd: number,
  matches: number,
  winRate: number,
  minutesPlayed: number,
  playersOutlived: number,
  lastModified: string
}
