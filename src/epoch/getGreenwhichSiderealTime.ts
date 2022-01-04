import { getJulianDate } from '.'

import { J2000 } from './constants'

/**
 * getGreenwhichSiderealTime()
 *
 * @param datetime
 * @returns the local sidereal time relative to Greenwhich, UK
 */
export const getGreenwhichSiderealTime = (datetime: Date): number => {
  const JD = getJulianDate(datetime)

  const JD_0 = Math.floor(JD - 0.5) + 0.5

  const S = JD_0 - J2000

  const T = S / 36525.0

  let T_0 = (6.697374558 + 2400.051336 * T + 0.000025862 * Math.pow(T, 2)) % 24

  if (T_0 < 0) T_0 += 24

  const UTC =
    ((datetime.getUTCMilliseconds() / 1000 + datetime.getUTCSeconds()) / 60 +
      datetime.getUTCMinutes()) /
      60 +
    datetime.getUTCHours()

  const A = UTC * 1.002737909

  T_0 += A

  const GST = T_0 % 24

  return GST < 0 ? GST + 24 : GST
}
