/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/polaris
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import {
  getNumberOfJulianCenturiesSinceEpoch2000,
  getNumberOfJulianDaysSinceEpoch2000
} from '../epoch'

import { getSolarMeanAnomaly } from '../solar'

import { convertDegreeToRadian } from '../utilities'

/*****************************************************************************************************************/

export { getLunarArgumentOfLatitude } from './getLunarArgumentOfLatitude'

/*****************************************************************************************************************/

export { getLunarEclipticPosition } from './getLunarEclipticPosition'

/*****************************************************************************************************************/

export { getLunarEquatorialPosition } from './getLunarEquatorialPosition'

/*****************************************************************************************************************/

export { getLunarIlluminatedFraction } from './getLunarIlluminatedFraction'

/*****************************************************************************************************************/

export { getLunarMeanAnomaly } from './getLunarMeanAnomaly'

/*****************************************************************************************************************/

export { getLunarMeanElongation } from './getLunarMeanElongation'

/*****************************************************************************************************************/

export { getLunarMeanLongitude } from './getLunarMeanLongitude'

/*****************************************************************************************************************/

/**
 *
 * The mean lunar ecliptic longitude of the ascending node is the angle where
 * the Moon's orbit crosses the ecliptic
 *
 * @param datetime The datetime object to convert.
 * @returns the mean lunar ecliptic longitude of the ascending node (in degrees)
 */
export const getLunarMeanEclipticLongitudeOfTheAscendingNode = (datetime: Date) => {
  // Get the number of days since the standard epoch J2000:
  const d = getNumberOfJulianDaysSinceEpoch2000(datetime)

  // Get the Moon's ecliptic longitude of the ascending node at the current epoch relative to J2000:
  let Ω = (125.044522 - 0.0529539 * d) % 360

  // Correct for negative angles
  if (Ω < 0) {
    Ω += 360
  }

  const T = getNumberOfJulianCenturiesSinceEpoch2000(datetime)

  // Correct for the Sun's mean anomaly:
  const M = getSolarMeanAnomaly(T)

  return Ω - 0.16 * Math.sin(convertDegreeToRadian(M))
}

/*****************************************************************************************************************/

export { getLunarPhase } from './getLunarPhase'

/*****************************************************************************************************************/

export { getLunarPhaseAngle } from './getLunarPhaseAngle'

/*****************************************************************************************************************/

export { getLunarPhaseName } from './getLunarPhaseName'

/*****************************************************************************************************************/

export { getMoon } from './getMoon'

/*****************************************************************************************************************/

export { MEEUS_TABLE_47A } from './tables/meeus/47a'

export { MEEUS_TABLE_47B } from './tables/meeus/47b'

/*****************************************************************************************************************/
