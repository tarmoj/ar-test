// See for data: https://nssdc.gsfc.nasa.gov/planetary/factsheet/

const earthYear = 60; // in seconds for a full circle
const earthDay = 2; // in seconds for a full rotation
const earthDistance = 200; // in 3d meters for z

const planetsData = {
  // NB! factor for distance in square root -  otherwise visually too close/far
  earth: {
    distance: earthDistance,
    orbitTime: earthYear,
    rotationTime: earthDay,
  },
  mercury: {
    distance: earthDistance * Math.sqrt(0.38),
    orbitTime: earthYear * 0.24,
    rotationTime: earthDay * 59,
  },
  venus: {
    distance: earthDistance * 0.72,
    orbitTime: earthYear * 0.61,
    rotationTime: earthDay * 244,
  }, // NB! Venus rotates counterclockwise
  mars: {
    distance: earthDistance * 1.88,
    orbitTime: earthYear * 1.88,
    rotationTime: earthDay * 1.02,
  },
  jupiter: {
    distance: earthDistance * Math.sqrt(5.2),
    orbitTime: earthYear * 11.86,
    rotationTime: earthDay * 0.41,
  },
  saturn: {
    distance: earthDistance * Math.sqrt(9.57),
    orbitTime: earthYear * 29,
    rotationTime: earthDay * 0.45,
  },
};

export const generatePlanetContainer = (planet, speedFactor = 1) => {
  const { orbitTime } = planetsData[planet];

  const animation = {
    property: "rotation",
    dur: (orbitTime / speedFactor) * 1000,
    to: { x: 0, y: -360, z: 0 },
    loop: true,
    easing: "linear",
  };

  const position = { x: 0, y: 0, z: -20 };
  return { position, animation };
};

export const generatePlanet = (planet, speedFactor = 1) => {
  const { rotationTime } = planetsData[planet];
  const position = {
    x: 0 - planet.distance,
    y: 0,
    z: 0,
  };

  const scale = { x: 0.01, y: 0.01, z: 0.01 };

  const rotationEnd = planet === "venus" ? -360 : 360;

  const animation = {
    property: "rotation",
    dur: (rotationTime / speedFactor) * 1000,
    to: { x: 180, y: rotationEnd },
    loop: true,
    easing: "linear",
  };
  const gltfModel = `#${planet}Model`;
  return { position, scale, animation, gltfModel };
};
