export interface Event {
  id: string,
  region: string,
  name_line1: string,
  name_line2: string,
  poster: string,
  short_description: string,
  long_description: string,
  schedule: string,
  beginTime: string,
  endTime: string,
  platforms: string[],
}

export interface EventsResponse {
  result: boolean,
  region: string,
  lang: string,
  events: Event[],
}
