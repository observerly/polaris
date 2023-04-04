/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/polaris
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { getNumberOfJulianDaysSinceEpoch2000 } from '../epoch/getNumberOfJulianDaysSinceEpoch2000'

import { getNormalisedDegree } from '../utilities/getNormalisedDegree'

/*****************************************************************************************************************/

/**
 *
 * @param datetime - the date and time of the observation
 * @param Tp - the oribital period of the planet
 * @param εp - the ecliptic longittude at the epoch
 * @param ϖp - the ecliptic longitude at perihelion
 * @returns the mean anomaly of the planet, Mp
 */
export const getPlanetaryMeanAnomaly = (datetime: Date, Tp: number, εp: number, ϖp: number) => {
  const De = getNumberOfJulianDaysSinceEpoch2000(datetime)
  return getNormalisedDegree((360 * De) / (365.242191 * Tp) + εp - ϖp)
}

/*****************************************************************************************************************/
