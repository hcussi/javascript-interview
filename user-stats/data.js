import { UserStats } from "./userStats.js";

const userStatsMap = [
  { key: "1", value: new UserStats(10)},
  { key: "2", value: new UserStats(20)},
  { key: "3", value: new UserStats(30)},
  { key: "hola", value: new UserStats(30)},
  { key: "4", value: new UserStats(40)},
  { key: "4", value: null},
  { key: null, value: null},
  { key: "5", value: new UserStats()},
  { key: "1", value: new UserStats(1)},
  { key: "2", value: new UserStats(2)},
  { key: "2", value: new UserStats(22)},
  { key: "2", value: new UserStats(224)},
];

export default userStatsMap;
