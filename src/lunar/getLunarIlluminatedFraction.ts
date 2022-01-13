import { convertDegreeToRadian } from '../utilities'

/**
 * getLunarIlluminatedFraction()
 *
 * @see EQ.48.1 p.338 of Meeus, Jean. 1991. Astronomical algorithms. Richmond, Va: Willmann-Bell.
 *
 * @param θ
 * @returns the illuminated fraction of the Moon's disk
 */
export const getLunarIlluminatedFraction = (θ: number): number => {
  θ = convertDegreeToRadian(θ)

  return Math.cos(θ) * 0.5 + 0.5
}
