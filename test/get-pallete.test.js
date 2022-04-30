const getPallete = require("../src/pallete/get-pallete");

const test = async () => {
  const res = await getPallete();
  console.log(res);
};

test();
