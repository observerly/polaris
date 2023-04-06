/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/polaris
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { type Planet } from '../types'

/*****************************************************************************************************************/

export const Neptune = ({
  period: 164.79132,
  eccentricity: 0.00859048,
  inclination: 1.77004347,
  semiMajorAxis: 30.069923,
  eclipticLongitudeAtTheEpoch: -55.120030,
  eclipticLongitudeAtPerihelion: 44.964762,
  eclipticLongitudeAtAscendingNode: 131.784226,
  inferior: false
} as const) satisfies Readonly<Planet>

/*****************************************************************************************************************/