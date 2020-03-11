function centuryFromYear(year) {
    return Number.isInteger(year/100) ? year/100 : Math.ceil(year/100)
};
