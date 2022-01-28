import { getJulianDate } from '.'

/**
 * getNumberOfJulianCenturiesSinceEpoch()
 *
 * @param datetime
 * @returns the number of centuries since the Julian Date of the preferred epoch as an integer for a particular datetime
 */
export const getNumberOfJulianCenturiesSinceEpoch = (
  datetime: Date,
  startingEpoch: number
): number => {
  const JD = getJulianDate(datetime)
  // Centuries Since Starting Epoch
  return (JD - startingEpoch) / 36525
}
