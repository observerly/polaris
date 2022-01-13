import type { Constellation, ConstellationNancyRoman, EquatorialCoordinate } from '../types'

import { constellations } from '..'

import { NANCY_ROMAN_TABLE_I } from '../constellations/table/roman/I'

import { precessEquatorialCoordinate } from '../coordinates'

import { convertDegreeToRadian } from '../utilities'

/**
 *
 * @param equatorialCoordinate
 * @param datetime
 * @returns
 */
export const getConstellation = (
  equatorialCoordinate: EquatorialCoordinate,
  datetime: Date
): Constellation => {
  let constellation

  let { ra, dec } = equatorialCoordinate

  // Precess the position to 1875.0, expressing the right ascension
  // and declination in radians for usage with the Nancy Roman
  // constellation lookup table:
  equatorialCoordinate = precessEquatorialCoordinate(
    {
      ra: ra,
      dec: dec
    },
    // This corresponds to the current epoch Year e.g., 2021:
    datetime.getFullYear(),
    // This always corresponds to the epoch J1875.00 for the standard
    // Nancy Roman Table:
    1875.0
  )

  // Let's see if we can find the constllation corresponding the
  // the equatorial coordinate:
  const c: ConstellationNancyRoman | undefined = NANCY_ROMAN_TABLE_I.find(
    (constellation: ConstellationNancyRoman) =>
      !(
        equatorialCoordinate.dec < constellation.decl ||
        equatorialCoordinate.ra / 15 < constellation.RAl ||
        equatorialCoordinate.ra / 15 >= constellation.RAu
      )
  )

  // If we find a match, let's see if we can match this to an
  // actual constellation:
  if (c) {
    constellation = constellations.find(
      (constellation: Constellation) => constellation.name === c.constellation
    )
  }

  return constellation ? constellation : constellations[0]
}
