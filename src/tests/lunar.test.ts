import { describe, expect, it, suite } from 'vitest'

import {
  getLunarArgumentOfLatitude,
  getLunarEclipticPosition,
  getLunarMeanAnomaly,
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

suite('@observerly/polaris Lunar', () => {
  describe('Lunar Argument of Latitude', () => {
    it('getLunarArgumentOfLatitude should be defined', () => {
      expect(getLunarArgumentOfLatitude).toBeDefined()
    })

    it('getLunarArgumentOfLatitude should be', () => {
      const F = getLunarArgumentOfLatitude(T)
      expect(F).toBeCloseTo(219.889721)
    })
  })

  describe('Lunar Mean Anomaly', () => {
    it('getLunarMeanAnomaly should be defined', () => {
      expect(getLunarMeanAnomaly).toBeDefined()
    })

    it('getLunarMeanAnomaly should be', () => {
      const M = getLunarMeanAnomaly(T)
      expect(M).toBeCloseTo(5.150833)
    })
  })

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

  describe('Lunar Ecliptic Position', () => {
    it('getLunarEclipticPosition should be defined', () => {
      expect(getLunarEclipticPosition).toBeDefined()
    })

    it('getLunarEclipticPosition should be', () => {
      const { λ, β, Λ } = getLunarEclipticPosition(datetime)

      expect(λ).toBeCloseTo(133.3056352)
      expect(β).toBeCloseTo(-3.27851454)
      expect(Λ).toBeCloseTo(367875966.53360325)
    })
  })
})
