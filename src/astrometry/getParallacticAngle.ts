import { getHourAngle } from '../astrometry'

import { getLocalSiderealTime } from '../epoch'

import { convertDegreeToRadian, convertRadianToDegree } from '../utilities'

import type { EquatorialCoordinate, GeographicCoordinate } from '../types'

/**
 *
 * @see EQ14.1 p.98 of Meeus, Jean. 1991. Astronomical algorithms. Richmond, Va: Willmann-Bell.
 *
 * @param equatorialCoordinate of type EquatorialCoordinate { ra, dec }
 * @param observer of type GeographicPointCoordinate { longitude, latitude }
 * @param datetime of type Date
 * @returns the parallactic angle between the zenith and true north for a celestial body
 */
export const getParallacticAngle = (
  equatorialCoordinate: EquatorialCoordinate,
  observer: GeographicCoordinate,
  datetime: Date
): number => {
  // Local Sidereal time at given instant of observation:
  const LST = getLocalSiderealTime(datetime, observer.longitude)

  const ha = getHourAngle(equatorialCoordinate.ra, LST)

  // Hour Angle at given instance converted to radians:
  const H = convertDegreeToRadian(ha)

  // Observer's latitude converted to radians:
  const φ = convertDegreeToRadian(observer.latitude)

  // Declination of the celestial body converted to radians:
  const δ = convertDegreeToRadian(equatorialCoordinate.dec)

  // Compute the parallactic coordinate:
  const q = Math.atan2(Math.sin(H), Math.tan(φ) * Math.cos(δ) - Math.sin(δ) * Math.cos(H))

  return convertRadianToDegree(q)
}
