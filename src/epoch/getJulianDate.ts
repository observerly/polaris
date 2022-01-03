/**
 * getJulianDate()
 *
 * @param datetime
 * @returns returns the Julian Date as an integer for a particular datetime:
 */
export const getJulianDate = (datetime: Date): number => {
  return datetime.getTime() / 86400000.0 + 2440587.5
}
