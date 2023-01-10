/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/polaris
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

export {
  getAngularSeparation,
  getEclipticObliquity,
  getEclipticObliquityCorrected,
  getEclipticObliquityEpoch2000,
  getEquatorialCoordinateProperMotionCorrected,
  getHourAngle,
  getOrthodromicAngluarDistance,
  getParallacticAngle
} from './astrometry'

/*****************************************************************************************************************/

import type { Constellation } from './types'

import * as _constellations from './constellations/iau'

export const constellations: Constellation[] = Object.values(_constellations)

export { getConstellation } from './constellations'

/*****************************************************************************************************************/

export {
  convertEclipticToEquatorial,
  convertEquatorialToHorizontal,
  convertHorizontalToEquatorial,
  precessEquatorialCoordinate
} from './coordinates'

/*****************************************************************************************************************/

export {
  getCurrentYearEnd,
  getCurrentYearStart,
  getGreenwhichSiderealTime,
  getJulianDate,
  getJulianYearInSeconds,
  getLocalSiderealTime,
  getModifiedJulianDate,
  getNumberOfJulianCenturiesSinceEpoch,
  getNumberOfJulianCenturiesSinceEpoch1900,
  getNumberOfJulianCenturiesSinceEpoch2000,
  J1900,
  J2000,
  JULIAN_YEAR_IN_DAYS
} from './epoch'

/*****************************************************************************************************************/

export {
  getLunarArgumentOfLatitude,
  getLunarEclipticPosition,
  getLunarEquatorialPosition,
  getLunarIlluminatedFraction,
  getLunarMeanAnomaly,
  getLunarMeanElongation,
  getLunarMeanLongitude,
  getLunarPhase,
  getLunarPhaseAngle,
  getLunarPhaseName,
  getMoon
} from './lunar'

/*****************************************************************************************************************/

export { type UseObserverParams, useObserver, Observer } from './observer'

/*****************************************************************************************************************/

export { type UseObservationParams, getAirmass, useObservation, Observation } from './observation'

/*****************************************************************************************************************/

export { convertHorizontalToStereo, convertStereoToHorizontal } from './projection'

/*****************************************************************************************************************/

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
  getSolarTrueGeometricLongitude,
  getSun
} from './solar'

/*****************************************************************************************************************/

export { getEarthEccentricity, getEarthObliquity } from './terra'

/*****************************************************************************************************************/

export type {
  Body,
  CartesianCoordinate,
  Constellation,
  ConstellationNancyRoman,
  EquatorialCoordinate,
  GeographicCoordinate,
  HorizontalCoordinate,
  Moon,
  Sun
} from './types'

/*****************************************************************************************************************/

export {
  convertDegreeToDMS,
  convertDegreeToHMS,
  convertDegreeToHour,
  convertDegreeToRadian,
  convertRadianToDegree,
  getNormalisedDegree,
  normaliseStellarMagnitude,
  parseDegreeToDMSHumanised,
  parseDegreeToHMSHumanised
} from './utilities'

/*****************************************************************************************************************/
