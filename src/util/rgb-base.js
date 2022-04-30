const DEM_REGEX = /^rgb\((\d{1,3})\,(\d{1,3})\,(\d{1,3})\)$/;
const HEX_REGEX = /^#([A-Fa-f0-90-9]{2})([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})/;

const isDString = (string) => {
  return !!DEM_REGEX.exec(string);
};
const isHString = (string) => {
  return !!HEX_REGEX.exec(string);
};

const dString2dArray = (dString) => {
  const res = DEM_REGEX.exec(dString.replace(/\s+/g, ""));
  if (!res) {
    throw new Error(`${dString}匹配失败`);
  }
  const [str, r, g, b] = res;
  return [r, g, b];
};

const hString2dArray = (hString) => {
  const res = HEX_REGEX.exec(hStringd.replace(/\s+/g, ""));
  if (!res) {
    throw new Error(`${hString}匹配失败`);
  }
  const [str, r, g, b] = res;
  return [r, g, b].map((s) => Number("0x" + s).toString(10));
};

const dArray2dString = (dArray) => {
  const [r, g, b] = dArray.map((s) => Number(s) % 256);
  return `rgb(${r},${g},${b})`;
};

const dArray2hString = (hArray) => {
  const [r, g, b] = hArray.map((s) => {
    const color = (Number(s) % 256).toString(16).toUpperCase();
    return color.length === 1 ? "0" + color : color;
  });
  return `#${r}${g}${b}`;
};

const getDArray = (colorString) => {
  const color = colorString.replace(/\s+/g, "");
  if (isDString(color)) {
    return dString2dArray(color);
  }
  if (isHString(color)) {
    return hString2dArray(color);
  }
  throw new Error(`颜色${colorString}解析失败`);
};

const getString = (dArray) => {
  return {
    hexColor: dArray2hString(dArray),
    rgbColor: dArray2dString(dArray),
  };
};

module.exports = {
  isDString,
  isHString,
  dString2dArray,
  hString2dArray,
  dArray2dString,
  dArray2hString,
  getDArray,
  getString,
};
