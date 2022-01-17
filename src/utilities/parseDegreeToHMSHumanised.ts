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
  return `${hrs < 10 ? '0' + hrs : hrs}ʰ ${min}ᵐ ${sec}ˢ`
}
