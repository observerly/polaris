/**
 *
 * getSolarTrueAnomaly()
 *
 * @see p.164 of Meeus, Jean. 1991. Astronomical algorithms. Richmond, Va: Willmann-Bell.
 *
 * @param M the geometric mean anomaly of the Sun
 * @param C the equation of center of the Sun
 * @returns the true motion of the Sun and planets along the plane of the ecliptic.
 */
export const getSolarTrueAnomaly = (M: number, C: number) => {
  return M + C
}
