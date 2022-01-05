import { getNormalisedDegree } from '../'

/**
 * getSolarGeometricMeanLongitude()
 *
 * @see EQ.25.2 p.338 of Meeus, Jean. 1991. Astronomical algorithms. Richmond, Va: Willmann-Bell.
 *
 * @params T (of type number) the Ephemeris Time or the number of centuries since J2000 epoch
 * @returns the geometric mean Solar longitude (in degrees)
 */
export const getSolarGeometricMeanLongitude = (T: number): number => {
  return getNormalisedDegree(280.46646 + 36000.76983 * T + 0.0003032 * Math.pow(T, 2))
}
