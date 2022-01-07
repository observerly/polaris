import type { AngleHourMinuteSecond } from '../types'

/**
 *
 * convertDegreesToHMS()
 *
 * @description converts degrees in it's hour, minute and seconds components
 *
 * @param degree (of type number)
 * @returns the converted hour, minute and seconds components for a given degree
 */
export const convertDegreesToHMS = (degree: number): AngleHourMinuteSecond => {
  degree = Math.abs(degree)

  const deg = degree / 15

  const hrs = Math.floor(deg)

  const min = Math.floor((deg - hrs) * 60)

  const sec = Math.round((deg - hrs - min / 60) * 3600 * 1000) / 1000

  return {
    hrs: hrs,
    min: min,
    sec: sec
  }
}
