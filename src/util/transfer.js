const rgb2hsv = (rgb) => {
  const [r, g, b] = rgb.map((s) => Number(s) % 256);
  const cMax = Math.max(r, g, b);
  const cMin = Math.min(r, g, b);
  const cDiff = cMax - cMin;

  let h;
  if (cDiff === 0) {
    h = 0;
  } else if (cMax === r) {
    h = (60 * ((g - b) / cDiff) + 360) % 360;
  } else if (cMax === g) {
    h = (60 * ((b - r) / cDiff) + 120) % 360;
  } else if (cMax === b) {
    h = (60 * ((r - g) / cDiff) + 240) % 360;
  }

  const s = cMax === 0 ? 0 : cDiff / cMax;
  const v = cMax / 255;

  return [h, s, v];
};

const hsv2rgb = (hsv) => {
  let r, g, b;
  const [h, s, v] = hsv.map((s) => Number(s));
  const h1 = Math.floor(hsv[0] / 60) % 6;

  const f = h / 60 - h1;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);

  switch (h1) {
    case 0:
      r = v;
      g = t;
      b = p;
      break;
    case 1:
      r = q;
      g = v;
      b = p;
      break;
    case 2:
      r = p;
      g = t;
      b = t;
      break;
    case 3:
      r = p;
      g = q;
      b = v;
      break;
    case 4:
      r = t;
      g = p;
      b = v;
      break;
    case 5:
      r = v;
      g = p;
      b = q;
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
};

module.exports = { rgb2hsv, hsv2rgb };
