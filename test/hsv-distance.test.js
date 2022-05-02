const { caculateHSVDistance } = require("../src/util/hsv-distance");
const { dArray2dString } = require("../src/util/rgb");

const originColor = [78, 89, 104];

const testData = [
  [138, 9, 147],
  [78, 89, 105],
  [78, 89, 104],
];

const test = () => {
  const res = [];
  testData.forEach((compareColor) => {
    const distance = caculateHSVDistance(compareColor, originColor);
    res.push({
      originColor: dArray2dString(originColor),
      compareColor: dArray2dString(compareColor),
      distance,
    });
  });
  res.sort((a, b) => a.distance - b.distance);
  console.table(res);
};

test();
