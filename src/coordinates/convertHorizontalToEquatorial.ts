import type { EquatorialCoordinate, GeographicCoordinate, HorizontalCoordinate } from '../types'

import { getLocalSiderealTime } from '../epoch'

import { convertDegreeToRadian, convertRadianToDegree, getNormalisedDegree } from '../utilities'

/**
 * convertHorizontalToEquatorial()
 *
 * @description Converts horizontal coordinates to equatorial coordinates for a given observer.
 *
 * @param horizontalCoordinate of type HorizontalCoordinate { alt, az }
 * @param observer of type GeographicCoordinate { longitude, latitude }
 * @param datetime of type Date
 * @returns the equivalent equatorial coordinates relative to the given observers position
 */
export const convertHorizontalToEquatorial = (
  horizontalCoordinate: HorizontalCoordinate,
  observer: GeographicCoordinate,
  datetime: Date
): EquatorialCoordinate => {
  // Get the Local Sidereal Time:
  const LST = getLocalSiderealTime(datetime, getNormalisedDegree(observer.longitude))

  // Altitude will be defined in units of radians:
  const alt = convertDegreeToRadian(horizontalCoordinate.alt)

  // Azimuth will be defined in units of radians:
  const az = convertDegreeToRadian(horizontalCoordinate.az)

  const latitude = convertDegreeToRadian(observer.latitude)

  const dec = Math.asin(
    Math.sin(alt) * Math.sin(latitude) + Math.cos(alt) * Math.cos(latitude) * Math.cos(az)
  )

  let ra =
    (Math.sin(alt) - Math.sin(dec) * Math.sin(latitude)) / (Math.cos(dec) * Math.cos(latitude))

  if (ra > 1) ra = 1

  ra = Math.acos(ra)

  if (Math.sin(az) > 0) ra = Math.PI * 2 - ra

  return {
    ra: (LST * 15 - convertRadianToDegree(ra) + 360) % 360.0,
    dec: convertRadianToDegree(dec)
  }
}
