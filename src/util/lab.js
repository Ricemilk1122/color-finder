
const param_1_3 = 1 / 3;
const param_16_116 = 16 / 116;
const xn = 0.950456;
const yn = 1.0;
const zn = 1.088754;

// 色彩校正
const gamma = (x) => {
    return x > 0.04045 ? Math.pow((x + 0.055) / 1.055, 2.4) : x / 12.92;
}

const rgb2xyz = (rgb) => {
    const [r,g,b] = rgb;
    const R = gamma(r);
    const G = gamma(g);
    const B = gamma(b);

    const x = 0.4124564 * R + 0.3575761 * G + 0.1804375 * B;
    const y = 0.2126729 * R + 0.7151522 * G + 0.0721750 * B;
    const z = 0.0193339 * R + 0.1191920 * G + 0.9503041 * B;

    return [x, y, z];
}

const xyz2lab = (xyz) => {
    const [x,y,z] = xyz;
    const X = x / xn;
    const Y = y / yn;
    const Z = z / zn;

    const fY = Y > 0.008856 ? Math.pow(Y, param_1_3) : 7.787 * Y + param_16_116;
    const fX = X > 0.008856 ? Math.pow(X, param_1_3) : 7.787 * X + param_16_116;
    const fZ = Z > 0.008856 ? Math.pow(Z, param_1_3) : 7.787 * Z + param_16_116;


    let L = 116 * fY - 16;
    L = L > 0 ? L : 0;
    const a = 500 * (fX - fY);
    const b = 200 * (fY - fZ);

    return [L, a, b]
}

const rgb2lab = (rgb) => {
    const xyz = rgb2xyz(rgb);
    return xyz2lab(xyz);
}

module.exports = { rgb2lab }