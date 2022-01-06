import type { EquatorialCoordinate, GeographicCoordinate, HorizontalCoordinate } from '../types'

import { getHourAngle } from '../astrometry'

import { getLocalSiderealTime } from '../epoch'

import { convertDegreeToRadian, convertRadianToDegree, getNormalisedDegree } from '../utilities'

/**
 * convertEquatorialToHorizontal()
 *
 * @description Converts equatorial coordinates to horizontal coordinates coordinates for a given observer.
 *
 * @param equatorialCoordinate of type EquatorialCoordinate { ra, dec }
 * @param observer of type GeographicPointCoordinate { longitude, latitude }
 * @param datetime of type Date
 * @returns the equivalent horizontal coordinates for the given observers position
 */
export const convertEquatorialToHorizontal = (
  equatorialCoordinate: EquatorialCoordinate,
  observer: GeographicCoordinate,
  datetime: Date
): HorizontalCoordinate => {
  // Get the Local Sidereal Time:
  const LST = getLocalSiderealTime(datetime, getNormalisedDegree(observer.longitude))

  // Convert Right Ascension to Hour Angle (to Radians):
  const ra = convertDegreeToRadian(getHourAngle(equatorialCoordinate.ra, LST))

  // Convert Declination (to Radians):
  const dec = convertDegreeToRadian(equatorialCoordinate.dec)

  // Latitude will be defined in units of radians:
  const latitude = convertDegreeToRadian(observer.latitude)

  // Divide-by-zero errors can occur when we have cos(90), and sin(0)/sin(180) etc
  // cosine: multiples of π/2
  // sine: 0, and multiples of π.
  if (Math.cos(latitude) === 0) {
    return {
      az: -1,
      alt: -1
    }
  }

  const alt = Math.asin(
    Math.sin(dec) * Math.sin(latitude) + Math.cos(dec) * Math.cos(latitude) * Math.cos(ra)
  )

  const az = Math.acos(
    (Math.sin(dec) - Math.sin(alt) * Math.sin(latitude)) / (Math.cos(alt) * Math.cos(latitude))
  )

  return {
    az: Math.sin(ra) > 0 ? 360 - convertRadianToDegree(az) : convertRadianToDegree(az),
    alt: convertRadianToDegree(alt)
  }
}
