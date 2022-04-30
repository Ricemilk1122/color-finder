const getPallete = require("./src/pallete/get-pallete");
const { rgb2hsv } = require("./src/util/transfer");
const { finder } = require("./src/util/finder");

const main = async (color) => {
  const { valueMap } = await getPallete();

  const rgbList = [...valueMap.keys()].map((s) => {
    const [r, g, b] = s.split(",");
    return [r, g, b];
  });
  const hsvList = rgbList.map((rgb) => rgb2hsv(rgb));

  const res = finder(color, hsvList, 10);
  console.table(res);
};

main("rgb(230,63,78)");
