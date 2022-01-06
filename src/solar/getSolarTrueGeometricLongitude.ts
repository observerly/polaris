import { getNormalisedDegree } from '../'

/**
 *
 * getSolarTrueGeometricLongitude()
 *
 * @see p.164 of Meeus, Jean. 1991. Astronomical algorithms. Richmond, Va: Willmann-Bell.
 *
 * @param L the geometric mean longitude of the Sun, referedd to as the mean equinox of teh date
 * @param C the equation of center of the Sun
 * @returns the true motion of the Sun and planets along the plane of the ecliptic.
 */
export const getSolarTrueGeometricLongitude = (L: number, C: number) => {
  return getNormalisedDegree(L + C)
}
