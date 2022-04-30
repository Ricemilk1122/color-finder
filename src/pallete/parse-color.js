module.exports = function parseColor(s) {
  if (/^#[0-9a-fA-F]{3}$/.test(s)) {
    return {
      r: parseInt(s[1] + s[1], 16),
      g: parseInt(s[2] + s[2], 16),
      b: parseInt(s[3] + s[3], 16),
      a: 100,
    };
  }
  if (/^#[0-9a-fA-F]{6}$/.test(s)) {
    return {
      r: parseInt(s.substr(1, 2), 16),
      g: parseInt(s.substr(3, 2), 16),
      b: parseInt(s.substr(5, 2), 16),
      a: 100,
    };
  }
  if (/^\d+\s*,\s*\d+\s*,\s*\d+$/.test(s)) {
    const ns = s.split(",").map((n) => Number(n.trim()));
    return { r: ns[0], g: ns[1], b: ns[2], a: 100, raw: true };
  }
  if (/^rgb\(\d+/.test(s)) {
    const ns = s
      .substring(4)
      .split(",")
      .map((n) => Number(n.trim()));
    return { r: ns[0], g: ns[1], b: ns[2], a: 100 };
  }
  if (/^rgba\(\d+/.test(s)) {
    const ns = s
      .substring(5)
      .split(",")
      .map((n) => Number(n.trim()));
    return { r: ns[0], g: ns[1], b: ns[2], a: Math.round(ns[3] * 100) };
  }
  if (s.startsWith("rgba(var(")) {
    throw new Error("暗色主题待调试，暂不支持");
  }
  return null;
};
