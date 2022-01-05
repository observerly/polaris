import { getNormalisedDegree } from '../'

/**
 *
 * getEarthEccentricity()
 *
 * @see EQ.47.6 p.338 of Meeus, Jean. 1991. Astronomical algorithms. Richmond, Va: Willmann-Bell.
 *
 * @param T (of type number) the Ephemeris Time or the number of centuries since J2000 epoch
 * @returns the eccentricity of the Earth's orbit around the Sun
 */
export const getEarthEccentricity = (T: number): number => {
  return getNormalisedDegree(1 - 0.002516 * T - 0.0000074 * Math.pow(T, 2))
}
