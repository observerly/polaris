/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/polaris
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { convertEquatorialToHorizontal } from '../coordinates'
import { type EquatorialCoordinate, type GeographicCoordinate } from '../types'

/*****************************************************************************************************************/

export const isAboveHorizon = (
  datetime: Date,
  equatorialCoordinate: EquatorialCoordinate,
  geographicCoordinate: GeographicCoordinate,
  between?: {
    start: Date
    end: Date
  }
): boolean => {
  const { start, end } = between || {
    start: new Date(datetime.getFullYear(), datetime.getMonth(), datetime.getDate(), 0, 0, 0, 0),
    end: new Date(datetime.getFullYear(), datetime.getMonth(), datetime.getDate(), 23, 59, 59, 9999)
  }

  // Between the start and end dates, check if the object is above the horizon:
  const interval = 60 * 1000 // Set an interval for 1 minute (60000ms)

  for (let i = start.getTime(); i <= end.getTime(); i += interval) {
    const date = new Date(i)
    const { alt } = convertEquatorialToHorizontal(equatorialCoordinate, geographicCoordinate, date)
    if (alt > 0) return true
  }

  return false
}

/*****************************************************************************************************************/
