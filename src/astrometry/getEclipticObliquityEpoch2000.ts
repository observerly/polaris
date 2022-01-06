import { ECLIPTIC_OBLIQUITY_J2000 } from './constants'

/**
 *
 * getEclipticObliquityEpoch2000()
 *
 * @escription obliquity of the eclipticsl; the angle between the ecliptic and the celestial equator
 * @see p.92 of Meeus, Jean. 1991. Astronomical algorithms. Richmond, Va: Willmann-Bell.
 *
 * @returns the ecliptic obliquity of the J2000 epoch
 */
export const getEclipticObliquityEpoch2000 = () => {
  return ECLIPTIC_OBLIQUITY_J2000
}
