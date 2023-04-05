/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/polaris
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { type Planet } from '../types'

/*****************************************************************************************************************/

export const Earth = ({
  period: 1.0000174,
  eccentricity: 0.01671123,
  inclination: -0.00001531,
  semiMajorAxis: 1.0000003,
  eclipticLongitudeAtTheEpoch: 100.464572,
  eclipticLongitudeAtPerihelion: 102.937348,
  eclipticLongitudeAtAscendingNode: 0.0,
  inferior: true
} as const) satisfies Readonly<Planet>

/*****************************************************************************************************************/