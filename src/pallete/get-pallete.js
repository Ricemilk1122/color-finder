const path = require("path");
const fs = require("fs");
const parseColor = require("./parse-color");


const getPallete = async () => {
  const palleteFile = path.resolve(__dirname, "./theme.css");
  let cnt = "";
  try {
    cnt = fs.readFileSync(palleteFile, "utf-8");
  } catch (ex) {
    console.error("没有找到色板文件");
    process.exit(-1);
  }

  const lines = cnt
    .match(/body\s+\{([^}]+)\}/g)
    .map((str) => str.replace(/(^body\s+\{)|(\}$)/g, "").split("\n"))
    .flat()
    .map((line) => line.trim().replace(/;$/, ""))
    .filter((line) => line.startsWith("--"));

  const clrNameMap = new Map();
  const clrRefs = [];
  lines.forEach((line) => {
    const [name, val] = line.split(":").map((s) => s.trim());
    const clr = parseColor(val);
    if (!clr) return;
    if (clr.c) clrRefs.push([name, clr]);
    else {
      // const rk = `${clr.r},${clr.g},${clr.b},${clr.a}`;
      if (clrNameMap.has(name)) {
        throw new Error("名称重复，请检查色板");
      }
      clrNameMap.set(name, clr);
    }
  });
  clrRefs.forEach(([name, clr]) => {
    const refClr = clrNameMap.get(clr.c);
    if (!refClr) throw new Error("没有找到引用颜色，请检查色板");
    if (clrNameMap.has(name)) {
      throw new Error("名称重复，请检查色板：" + name);
    }
    clrNameMap.set(name, {
      r: refClr.r,
      g: refClr.g,
      b: refClr.b,
      a: clr.a,
      raw: refClr.raw,
    });
  });
  const clrMap = new Map();
  clrNameMap.forEach((clr, name) => {
    clr.name = name;
    const ck = `${clr.r},${clr.g},${clr.b},${clr.a}`;
    if (!clrMap.has(ck)) {
      clrMap.set(ck, clr);
      // throw new Error('颜色值重复，请检查色板：' + ck + ',' + name);
    }
  });

  return {
    nameMap: clrNameMap,
    valueMap: clrMap,
  };
};

module.exports = getPallete;
