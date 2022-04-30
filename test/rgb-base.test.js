const {
  dString2dArray,
  hString2dArray,
  dArray2dString,
  dArray2hString,
} = require("../src/util/rgb-base");

const testData = [
  "rgb(10,35,255)",
  "rgb(100,10,255)",
  "rgb(100,100,255)",
  "rgb(0,0,255)",
  "rgb(255,35,255)",
  "rgb(255,255,255)",
  "rgb(25,95,33)",
  "rgb(78,89,105)",
];

const test = () => {
  const res = [];
  testData.forEach((rgb) => {
    const hString = dArray2hString(dString2dArray(rgb));
    const dString = dArray2dString(hString2dArray(hString));
    res.push({
      Demical: rgb,
      Demical2Hex: hString,
      Hex2Demical: dString,
    });
  });
  console.table(res);
};

test();
