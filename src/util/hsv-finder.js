const { getDArray, dArray2hString } = require("./rgb");
const { rgb2hsv } = require("./hsv");
const { caculateHSVDistance } = require("./hsv-distance");

const hsvFinder = (colorString, rgbList, length = 3) => {
  console.log("targetColor:" + colorString);

  const rgb = getDArray(colorString);
  const hsv = rgb2hsv(rgb);
  
  const hDiffList = rgbList.map((rgb) => ({ rgb: rgb, hsv: rgb2hsv(rgb) }))
  .map((o) => ({ rgb: o.rgb, hav: o.hsv, dicetance: caculateHSVDistance(hsv, o.hsv) }))
    .sort((a, b) => a.dicetance - b.dicetance);

  const res = hDiffList
    .slice(0, length)
    .map(({rgb, hsv, distance}) => ({
      color: dArray2hString(rgb),
      rgb,
      hsv: rgb2hsv(rgb),
      distance,
    }))
  return res;
};

module.exports = { hsvFinder };
