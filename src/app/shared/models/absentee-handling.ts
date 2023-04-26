export enum AbsenteeHandling {
  IGNORE = 'IGNORE',
  EXPLAIN = 'EXPLAIN',
  DM_CONTROLLED = 'DM_CONTROLLED',
  PLAYER_CONTROLLED = 'PLAYER_CONTROLLED',
}

export enum AbsenteeControlPlayer {
  SPONTANEOUS = 'SPONTANEOUS',
  DEDICATED_SECOND = 'DEDICATED_SECOND'
}

export enum AbsenteeControlLevel {
  ON_DEMAND = 'ON_DEMAND', // only when asked, uses the most obvious abilities
  STRATEGIC = 'STRATEGIC', // actively uses best abilities
  ROLEPLAY = 'ROLEPLAY' // actively uses best abilities & roleplays
}
