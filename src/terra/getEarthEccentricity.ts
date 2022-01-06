import { getNormalisedDegree } from '../'

/**
 *
 * getEarthEccentricity()
 *
 * @see EQ.25.4 p.338 of Meeus, Jean. 1991. Astronomical algorithms. Richmond, Va: Willmann-Bell.
 *
 * @param T (of type number) the Ephemeris Time or the number of centuries since J2000 epoch
 * @returns the eccentricity of the Earth's orbit around the Sun
 */
export const getEarthEccentricity = (T: number): number => {
  return getNormalisedDegree(0.016708634 - 0.000042037 * T - 0.0000001267 * Math.pow(T, 2))
}
