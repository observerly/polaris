/**
 * getHourAngle()
 * Gets the hour angle for a particular object for a particular observer at a given datetime
 *
 * @param ra right ascension of type number of the observed object's equatorial coordinate in degrees
 * @param LST local sidereal time of type number is defined as the hour angle of the vernal equinox in degrees
 * @returns the calculated Hour Angle in degrees
 */
export const getHourAngle = (ra: number, LST: number): number => {
  let ha = LST * 15 - ra

  // If the hour angle is less than zero, ensure we rotate by 2π radians (360 degrees)
  if (ha < 0) ha += 360

  return ha
}
