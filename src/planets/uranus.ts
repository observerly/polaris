/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/polaris
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { type Planet } from '../types'

/*****************************************************************************************************************/

export const Uranus = ({
  period: 84.016846,
  eccentricity: 0.0472574,
  inclination: 0.772638,
  semiMajorAxis: 19.189165,
  eclipticLongitudeAtTheEpoch: 313.232810,
  eclipticLongitudeAtPerihelion: 170.954276,
  eclipticLongitudeAtAscendingNode: 74.016925,
  inferior: false
} as const) satisfies Readonly<Planet>

/*****************************************************************************************************************/