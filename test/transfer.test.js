const { rgb2hsv, hsv2rgb } = require("../src//util/transfer");

const testData = [
  [100, 10, 255],
  [10, 35, 255],
  [100, 10, 255],
  [100, 100, 255],
  [0, 0, 255],
  [255, 255, 255],
  [3, 26, 121],
  [78, 89, 105],
  [78, 89, 104],
];

const test = () => {
  const res = [];
  testData.forEach((rgb) => {
    const [r, g, b] = rgb;
    const [h, s, v] = rgb2hsv(rgb);
    const [r1, g1, b1] = hsv2rgb([h, s, v]);
    res.push({
      RGB: `rgb(${r},${g},${b})`,
      RGB2HSV: `hsv(${h},${s},${v})`,
      HSV2RGB: `rgb(${r1},${g1},${b1})`,
    });
  });
  console.table(res);
};

test();
