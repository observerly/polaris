import { getGreenwhichSiderealTime } from '.'

/**
 * getLocalSiderealTime()
 *
 * @param datetime
 * @returns returns the local sidereal time, relative to some location's longitude
 */

export const getLocalSiderealTime = (datetime: Date, longitude: number): number => {
  const GST = getGreenwhichSiderealTime(datetime)

  let d = (GST + longitude / 15.0) / 24.0

  d = d - Math.floor(d)

  if (d < 0) d += 1

  return 24.0 * d
}
