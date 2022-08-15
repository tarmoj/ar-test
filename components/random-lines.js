function generatePoints(degrees, radius, randomness) {
  const pointsCount = Math.floor(degrees / 3);
  return range(0, degrees, degrees / pointsCount)
    .map((angle) => [
      ...pol2car(angle, radius), // returning [x,y]
      0,
    ])
    .map(([x, y, z]) => [
      x + random(-randomness, randomness),
      y + random(-randomness, randomness),
      z + random(-randomness, randomness),
    ]);
}

function flattenPoints(points) {
  return points.map((p) => p.join(" ")).join(",");
}

AFRAME.registerComponent("random-lines", {
  schema: {
    opacity: { type: "number", default: 1 },
    degrees: { type: "number", default: 360 },
    radius: { type: "number", default: 20 },
    randomness: { type: "number", default: 0.08 },
  },
  init: function () {
    const points = generatePoints(
      this.data.degrees,
      this.data.radius,
      this.data.randomness
    );
    const lines = document.createElement("a-lines");
    lines.setAttribute("points", flattenPoints(points));
    lines.setAttribute("color", "white");
    lines.setAttribute("opacity", this.data.opacity);
    lines.setAttribute("rotation", {
      x: 90,
      y: 0,
      z: 0,
    });
    this.el.appendChild(lines);
  },
});
