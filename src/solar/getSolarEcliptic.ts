import type { EquatorialCoordinate } from '../types'

import { getCurrentYearEnd, getCurrentYearStart, getJulianYearInSeconds } from '../epoch'

import { getSolarEquatorialPosition } from '../solar'

/**
 * getSolarEcliptic()
 *
 * @param datetime Date
 * @returns the ecliptic as an array of EquatorialCoordinates for every day of the Julian calendar year
 */
export const getSolarEcliptic = (datetime: Date): EquatorialCoordinate[] => {
  // Setup the ecliptic array:
  const ecliptic: EquatorialCoordinate[] = []

  // Setup the number of days in an astronomical year:
  const precision: number = (getJulianYearInSeconds() * 1000) / 365.25

  const start: number = getCurrentYearStart(datetime).getTime()

  const end: number = getCurrentYearEnd(datetime).getTime()

  for (let currentDateTime = start; currentDateTime <= end; currentDateTime += precision) {
    ecliptic.push(getSolarEquatorialPosition(new Date(start)))
  }

  return ecliptic
}
