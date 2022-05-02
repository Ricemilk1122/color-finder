const { getDArray, dArray2hString } = require("./rgb");
const { rgb2lab } = require("./lab");
const { caculateLABDiff } = require("./lab-diff");

const labFinder = (colorString, rgbList, length = 3) => {
  console.log("targetColor:" + colorString);

  const rgb = getDArray(colorString);
  const lab = rgb2lab(rgb);

  const diffList = rgbList.map((rgb) => ({ rgb: rgb,lab: rgb2lab(rgb) }))
  .map((o) => ({ rgb: o.rgb, lab: o.lab, diff: caculateLABDiff(lab, o.lab) }))
    .sort((a, b) => a.diff - b.diff);

  const res = diffList
    .slice(0, length)
    .map(({ rgb, lab, diff }) => ({
      color: dArray2hString(rgb),
      rgb,
      lab,
      diff
    }));
  return res;
};

module.exports = { labFinder };
