// Astrometry
export {
  getEclipticObliquity,
  getEclipticObliquityCorrected,
  getEclipticObliquityEpoch2000,
  getHourAngle
} from './astrometry'

// Constellations
export * from './constellations'

import * as _constellations from './constellations'

export const constellations = Object.values(_constellations)

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
  getLunarMeanAnomaly,
  getLunarMeanElongation,
  getLunarMeanLongitude,
  getLunarPhase,
  getLunarPhaseAngle
} from './lunar'

// Solar
export {
  getSolarApparentLongitude,
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
export type { EquatorialCoordinate, GeographicCoordinate, HorizontalCoordinate } from './types'

// Utilities
export {
  convertDegreeToHour,
  convertDegreeToRadian,
  convertRadianToDegree,
  getNormalisedDegree
} from './utilities'
