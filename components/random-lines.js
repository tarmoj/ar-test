function generatePoints(randomness = 0.5) {
  const maxDegrees = 360 * 8;
  const pointsCount = 100;
  const radius = 20;
  return range(0, maxDegrees, maxDegrees / pointsCount)
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
  init: function () {
    const points = generatePoints();
    const lines = document.createElement("a-lines");
    lines.setAttribute("points", flattenPoints(points));
    lines.setAttribute("color", "white");
    lines.setAttribute("opacity", 0.8);
    this.el.appendChild(lines);
  },
});
