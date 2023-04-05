/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/polaris
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { type Planet } from '../types'

/*****************************************************************************************************************/

export const Venus = ({
  period: 0.615197,
  eccentricity: 0.0067767,
  inclination: 3.394676,
  semiMajorAxis: 0.72332982,
  eclipticLongitudeAtTheEpoch: 181.9791,
  eclipticLongitudeAtPerihelion: 131.602467,
  eclipticLongitudeAtAscendingNode: 76.679842,
  inferior: true
} as const) satisfies Readonly<Planet>

/*****************************************************************************************************************/
