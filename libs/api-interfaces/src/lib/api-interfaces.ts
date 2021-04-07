export enum ItemType {
  JOB = "job",
  STORY = "story",
  COMMENT = "comment",
  POLL = "poll",
  POLLOPT = "pollopt",
}

export interface Item {
  id: number;
  deleted?: boolean;
  type?: ItemType;
  by?: string;
  time?: number;
  text?: string;
  dead?: boolean;
  parent?: number;
  poll?: number;
  kids?: number[];
  url?: string;
  score?: number;
  title?: string;
  parts?: number[];
  descendants?: number[];
}

export interface User {
  id: string; //	The user's unique username. Case-sensitive. Required.
  created: number;
  karma: number;
  about?: string;
  submitted?: number[];
}
