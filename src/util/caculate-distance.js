const caculateDistance = (hsvColor1, hsvColor2) => {
  const R = 100;
  const angle = 30;
  const h = R * Math.cos((angle / 180) * Math.PI);
  const r = R * Math.sin((angle / 180) * Math.PI);

  const [dot1, dot2] = [hsvColor1, hsvColor2].map(([H, S, V]) => ({
    x: r * V * S * Math.cos(H),
    y: r * V * S * Math.sin(H),
    z: h * (1 - V),
  }));

  const dx = dot1.x - dot2.x;
  const dy = dot1.y - dot2.y;
  const dz = dot1.z - dot2.z;

  const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
  return distance;
};

module.exports = { caculateDistance };
