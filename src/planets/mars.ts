/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/polaris
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { type Planet } from '../types'

/*****************************************************************************************************************/

export const Mars = ({
  period: 1.880848,
  eccentricity: 0.0933941,
  inclination: 1.849691,
  semiMajorAxis: 1.523710,
  eclipticLongitudeAtTheEpoch: -4.553432,
  eclipticLongitudeAtPerihelion: -23.943629,
  eclipticLongitudeAtAscendingNode: 49.559538,
  inferior: true
} as const) satisfies Readonly<Planet>

/*****************************************************************************************************************/