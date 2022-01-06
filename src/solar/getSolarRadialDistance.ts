import { convertDegreeToRadian } from '../utilities'

/**
 *
 * getSolarRadialDistance()
 *
 * @see EQ25.5 p.164 of Meeus, Jean. 1991. Astronomical algorithms. Richmond, Va: Willmann-Bell.
 *
 * @param e the eccentricity of the Earth's orbit
 * @param ν the Sun's true anomaly
 * @returns the solar radial vector, or the distance between the center of the Earth and the Sun, expressed in Astronomical Units (AU)
 */
export const getSolarRadialDistance = (e: number, ν: number): number => {
  return (1.000001018 * (1 - Math.pow(e, 2))) / (1 + e * Math.cos(convertDegreeToRadian(ν)))
}
