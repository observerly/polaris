/**
 * getCurrentYearStart()
 *
 * @param datetime
 * @returns January 1st relative to the current year of specified datetime
 */
export const getCurrentYearStart = (datetime: Date) => {
  return new Date(datetime.getFullYear(), 0, 1)
}
