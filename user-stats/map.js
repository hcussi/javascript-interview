export const count = (userStats) => {

  return userStats
    .filter(userStat => !isNaN(userStat.key))
    .filter(userStat => userStat.value)
    .filter(userStat => userStat.value.visitCount !== null && userStat.value.visitCount !== undefined )
    .reduce((acc, userStat) => {
      acc[userStat.key] = acc[userStat.key] ? acc[userStat.key] + userStat.value.visitCount : userStat.value.visitCount;
      return acc;
    }, {});
}
