// See for data: https://nssdc.gsfc.nasa.gov/planetary/factsheet/

const earthYear = 60; // in seconds for a full circle
const earthDay = 2; // in seconds for a full rotation
const earthDistance = 200; // in 3d meters for z

const planetsData = {
  // NB! factor for distance in square root -  otherwise visually too close/far
  mercury: {
    distance: earthDistance * Math.sqrt(0.38),
    orbitTime: earthYear * 0.24,
    rotationTime: earthDay * 59,
    modelScale: 1,
  },
  venus: {
    distance: earthDistance * 0.72,
    orbitTime: earthYear * 0.61,
    rotationTime: earthDay * 244,
    modelScale: 1,
  }, // NB! Venus rotates counterclockwise
  earth: {
    distance: earthDistance,
    orbitTime: earthYear,
    rotationTime: earthDay,
    modelScale: 0.215,
  },
  mars: {
    distance: earthDistance * 1.88,
    orbitTime: earthYear * 1.88,
    rotationTime: earthDay * 1.02,
    modelScale: 1,
  },
  jupiter: {
    distance: earthDistance * Math.sqrt(5.2),
    orbitTime: earthYear * 11.86,
    rotationTime: earthDay * 0.41,
    modelScale: 1,
  },
  saturn: {
    distance: earthDistance * Math.sqrt(9.57),
    orbitTime: earthYear * 29,
    rotationTime: earthDay * 0.45,
    modelScale: 0.2,
  },
};

function generatePlanetOutside(planet, speedFactor = 1) {
  const { orbitTime } = planetsData[planet];

  const position = { x: 0, y: 0, z: 0 };
  const scale = { x: 1, y: 1, z: 1 };

  const animation = {
    property: "rotation",
    dur: (orbitTime / speedFactor) * 1000,
    to: { x: 0, y: -360, z: 0 },
    loop: true,
    easing: "linear",
  };
  return { position, scale, animation };
}

function generatePlanetInside(planet, speedFactor = 1) {
  const { rotationTime, distance, modelScale } = planetsData[planet];
  const position = { x: 0, y: 0, z: 0 - distance };

  const baseScale = 0.2;
  const scaleValue = baseScale * modelScale;
  const scale = { x: scaleValue, y: scaleValue, z: scaleValue };

  const rotation = { x: 0, y: 10, z: 0 };
  const rotationEnd = planet === "venus" ? -360 : 360;

  const animation = {
    property: "rotation",
    dur: (rotationTime / speedFactor) * 1000,
    to: { y: rotationEnd },
    loop: true,
    easing: "linear",
  };
  const model = `#${planet}`;
  return { position, rotation, scale, animation, model };
}

function generatePlanet(planet, speedFactor) {
  return {
    inside: generatePlanetInside(planet, speedFactor),
    outside: generatePlanetOutside(planet, speedFactor),
    visible: false,
  };
}

function generatePlanets() {
  return {
    mercury: generatePlanet("mercury"),
    venus: generatePlanet("venus"),
    earth: generatePlanet("earth"),
    mars: generatePlanet("mars"),
    jupiter: generatePlanet("jupiter"),
    saturn: generatePlanet("saturn"),

    mercury_m2: generatePlanet("mercury", 2),
    venus_v2: generatePlanet("venus", 2),
    jupiter_j12: generatePlanet("jupiter", 1 / 2),
    saturn_s12: generatePlanet("saturn", 1 / 2),

    mercury_m4: generatePlanet("mercury", 4),
    jupiter_j14: generatePlanet("jupiter", 1 / 4),
    saturn_s14: generatePlanet("saturn", 1 / 4),

    mercury_m8: generatePlanet("mercury", 8),
    saturn_s18: generatePlanet("saturn", 1 / 8),

    venus_v4: generatePlanet("venus", 4),
    venus_v8: generatePlanet("venus", 8),
  };
}
