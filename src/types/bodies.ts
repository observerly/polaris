import type { EquatorialCoordinate, HorizontalCoordinate } from '../types'

export interface Moon extends EquatorialCoordinate, Partial<HorizontalCoordinate> {
  /**
   *
   * The illuminated fraction of the Moon's disk as a value between
   * 0 and 1
   *
   */
  illumination: number
  /**
   *
   * inclination of equator to the ecliptic (inclination
   * to ecliptic)
   *
   * @see Hamilton, Calvin J.; Hamilton, Rosanna L., The Moon, Views
   * of the Solar System Archived 4 February 2016 at the Wayback
   * Machine, 1995–2011
   *
   */
  inclination: number
  /**
   *
   * inclination of equator to body's own orbital plane (obliquity
   * to orbit)
   *
   * @see Lang, Kenneth R. (2011). The Cambridge Guide to the Solar
   * System (2nd ed.). Cambridge University Press. ISBN 9781139494175.
   * Archived from the original on 1 January 2016
   *
   */
  obliquity: number
  /**
   *
   * The current lunar phase represented as a number
   *
   */
  phase: number
  /**
   *
   * The period of the Moon's orbit as defined with respect to the
   * celestial sphere of apparently fixed stars
   *
   */
  siderealMonth: number
  /**
   *
   * The synodic month, also lunation, is the average period of the
   * Moon's orbit with respect to the line joining the Sun and Earth
   *
   */
  synodicMonth: number
}

export interface Sun extends EquatorialCoordinate, Partial<HorizontalCoordinate> {}
