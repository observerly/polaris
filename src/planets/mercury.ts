/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/polaris
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { type Planet } from '../types'

/*****************************************************************************************************************/

export const Mercury = ({
  period: 0.2408467,
  eccentricity: 0.20563069,
  inclination: 7.004979,
  semiMajorAxis: 0.3870993,
  eclipticLongitudeAtTheEpoch: 252.250324,
  eclipticLongitudeAtPerihelion: 77.457796,
  eclipticLongitudeAtAscendingNode: 48.330766,
  inferior: true
} as const) satisfies Readonly<Planet>

/*****************************************************************************************************************/
