/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/polaris
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import {
  type GeocentricEclipticCoordinate as EclipticCoordinate,
  type GeographicCoordinate,
  type HorizontalCoordinate
} from '../types'

import { convertEclipticToEquatorial, convertEquatorialToHorizontal } from '../coordinates'

/*****************************************************************************************************************/

/**
 * convertEclipticToHorizontal()
 *
 * @description Converts ecliptic coordinates to horizontal coordinates coordinates for a given observer.
 *
 * @param eclipticCoordinate of type EclipticCoordinate { λ, β }
 * @param observer of type GeographicPointCoordinate { longitude, latitude }
 * @param datetime of type Date
 * @returns the equivalent horizontal coordinates for the given observers position
 */
export const convertEclipticToHorizontal = (
  eclipticCoordinate: EclipticCoordinate,
  observer: GeographicCoordinate,
  datetime: Date
): HorizontalCoordinate => {
  const equatorialCoordinate = convertEclipticToEquatorial(eclipticCoordinate, datetime)
  return convertEquatorialToHorizontal(equatorialCoordinate, observer, datetime)
}
