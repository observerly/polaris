import { convertDegreeToDMS } from './convertDegreeToDMS'

/**
 *
 * parseDegreeToDMSHumanised()
 *
 * convert coordinate (in decimal degrees) to degrees (°), minutes ('), seconds ('').
 *
 * @param degree
 * @returns e.g., string '0º 0' 00"'
 */
export const parseDegreeToDMSHumanised = (degree: number): string => {
  const { deg, min, sec } = convertDegreeToDMS(degree)
  return `${deg < 0 ? '' : '+'}${Math.abs(deg) < 10 ? '0' + Math.abs(deg) : deg}° ${
    min < 10 ? '0' + Math.abs(min) : Math.abs(min)
  }' ${sec < 10 ? '0' + Math.abs(sec) : Math.abs(sec)}"`
}
