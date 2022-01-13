/**
 *
 * normaliseStellarMagnitude()
 *
 * @param magnitude
 * @param limit
 * @returns the normalised stellar magnitude relative to the IAU scale
 */
export const normaliseStellarMagnitude = (magnitude: number, limit: number): number => {
  return magnitude * -1 + limit + 1 <= 0 ? 0 : (magnitude * -1 + limit + 1) / 1.5
}
