import { describe, expect, it, suite } from 'vitest'

import {
  getLunarMeanElongation,
  getLunarMeanLongitude,
  getNumberOfJulianCenturiesSinceEpoch2000
} from '..'

// For testing we need to specify a date because most calculations are
// differential w.r.t a time component. We set it to the date provided
// on p.342 of Meeus, Jean. 1991. Astronomical algorithms.Richmond,
// Va: Willmann - Bell.:
export const datetime = new Date('1992-04-12T00:00:00.000+00:00')

const T = getNumberOfJulianCenturiesSinceEpoch2000(datetime)

suite('@observerly/polaris Utilities', () => {
  describe('Lunar Mean Elongation', () => {
    it('getLunarMeanElongation should be defined', () => {
      expect(getLunarMeanElongation).toBeDefined()
    })

    it('getLunarMeanElongation should be', () => {
      const D = getLunarMeanElongation(T)
      expect(D).toBeCloseTo(113.842304)
    })
  })

  describe('Lunar Mean Longitude', () => {
    it('getLunarMeanLongitude should be defined', () => {
      expect(getLunarMeanLongitude).toBeDefined()
    })

    it('getLunarMeanLongitude should be', () => {
      const L = getLunarMeanLongitude(T)
      expect(L).toBeCloseTo(134.290182)
    })
  })
})
