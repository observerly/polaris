/**
 * convertDegreesToRadians()
 * Converts degrees to radians.
 *
 * @param degree (as type number)
 * @returns the equivalent radian value
 */
export const convertDegreeToRadian = (degree: number): number => {
  return degree * (Math.PI / 180)
}
