//彩度计算
const cab = (a, b) => {
    return Math.pow(a * a + b * b, 0.5);
}

//色调角计算
const hab = (a, b) => {
    if(a === 0) return 90;

    h = (180 / Math.PI) * Math.atan(b / a);

    if (a > 0 && b > 0) {
       return h;
    }
    else if (a < 0 && b > 0) {
        return 180 + h;
    }
    else if (a < 0 && b < 0) {
        return 180 + h;
    }
    else {
        return 360 + h;
    }
};

const kL = 1;
const kC = 1;
const kH = 1;

/// 两个色值的相似度[0-100]
const caculateLABDiff = (labColor1, labColor2) => {
    const [l1, a1, b1] = labColor1;
    const [l2, a2, b2] = labColor2;

    const mean_cab = (cab(a1,a2) + cab(a2,b2)) / 2;
    const mean_cab_pow7 = Math.pow(mean_cab, 7);
    const G = 0.5 * (1 - Math.pow(mean_cab_pow7 / (mean_cab_pow7 + Math.pow(25, 7)), 0.5));

    const L1 = l1;
    const A1 = a1 * (1 + G);
    const B1 = b1;

    const L2 = l2;
    const A2 = a2 * (1 + G);
    const B2 = b2;

    const C1 = cab(A1, B1);
    const C2 = cab(A2, B2);
    const H1 = hab(A1, B1);
    const H2 = hab(A2, B2);

    const dL = L1 - L2;
    const dC = C1 - C2;
    const dh = H1 - H2;
    const dH = 2 * Math.sin(Math.PI * dh / 360) * Math.pow(C1 * C2, 0.5);

    //计算公式中的加权函数SL,SC,SH,T
    const mean_L = (L1 + L2) / 2;
    const mean_C = (C1 + C2) / 2;
    const mean_H = (H1 + H2) / 2;

    const SL = 1 + 0.015 * Math.pow(mean_L - 50, 2) / Math.pow(20 + Math.pow(mean_L - 50, 2), 0.5);
    const SC = 1 + 0.045 * mean_C;
    const T = 1 - 0.17 * Math.cos((mean_H - 30) * Math.PI / 180) + 0.24 * Math.cos((2 * mean_H) * Math.PI / 180)+ 0.32 * Math.cos((3 * mean_H + 6) * Math.PI / 180) - 0.2 * Math.cos((4 * mean_H - 63) * Math.PI / 180);
    const SH = 1 + 0.015 * mean_C * T;

    //计算公式中的RT
    const mean_C_pow7 = Math.pow(mean_C, 7);
    const RC = 2 * Math.pow(mean_C_pow7 / (mean_C_pow7 + Math.pow(25, 7)), 0.5);
    const dXita = 30 * Math.exp(- Math.pow((mean_H - 275) / 25, 2));  //△θ 以°为单位
    const RT = - Math.sin((2 * dXita) * Math.PI / 180) * RC;
 
    const L_item = dL / (kL * SL);
    const C_item = dC / (kC * SC);
    const H_item = dH / (kH * SH);

    const E00 = Math.pow(L_item * L_item + C_item * C_item + H_item * H_item + RT * C_item * H_item, 0.5);
    return E00;

};



module.exports = { caculateLABDiff }
