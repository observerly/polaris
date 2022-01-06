/**
 * getSolarEquationOfCenter()
 *
 * @see p.164 of Meeus, Jean. 1991. Astronomical algorithms. Richmond, Va: Willmann-Bell.
 *
 * @param T (of type number) the Ephemeris Time or the number of centuries since J2000 epoch
 * @returns the equation of center for the Sun
 */
export const getSolarEquationOfCenter = (T: number, M: number): number => {
  return (
    (1.914602 - 0.004817 * T - 0.000014 * Math.pow(T, 2)) * Math.sin(M) +
    (0.019993 - 0.000101 * T) * Math.sin(M * 2) +
    0.000289 * Math.sin(M * 3)
  )
}
