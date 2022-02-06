import type { EquatorialCoordinate } from '../types'

import { getNumberOfJulianCenturiesSinceEpoch } from '../epoch'

import { getNormalisedDegree } from '../utilities'

import { J2000 } from '../epoch/constants'

/**
 *
 * getEquatorialCoordinateProperMotionCorrected()
 *
 * @param datetime (of type date)
 * @param equatorialCoordinate
 * @param properMotion (of type { ra, dec } Equatorial Coordinate) that provides the proper motion per year.
 * @param startingEpoch e.g., J2000
 * @returns the corrected { ra, dec } Equatorial Coordinate for the given proper motion
 *
 */
export const getEquatorialCoordinateProperMotionCorrected = (
  datetime: Date,
  equatorialCoordinate: EquatorialCoordinate,
  properMotion: EquatorialCoordinate,
  startingEpoch: number = J2000
): EquatorialCoordinate => {
  let { ra, dec } = equatorialCoordinate

  const YEARS_IN_CENTURY = 100

  const T = getNumberOfJulianCenturiesSinceEpoch(datetime, startingEpoch)

  ra = ra + properMotion.ra * T * YEARS_IN_CENTURY
  dec = dec + properMotion.dec * T * YEARS_IN_CENTURY

  return {
    ra: getNormalisedDegree(ra),
    dec: dec
  }
}
