const arrayToFilter4 = [2, 4, -6, 0, 4, 1, 8, 10, 921];
let filteredArray = arrayToFilter4.filter((item) => { if (item >= 3) return item; });
console.log("filteredArray =>", filteredArray);