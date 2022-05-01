const { getDArray, dArray2hString } = require("./rgb-base");
const { rgb2hsv, hsv2rgb } = require("./transfer");
const { caculateDistance } = require("./caculate-distance");

const finder = (colorString, hsvList, length = 3) => {
  const rgb = getDArray(colorString);
  const originHsv = rgb2hsv(rgb);

  console.log("targetColor:" + colorString);

  const hDiffList = hsvList
  .map((targetHsv) => [caculateDistance(originHsv, targetHsv), ...targetHsv])
    .sort((a, b) => a[0] - b[0]);

  const res = hDiffList
    .slice(0, length)
    .map(([distance, ...hsv]) => ({
      rgb: hsv2rgb(hsv),
      distance, 
    }))
    .map(({ rgb, distance }) => ({
      color: dArray2hString(rgb),
      rgb,
      distance,
      hsv: rgb2hsv(rgb)
    }));
  return res;
};

module.exports = { finder };
