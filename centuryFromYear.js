function centuryFromYear(year) {
    //returns the century when given a year
    // 1700 returns 17
    // 1771 returns 18
    return Number.isInteger(year/100) ? year/100 : Math.ceil(year/100)
};
