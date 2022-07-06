import { convertDegreeToHMS } from './convertDegreeToHMS'

/**
 *
 * parseDegreeToHMSHumanised()
 *
 * convert coordinate (in decimal degrees) to hours (h), minutes (m), seconds (s).
 *
 * @param degree
 * @returns e.g., string '0ʰ 0ᵐ 00ˢ'
 */
export const parseDegreeToHMSHumanised = (degree: number): string => {
  const { hrs, min, sec } = convertDegreeToHMS(degree)
  return `${Math.abs(hrs) < 10 ? '0' + Math.abs(hrs) : hrs}ʰ ${
    min < 10 ? '0' + Math.abs(min) : Math.abs(min)
  }ᵐ ${sec < 10 ? '0' + Math.abs(sec) : Math.abs(sec)}ˢ`
}
