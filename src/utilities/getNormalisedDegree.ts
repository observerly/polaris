/**
 * getNormalisedDegree()
 * Applies a correction to a degree value greater than 360
 *
 * @param radian (as type number)
 * @returns the corrected degree value
 */
export const getNormalisedDegree = (degree: number): number => {
  // Correct for large angles (+ive or -ive):
  let d = degree % 360
  // Correct for negative angles
  if (d < 0) d += 360
  return d
}
