const getPallete = require("../src/pallete/get-pallete");
const { dArray2hString } = require('../src/util/rgb-base');

const test = async (type) => {
  let dString = '';
  let hString = '';
  const res = await getPallete();
  [...res.valueMap.keys()].map((s) => {
    const [r,g,b] = s.split(',')
    dString += `rgb(${r},${g},${b})\t`
    hString += `${dArray2hString([r,g,b])}\t`
  })
  console.log(type === 'd' ? dString : hString);
};

test();
