import { describe, expect, it, suite } from 'vitest'

import {
  getEarthEccentricity,
  getEarthObliquity,
  getNumberOfJulianCenturiesSinceEpoch2000
} from '../'

// For testing we need to specify a date because most calculations are
// differential w.r.t a time component. We set it to the date provided
// on p.342 of Meeus, Jean. 1991. Astronomical algorithms.Richmond,
// Va: Willmann - Bell.:
export const datetime = new Date('1992-04-12T00:00:00.000+00:00')

const T = getNumberOfJulianCenturiesSinceEpoch2000(datetime)

suite('@observerly/polaris Terra', () => {
  describe('Earth Eccentricity', () => {
    it('getEarthEccentricity should be defined', () => {
      expect(getEarthEccentricity).toBeDefined()
    })

    it('getEarthEccentricity should be', () => {
      const E = getEarthEccentricity(T)
      expect(E).toBeCloseTo(1.000194)
    })
  })

  describe('Earth Obliquity', () => {
    it('getEarthObliquity should be defined', () => {
      expect(getEarthObliquity).toBeDefined()
    })

    it('getEarthObliquity should be', () => {
      const O = getEarthObliquity()
      expect(O).toBe(23.4397)
    })
  })
})
