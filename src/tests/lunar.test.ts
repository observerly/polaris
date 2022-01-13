import { describe, expect, it, suite } from 'vitest'

import {
  convertDegreeToRadian,
  getLunarArgumentOfLatitude,
  getLunarEclipticPosition,
  getLunarEquatorialPosition,
  getLunarIlluminatedFraction,
  getLunarMeanAnomaly,
  getLunarMeanElongation,
  getLunarMeanLongitude,
  getLunarPhase,
  getLunarPhaseAngle,
  getSolarMeanAnomaly,
  getNumberOfJulianCenturiesSinceEpoch2000
} from '..'

import { datetime } from '.'

// For testing we need to specify a date because most calculations are
// differential w.r.t a time component. We set it to the date provided
// on p.342 of Meeus, Jean. 1991. Astronomical algorithms.Richmond,
// Va: Willmann - Bell.:
export const d = new Date('1992-04-12T00:00:00.000+00:00')

const T = getNumberOfJulianCenturiesSinceEpoch2000(d)

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
      const { λ, β, Λ } = getLunarEclipticPosition(d)

      expect(λ).toBeCloseTo(133.1626581)
      expect(β).toBeCloseTo(-3.22912696)
      expect(Λ).toBeCloseTo(368409694.2252633)
    })
  })

  describe('Lunar Equatorial Position', () => {
    it('getLunarEquatorialPosition should be defined', () => {
      expect(getLunarEquatorialPosition).toBeDefined()
    })

    it('getLunarEquatorialPosition should be', () => {
      const { ra, dec } = getLunarEquatorialPosition(d)

      expect(ra).toBeCloseTo(314.683864)
      expect(dec).toBeCloseTo(13.768368)
    })
  })

  describe('Lunar Illuminated Fraction', () => {
    it('getLunarIlluminatedFraction should be defined', () => {
      expect(getLunarIlluminatedFraction).toBeDefined()
    })

    it('getLunarIlluminatedFraction should be', () => {
      // First we need to calculate the Ephemeris Time:
      const T = getNumberOfJulianCenturiesSinceEpoch2000(d)

      const D = convertDegreeToRadian(getLunarMeanElongation(T))

      const S = convertDegreeToRadian(getSolarMeanAnomaly(T))

      const M = convertDegreeToRadian(getLunarMeanAnomaly(T))

      // Calculate the Lunar Phase Angle:
      const θ = getLunarPhaseAngle(D, S, M)

      // Calculate the Lunar Illuminated Fraction from the phase angle:
      const k = getLunarIlluminatedFraction(θ)

      expect(k).toBeCloseTo(0.68896)
    })
  })

  describe('Lunar Phase', () => {
    it('getLunarPhase should be defined', () => {
      expect(getLunarPhase).toBeDefined()
    })

    it('getLunarPhase should be', () => {
      const phase = getLunarPhase(datetime)
      expect(phase).toBeCloseTo(0.06656)
    })
  })
})
