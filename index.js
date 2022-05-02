const getPallete = require("./src/pallete/get-pallete");
const { hsvFinder } = require("./src/util/hsv-finder");
const { labFinder } = require("./src/util/lab-finder");

const main = async (color, n, mode = 'lab') => {
  const { valueMap } = await getPallete();

  const rgbList = [...valueMap.keys()].map((s) => {
    const [r, g, b] = s.split(",");
    return [r, g, b];
  });

  const res = mode === 'lab' ? labFinder(color, rgbList, n) : hsvFinder(color, rgbList, n);
  console.table(res);
};

module.exports = main;

