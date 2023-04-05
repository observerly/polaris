/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/polaris
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { type Planet } from '../types'

/*****************************************************************************************************************/

export const Jupiter = ({
  period: 11.862615,
  eccentricity: 0.04839266,
  inclination: 1.3043975,
  semiMajorAxis: 5.202887,
  eclipticLongitudeAtTheEpoch: 34.396441,
  eclipticLongitudeAtPerihelion: 14.728480,
  eclipticLongitudeAtAscendingNode: 100.473909,
  inferior: false
} as const) satisfies Readonly<Planet>

/*****************************************************************************************************************/