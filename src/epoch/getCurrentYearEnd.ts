/**
 * getCurrentYearEnd()
 *
 * @param datetime
 * @returns December 31st relative to the specified datetime
 */
export const getCurrentYearEnd = (datetime: Date) => {
  return new Date(new Date(datetime).getFullYear(), 11, 31, 0, 0, 0, 0)
}
