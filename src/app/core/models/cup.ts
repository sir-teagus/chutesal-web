import { Match } from "./match";
import { Team } from "./team";

export class Cup {
  "id"?: number;
  "status"?: string;
  "name": string;
  "teams"?: Team[];
  "signUpPeriod": string[];
  "cupGamesPeriod": string[];
  "announcementDate": Date;
  "createdAt"?: string;
  "updatedAt"?: string;
  "matches"?: Match[];
  "schoolId"?: number;
}
