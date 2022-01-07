import { convertDegreeToRadian } from '../utilities'

/**
 *
 * getEclipticObliquityCorrected()
 *
 * @param O
 * @param Ω (of type number) the nutation in the axis of rotation
 * @returns the correction to the obliquity of the ecliptic due to nutation effects
 */
export const getSolarEclipticObliquityCorrected = (O: number, Ω: number): number => {
  Ω = convertDegreeToRadian(Ω)

  return O + 0.00256 * Math.cos(Ω)
}
