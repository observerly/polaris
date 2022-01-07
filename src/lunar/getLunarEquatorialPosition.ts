import type { EquatorialCoordinate } from '../types'

import { convertEclipticToEquatorial } from '../coordinates'

import { getLunarEclipticPosition } from '../lunar'
/**
 * getLunarEquatorialPosition()
 *
 * @param datetime Date
 * @returns the equatorial position (of type EquatorialCoordinate) of the Moon relative to the fundamental plane
 * formed by projection of Earth's equator onto the celestial sphere.
 */
export const getLunarEquatorialPosition = (datetime: Date): EquatorialCoordinate => {
  const { λ, β, Λ } = getLunarEclipticPosition(datetime)

  const { ra, dec } = convertEclipticToEquatorial({ λ, β, Λ }, datetime)

  return {
    ra: ra,
    dec: dec
  }
}
