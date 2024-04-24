import userStatsMap from "./data.js";
import { count } from "./map.js";

// Unify map based on key and add the visit count
// Skip invalid long key values and nulls/empty

console.log("userStatsMap: ", userStatsMap);
const result = count(userStatsMap);
console.log("result", result);
