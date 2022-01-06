import { describe, expect, it, suite } from 'vitest'

import {
  getSolarEquationOfCenter,
  getSolarGeometricMeanLongitude,
  getSolarMeanAnomaly,
  getSolarMeanObliquity,
  getSolarRadialDistance,
  getSolarTrueAnomaly,
  getSolarTrueGeometricLongitude,
  getNumberOfJulianCenturiesSinceEpoch2000,
  getEarthEccentricity
} from '..'

import { datetime } from '.'

suite('@observerly/polaris Solar', () => {
  describe('Solar Mean Anomaly', () => {
    it('getSolarMeanAnomaly should be defined', () => {
      expect(getSolarMeanAnomaly).toBeDefined()
    })

    it('getSolarMeanAnomaly should be', () => {
      // For testing we need to specify a date because most calculations are
      // differential w.r.t a time component. We set it to the date provided
      // on p.342 of Meeus, Jean. 1991. Astronomical algorithms.Richmond,
      // Va: Willmann - Bell.:
      const d = new Date('1992-04-12T00:00:00.000+00:00')

      const T = getNumberOfJulianCenturiesSinceEpoch2000(d)

      const S = getSolarMeanAnomaly(T)
      expect(S).toBeCloseTo(97.643514)
    })
  })

  describe('Solar Mean Obliquity', () => {
    it('getSolarMeanObliquity should be defined', () => {
      expect(getSolarMeanObliquity).toBeDefined()
    })

    it('getSolarMeanObliquity should be', () => {
      const T = getNumberOfJulianCenturiesSinceEpoch2000(datetime)

      const O = getSolarMeanObliquity(T)
      expect(O).toBeCloseTo(23.43651)
    })
  })

  describe('Solar Geometric Mean Longitude', () => {
    it('getSolarGeometricMeanLongitude should be defined', () => {
      expect(getSolarGeometricMeanLongitude).toBeDefined()
    })

    it('getSolarGeometricMeanLongitude should be defined', () => {
      const T = getNumberOfJulianCenturiesSinceEpoch2000(datetime)

      const L = getSolarGeometricMeanLongitude(T)
      expect(L).toBeCloseTo(51.966, 1)
    })
  })

  describe('Solar True Geometric Longitude', () => {
    it('getSolarTrueGeometricLongitude should be defined', () => {
      expect(getSolarGeometricMeanLongitude).toBeDefined()
    })

    it('getSolarTrueGeometricLongitude should be defined', () => {
      // For testing we need to specify a date because most calculations are
      // differential w.r.t a time component. We set it to the date provided
      // on p.165 of Meeus, Jean. 1991. Astronomical algorithms.Richmond,
      // Va: Willmann - Bell.:
      const d = new Date('1992-10-13T00:00:00.000+00:00')

      const T = getNumberOfJulianCenturiesSinceEpoch2000(d)

      const M = getSolarMeanAnomaly(T)

      const C = getSolarEquationOfCenter(T, M)

      const L = getSolarGeometricMeanLongitude(T)

      const O = getSolarTrueGeometricLongitude(L, C)

      expect(O).toBeCloseTo(199.90988)
    })
  })

  describe('Solar Equation of Center', () => {
    it('getSolarEquationOfCenter should be defined', () => {
      expect(getSolarEquationOfCenter).toBeDefined()
    })

    it('getSolarEquationOfCenter should be', () => {
      // For testing we need to specify a date because most calculations are
      // differential w.r.t a time component. We set it to the date provided
      // on p.165 of Meeus, Jean. 1991. Astronomical algorithms.Richmond,
      // Va: Willmann - Bell.:
      const d = new Date('1992-10-13T00:00:00.000+00:00')

      const T = getNumberOfJulianCenturiesSinceEpoch2000(d)

      const M = getSolarMeanAnomaly(T)

      const C = getSolarEquationOfCenter(T, M)

      expect(C).toBeCloseTo(-1.897323847)
    })
  })

  describe('Solar Radial Distance', () => {
    it('getSolarRadialDistance should be defined', () => {
      expect(getSolarRadialDistance).toBeDefined()
    })

    it('getSolarRadialDistance should be', () => {
      // For testing we need to specify a date because most calculations are
      // differential w.r.t a time component. We set it to the date provided
      // on p.165 of Meeus, Jean. 1991. Astronomical algorithms.Richmond,
      // Va: Willmann - Bell.:
      const d = new Date('1992-10-13T00:00:00.000+00:00')

      const T = getNumberOfJulianCenturiesSinceEpoch2000(d)

      const M = getSolarMeanAnomaly(T)

      const C = getSolarEquationOfCenter(T, M)

      const e = getEarthEccentricity(T)

      const ν = getSolarTrueAnomaly(M, C)

      const R = getSolarRadialDistance(e, ν)

      expect(R).toBeCloseTo(0.9976619)
    })
  })
})
