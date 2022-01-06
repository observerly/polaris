import { describe, expect, it, suite } from 'vitest'

import {
  getSolarGeometricMeanLongitude,
  getSolarMeanAnomaly,
  getSolarMeanObliquity,
  getNumberOfJulianCenturiesSinceEpoch2000
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
})
