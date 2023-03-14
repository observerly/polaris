/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/polaris
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { J1970 } from '../epoch'

import { type GeographicCoordinate } from '../types'

import {
  convertDegreeToRadian,
  getSolarDeclination,
  getSolarHourAngle,
  getSolarMeanAnomaly,
  getSolarMeanTime,
  getSolarTransitJulianDate
} from '../'

/*****************************************************************************************************************/

/**
 *
 * getSolarRiseSet()
 *
 * This function calculates the solar rise and set for a given date, of some observer on Earth
 * at a specific GeographicCoordinate
 *
 * @param datetime - the date to calculate the solar rise and set for
 * @param degreesBelowHorizon - the degrees below the horizon to correct for
 * @param latitude - is the latitude (south is negative, north is positive) in degrees of some observer on Earth\
 * @param longitude - is the longitude (west is negative, east is positive) in degrees of some observer on Earth
 * @param elevation
 * @returns the solar rise and set for a given date, of some observer on Earth
 */
export const getSolarRiseSet = (
  datetime: Date,
  degreesBelowHorizon = 18,
  geographicCoordinate: GeographicCoordinate,
  elevation = 0
) => {
  const J = getSolarMeanTime(datetime, geographicCoordinate.longitude)

  const M = getSolarMeanAnomaly(J)

  const C = (360 / Math.PI) * 0.016708 * Math.sin(convertDegreeToRadian(M))

  const λ = (M + C + 282.938346) % 360

  const δ = getSolarDeclination(λ)

  const ω = getSolarHourAngle(δ, degreesBelowHorizon, geographicCoordinate.latitude, elevation)

  const h = ω / 360.0

  const J_transit = getSolarTransitJulianDate(J, M, λ)

  const J_rise = J_transit - h

  const J_set = J_transit + h

  return {
    rise: new Date((J_rise - J1970) * 86400000.0),
    set: new Date((J_set - J1970) * 86400000.0),
    transit: new Date((J_transit - J1970) * 86400000.0)
  }
}
