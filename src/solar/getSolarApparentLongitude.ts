import { convertDegreeToRadian, getNormalisedDegree } from '../utilities'

/**
 *
 * getSolarApparentLongitude()
 *
 * @param L
 * @param Ω (of type number) the nutation in the axis of rotation
 * @returns the apparent Solar longitude (in degrees)
 */
export const getSolarApparentLongitude = (L: number, Ω: number): number => {
  Ω = convertDegreeToRadian(Ω)

  return getNormalisedDegree(L - 0.00569 - 0.00478 * Math.sin(Ω))
}
