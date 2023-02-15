/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/polaris
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { type EquatorialCoordinate } from '../types'

import { convertDegreeToRadian } from '../utilities'

/*****************************************************************************************************************/

/**
 *
 * getDoesObjectRiseOrSet()
 *
 * @param eq - the EquatorialCoordinate{} of the object in question
 * @param latitude - the latitude of the observer (in degrees)
 * @see p.117 of Lawrence, J.L. 2015. Celestial Calculations - A Gentle Introduction To Computational Astronomy. Cambridge, Ma: The MIT Press
 * @returns a either false when the object does not rise or set or an object containing the Ar and H1 values when the object does rise or set
 *
 * @note The object will never rise or set if |Ar| > 1 or |H1| > 1
 * @note If rerturned as false, the object may be either above the horizon for the given day or below the horizon for the given day.
 * @note If false, the maxima (i.e., the object's highest altitude for the observer) of the transit should be calculated.
 */
export const getDoesObjectRiseOrSet = (
  eq: EquatorialCoordinate,
  latitude: number
): false | { Ar: number; H1: number } => {
  // Whether an object rises or sets does not depend on the object RA,
  // but only on the object dec and the observer latitude.
  const { dec } = eq

  const Ar = Math.sin(convertDegreeToRadian(dec)) / Math.cos(convertDegreeToRadian(latitude))

  // If |Ar| > 1, the object will never rise or set for the observer.
  if (Math.abs(Ar) > 1) return false

  const H1 = Math.tan(convertDegreeToRadian(latitude)) * Math.tan(convertDegreeToRadian(dec))

  // If |H1| > 1, the object will never rise or set for the observer.
  if (Math.abs(H1) > 1) return false

  return {
    Ar,
    H1
  }
}

/*****************************************************************************************************************/
