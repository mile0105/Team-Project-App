export interface AchievementResponse {
  result: boolean,
  season: number,
  achievements: Achievement[]
}

export interface Achievement {
  id: string,
  name: string,
  description: string,
  total: number,
  image: string
}
