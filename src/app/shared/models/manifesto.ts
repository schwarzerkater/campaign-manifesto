import {ScheduleType} from "./schedule-type";
import {AbsenteeHandling, AbsenteeControlLevel, AbsenteeControlPlayer} from "./absentee-handling";

export interface Manifesto {
  // REQUIRED FIELDS: DROPDOWN (ALSO FOR BOOLEAN), TEXTAREA

  // PAGE ONE ? PARAGRAPH ONE ?

  // always
  scheduleType: ScheduleType
  // if schedule is not spontaneous (what hour, what weekday(s), how often)
  scheduleInfo: string

  // always
  rescheduleThreshold: number
  // if rescheduleThreshold is not 1
  absenteeHandling: AbsenteeHandling
  // if absenteeHandling is PLAYER_CONTROLLED
  absenteeControlPlayer: AbsenteeControlPlayer
  // if absenteeHandling is DM_CONTROLLED or PLAYER_CONTROLLED
  absenteeControlLevel: AbsenteeControlLevel
  // if rescheduleThreshold is not 1
  absenteeHandlingInfo: string

  food: boolean
  // if food true (when, who orders where)
  foodInfo: string

  // PAGE / PARAGRAPH TWO
  // ...
}
