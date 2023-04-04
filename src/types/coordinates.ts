export type CartesianCoordinate = {
  /**
   *
   * the x-coordinate (or x-component), as it is the signed
   * distance from the origin in the direction along the x-axis.
   *
   */
  x: number
  /**
   *
   * the y-coordinate (or y-component), as it is the signed
   * distance from the origin in the direction along the y-axis.
   *
   */
  y: number
}

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

export type HeliocentricEclipticCoordinate = {
  /**
   *
   * Ecliptic longitude or celestial longitude measures the angular distance of an
   * object along the ecliptic from the primary direction. Like right ascension in
   * the equatorial coordinate system, the primary direction (0° ecliptic longitude)
   * points from the Earth towards the Sun at the vernal equinox of the Northern
   * Hemisphere. Because it is a right-handed system, ecliptic longitude is measured
   * positive eastwards in the fundamental plane (the ecliptic) from 0° to 360°.
   * Because of axial precession, the ecliptic longitude of most "fixed stars"
   * (referred to the equinox of date) increases by about 50.3 arcseconds per year,
   * or 83.8 arcminutes per century, the speed of general precession. However, for
   * stars near the ecliptic poles, the rate of change of ecliptic longitude is
   * dominated by the slight movement of the ecliptic (that is, of the plane of
   * the earth's orbit), so the rate of change may be anything from minus infinity
   * to plus infinity depending on the exact position of the star.
   *
   */
  L: number
  /**
   *
   * Ecliptic latitude or celestial latitude measures the angular distance of an
   * object from the ecliptic towards the north (positive) or south (negative)
   * ecliptic pole. For example, the north ecliptic pole has a celestial latitude
   * of +90°. Ecliptic latitude for "fixed stars" is not affected by precession.
   *
   */
  Λ: number
  /**
   *
   * Distance is also necessary for a complete spherical position. Different distance
   * units are used for different objects. Within the Solar System, astronomical
   * units are used, and for objects near the Earth, Earth radii or kilometers are
   * used.
   *
   */
  R: number
}

export type GeocentricEclipticCoordinate = {
  /**
   *
   * Ecliptic longitude or celestial longitude measures the angular distance of an
   * object along the ecliptic from the primary direction. Like right ascension in
   * the equatorial coordinate system, the primary direction (0° ecliptic longitude)
   * points from the Earth towards the Sun at the vernal equinox of the Northern
   * Hemisphere. Because it is a right-handed system, ecliptic longitude is measured
   * positive eastwards in the fundamental plane (the ecliptic) from 0° to 360°.
   * Because of axial precession, the ecliptic longitude of most "fixed stars"
   * (referred to the equinox of date) increases by about 50.3 arcseconds per year,
   * or 83.8 arcminutes per century, the speed of general precession. However, for
   * stars near the ecliptic poles, the rate of change of ecliptic longitude is
   * dominated by the slight movement of the ecliptic (that is, of the plane of
   * the earth's orbit), so the rate of change may be anything from minus infinity
   * to plus infinity depending on the exact position of the star.
   *
   */
  λ: number
  /**
   *
   * Ecliptic latitude or celestial latitude measures the angular distance of an
   * object from the ecliptic towards the north (positive) or south (negative)
   * ecliptic pole. For example, the north ecliptic pole has a celestial latitude
   * of +90°. Ecliptic latitude for "fixed stars" is not affected by precession.
   *
   */
  β: number
  /**
   *
   * Distance is also necessary for a complete spherical position. Different distance
   * units are used for different objects. Within the Solar System, astronomical
   * units are used, and for objects near the Earth, Earth radii or kilometers are
   * used.
   *
   */
  Λ: number
}

export type GeographicCoordinate = {
  /**
   *
   * the angular distance of a place east or west of the Greenwich meridian (in unit
   * degrees)
   *
   */
  longitude: number
  /**
   *
   * the angular distance of a place north or south of the earth's equator (in unit
   * degrees)
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
