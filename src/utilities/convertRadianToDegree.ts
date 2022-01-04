/**
 * convertRadiansToDegrees()
 * Converts radians to degrees
 *
 * @param radian (as type number)
 * @returns the equivalent degree value
 */
export const convertRadianToDegree = (radian: number): number => {
  return radian * (180 / Math.PI)
}
