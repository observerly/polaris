/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/polaris
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { type Planet } from '../types'

/*****************************************************************************************************************/

export const Saturn = ({
  period: 29.447498,
  eccentricity: 0.053862,
  inclination: 2.485992,
  semiMajorAxis: 9.536676,
  eclipticLongitudeAtTheEpoch: 49.954244,
  eclipticLongitudeAtPerihelion: 92.598878,
  eclipticLongitudeAtAscendingNode: 113.662424,
  inferior: false
} as const) satisfies Readonly<Planet>

/*****************************************************************************************************************/