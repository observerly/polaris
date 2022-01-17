// Astrometry
export {
  getEclipticObliquity,
  getEclipticObliquityCorrected,
  getEclipticObliquityEpoch2000,
  getHourAngle
} from './astrometry'

import type { Constellation } from './types'

// Constellations
import * as _constellations from './constellations/iau'

export const constellations: Constellation[] = Object.values(_constellations)

export { getConstellation } from './constellations'

// Coordinates
export {
  convertEclipticToEquatorial,
  convertEquatorialToHorizontal,
  convertHorizontalToEquatorial,
  precessEquatorialCoordinate
} from './coordinates'

// Epoch
export {
  getCurrentYearEnd,
  getCurrentYearStart,
  getGreenwhichSiderealTime,
  getJulianDate,
  getJulianYearInSeconds,
  getLocalSiderealTime,
  getModifiedJulianDate,
  getNumberOfJulianCenturiesSinceEpoch1900,
  getNumberOfJulianCenturiesSinceEpoch2000
} from './epoch'

// Format
export { convertDegreesToHMS } from './format'

// Lunar
export {
  getLunarArgumentOfLatitude,
  getLunarEclipticPosition,
  getLunarEquatorialPosition,
  getLunarIlluminatedFraction,
  getLunarMeanAnomaly,
  getLunarMeanElongation,
  getLunarMeanLongitude,
  getLunarPhase,
  getLunarPhaseAngle
} from './lunar'

// Solar
export {
  getSolarApparentLongitude,
  getSolarEcliptic,
  getSolarEquationOfCenter,
  getSolarEquatorialPosition,
  getSolarGeometricMeanLongitude,
  getSolarMeanAnomaly,
  getSolarMeanObliquity,
  getSolarNutation,
  getSolarRadialDistance,
  getSolarTrueAnomaly,
  getSolarTrueGeometricLongitude
} from './solar'

// Terra
export { getEarthEccentricity, getEarthObliquity } from './terra'

// Types
export type {
  Constellation,
  ConstellationNancyRoman,
  EquatorialCoordinate,
  GeographicCoordinate,
  HorizontalCoordinate
} from './types'

// Utilities
export {
  convertDegreeToHMS,
  convertDegreeToHour,
  convertDegreeToRadian,
  convertRadianToDegree,
  getNormalisedDegree,
  normaliseStellarMagnitude,
  parseDegreeToHMSHumanised
} from './utilities'
