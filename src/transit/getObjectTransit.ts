/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/polaris
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { type EquatorialCoordinate, type GeographicCoordinate } from '../types'

import { getUniversalTime } from '../epoch'

import { MILLISECONDS_IN_HOUR } from '../time'

import { convertDegreeToRadian, convertRadianToDegree } from '../utilities'

/*****************************************************************************************************************/

/**
 *
 * getObjectTransit
 *
 * @description Get the time of rise and set of an object, given its equatorial coordinates and the latitude of the observer.
 * @see p.115 Celestial Calculations: A Gentle Introduction to Astronomy
 *
 * @reference Lawrence, J.L., 2015 "Celestial Calculations: A Gentle Introduction To Computational Astrometry", MIT Press, Cambridge, Ma
 *
 * @param equatorialCoordinate
 * @param latitude
 * @returns the time of rise and set of an object
 * @returns { rise: Date | null, set: Date | null }
 *
 */
export const getObjectTransit = (
  datetime: Date,
  equatorialCoordinate: EquatorialCoordinate,
  geographicCoordinate: GeographicCoordinate
): {
  rise: number | null
  set: number | null
} => {
  const noRise = {
    rise: null,
    set: null
  }

  const currentYear = datetime.getFullYear()

  const currentMonth = datetime.getMonth()

  const currentDay = datetime.getDate()

  const { latitude, longitude } = geographicCoordinate

  const { ra, dec } = equatorialCoordinate

  const ha = ra / 15

  const Ar = Math.sin(convertDegreeToRadian(dec)) / Math.cos(convertDegreeToRadian(latitude))

  // If |Ar| > 1, the object will never rise or set for the observer.
  if (Math.abs(Ar) > 1) return noRise

  const H1 = Math.tan(convertDegreeToRadian(latitude)) * Math.tan(convertDegreeToRadian(dec))

  // If |H1| > 1, the object will never rise or set for the observer.
  if (Math.abs(H1) > 1) return noRise

  const H2 = convertRadianToDegree(Math.acos(-H1))

  let LSTr = 24 + ha - H2 / 15

  if (LSTr > 24) {
    LSTr -= 24
  }

  let LSTs = ha + H2 / 15

  if (LSTs > 24) {
    LSTs -= 24
  }

  // Convert LST to GST by adjusting for the observer's longitude:
  let GSTr = LSTr - longitude / 15

  if (GSTr < 0) {
    GSTr += 24
  }

  let GSTs = LSTs - longitude / 15

  if (GSTs < 0) {
    GSTs += 24
  }

  const UTr = getUniversalTime(datetime, GSTr)

  const UTs = getUniversalTime(datetime, GSTs)

  return {
    rise: Date.UTC(currentYear, currentMonth, currentDay, 0, 0, 0, UTr * MILLISECONDS_IN_HOUR),
    set: Date.UTC(currentYear, currentMonth, currentDay, 0, 0, 0, UTs * MILLISECONDS_IN_HOUR)
  }
}

/*****************************************************************************************************************/
