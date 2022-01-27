import type { EquatorialCoordinate, HorizontalCoordinate } from '../types'

export interface Body {
  /**
   *
   * Some ID for the Start (Internal Usage only)
   *
   */
  id: number
  /**
   *
   * Right Ascension
   *
   */
  ra: string
  /**
   *
   * Declination
   *
   */
  dec: string
  /**
   *
   * IAU Constellation String
   *
   */
  constellation: string
  /**
   *
   * Apparent Magnitude
   *
   */
  apparentMagnitude: string
  /**
   *
   * Absolute Magnitude
   *
   */
  absoluteMagnitude: string
  /**
   *
   * V Band Magnitude (Magnitude relative to the Star Vega)
   *
   */
  vBandMagnitude: string
  /**
   *
   * Observed parallax of star
   *
   */
  parallax: string
  /**
   *
   * Observed distance of star
   *
   */
  d: string
  /**
   *
   * Observed angular diameter of star
   *
   */
  angularDiameter: number
  /**
   *
   * Defined International Astronomy Union (IAU) Name
   *
   */
  iau: string
  /**
   *
   * Defined Common Name
   *
   */
  common: string
  /**
   *
   * Bayer Designation
   *
   */
  bayer: string
  /**
   *
   * Henry Draper Catalogue (HD) Catalogue Identification
   *
   */
  hd: string
  /**
   *
   * Harvard Revised Number
   *
   */
  hr: string
  /**
   *
   * Hipparcos Input (HIP) Catalogue Identification
   *
   */
  hip: string
  /**
   *
   * Bonner Durchmusterung (BD) Identification
   *
   */
  dm: string
  /**
   *
   * Flamsteed Designation Number
   *
   */
  flamsteed: string
  /**
   *
   * Messier Catalogue Number
   *
   */
  messier: string
  /**
   *
   * New General Catalogue Number
   *
   */
  ngc: string
  /**
   *
   * Index Catalogue Number
   *
   */
  ic: string
  /**
   *
   * A standard value representing the body type
   *
   * S => Star
   *
   * SG => Spiral Galaxy
   * BG => Barred Galaxy
   * EG => Elliptical Galaxy
   * LG => Lenticular Galaxy
   * SBG => Starburst Galaxy
   * IG => Irregular Galaxy
   *
   * OCL => Open Cluster
   * GCL => Globular Cluster
   *
   * EMN => Emission Nebula
   * REN => Reflection Nebula
   * DAN => Dark Nebula
   * PLN => Planetary Nebula
   * DFFN => Diffuse Nebula
   * SNR => Supernova Remnant
   *
   * @default 'S'
   *
   */
  type: string
  /**
   *
   * SIMBAD Lookup Query
   *
   */
  query: string
}

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
