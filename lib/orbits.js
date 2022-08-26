function getOrbitsParticles(radialPosition) {
  const p = normalizeParticles({
    radialPosition: [
      radialPosition - this.orbitsOffsetX,
      radialPosition + this.orbitsOffsetX,
    ],
    opacity: this.orbitsOpacity,
    color: this.orbitsColor,
    radialType: "circle",
    spawnRate: 100,
    lifeTime: 100,
    radialVelocity: [0, this.orbitsRadialVelocity],
    angularVelocity: [this.orbitsAngularVelocity, 0, 0.1],
    scale: 1 - remap(this.userZMultipler, -1, 1, 0, 0.95),
    // trailLifeTime: 2,
    // trailInterval: 0.1,
    texture: "#blob",
  });
  return p;
}
