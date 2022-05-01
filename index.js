const getPallete = require("./src/pallete/get-pallete");
const { rgb2hsv } = require("./src/util/transfer");
const { finder } = require("./src/util/finder");

const main = async (color,n) => {
  const { valueMap } = await getPallete();

  const rgbList = [...valueMap.keys()].map((s) => {
    const [r, g, b] = s.split(",");
    return [r, g, b];
  });
  const hsvList = rgbList.map((rgb) => rgb2hsv(rgb));

  const res = finder(color, hsvList, n);
  console.table(res);
};

module.exports = main;

