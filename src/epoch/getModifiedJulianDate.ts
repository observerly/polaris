/**
 * getModifiedJulianDate()
 *
 * @param datetime
 * @returns the Modified Julian Date as an integer for a particular datetime:
 */
export const getModifiedJulianDate = (datetime: Date): number => {
  return datetime.getTime() / 86400000.0 + 2440587.5 - 2400000.5
}
