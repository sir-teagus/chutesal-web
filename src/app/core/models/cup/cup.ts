import { Team } from "../team/team";
import { Match } from "./match";

export class Cup {
  "id": number;
  "state": string;
  "name": string;
  "teams": Team[];
  "signUpPeriod": string[];
  "cupGamesPeriod": string[];
  "announcementDate": string;
  "createdAt": string;
  "updatedAt": string;
  "matches": Match[];
  "schoolId": number;
}
