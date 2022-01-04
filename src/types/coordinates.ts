export type EquatorialCoordinate = {
  /**
   *
   * right ascension, in astronomy, the east–west coordinate by which the position
   * of a celestial body is ordinarily measured; more precisely, it is the angular
   * distance of a body's hour circle east of the vernal equinox, measured along
   * the celestial equator (in unit degrees)
   *
   */
  ra: number
  /**
   *
   * angular distance north or south from the celestial equator measured along a
   * great circle passing through the celestial poles (in unit degrees)
   *
   */
  dec: number
}

export type GeographicCoordinate = {
  /**
   *
   * the angular distance of a place east or west of the Greenwich meridian (in unit degrees)
   *
   */
  longitude: number
  /**
   *
   * the angular distance of a place north or south of the earth's equator (in unit degrees)
   *
   */
  latitude: number
}

export type HorizontalCoordinate = {
  /**
   *
   * is the angle of the object around the horizon, usually measured from true north
   * and increasing eastward
   *
   */
  az: number
  /**
   *
   * Altitude is the angular distance of an object above the local horizon
   *
   */
  alt: number
}
