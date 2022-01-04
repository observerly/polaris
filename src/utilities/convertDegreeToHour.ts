/**
 * convertDegreeToHour()
 *
 * @description Converts degrees into hours where 360° = 24 hours. e.g., 1° = 24 / 360° = 0.06666...6
 *
 * @param degree number
 * @returns the converted hours
 */
export const convertDegreeToHour = (degree: number): number => {
  return degree * (24 / 360)
}
