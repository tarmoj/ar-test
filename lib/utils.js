function seq(count, step = 1, start = 0) {
  return Array.from({ length: count }).map((_, i) =>
    typeof step === "function" ? step(i + start) : i * step + start
  );
}

function range(from, to, step = 1) {
  const reversed = to < from;
  if (reversed) {
    [to, from] = [from, to];
  }
  const length = Math.floor((to - from) / step) + 1;
  const output = seq(length, step, from);
  return reversed ? output.reverse() : output;
}

function deg2rad(deg = 0) {
  return (deg * Math.PI) / 180;
}

function rad2deg(rad = 0) {
  return (rad * 180) / Math.PI;
}

function pol2car(angle, radius) {
  return [
    Math.cos((angle - 90) * (Math.PI / 180)) * radius,
    Math.sin((angle - 90) * (Math.PI / 180)) * radius,
  ];
}

function car2pol(point) {
  const [x, y] = point;
  return [Math.atan2(y, x) * (180 / Math.PI), Math.sqrt(x * x + y * y)];
}

function remap(value, start1, stop1, start2, stop2) {
  return ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
}

function random(min = 0, max = 1) {
  return min + Math.random() * (max - min);
}

const isNumber = (value) => !isNaN(parseFloat(value));

function normalizeParticles(data) {
  return Object.fromEntries(
    Object.entries(data).map(([key, value]) => {
      if (
        value.a !== undefined &&
        value.b !== undefined &&
        value.c !== undefined
      ) {
        value = `${value.a} ${value.b} ${value.c}`;
      }
      if (
        value.a !== undefined &&
        value.b !== undefined &&
        value.c === undefined
      ) {
        value = `${value.a}..${value.b}`;
      }
      return [key, String(value)];
    })
  );
}

function timestring(time) {
  const minutes = Math.floor(time / 60).toString();
  const seconds = (time % 60).toString();
  const timeString = minutes.padStart(2, "0") + ":" + seconds.padStart(2, "0");
  return timeString;
}

function sec(str) {
  var p = str.split(":"),
    s = 0,
    m = 1;

  while (p.length > 0) {
    s += m * parseInt(p.pop(), 10);
    m *= 60;
  }
  return s;
}
