import { describe, expect, it, suite } from 'vitest'

import {
  convertDegreeToRadian,
  getLunarArgumentOfLatitude,
  getLunarEclipticPosition,
  getLunarEquatorialPosition,
  getLunarIlluminatedFraction,
  getLunarMeanAnomaly,
  getLunarMeanEclipticLongitudeOfTheAscendingNode,
  getLunarMeanElongation,
  getLunarMeanGeometricLongitude,
  getLunarMeanLongitude,
  getLunarPhase,
  getLunarPhaseAngle,
  getLunarPhaseName,
  getMoon,
  getSolarMeanAnomaly,
  getNumberOfJulianCenturiesSinceEpoch2000
} from '../src'

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

  describe('Lunar Mean Gemoetric Longitude', () => {
    it('getLunarMeanGeometricLongitude should be defined', () => {
      expect(getLunarMeanGeometricLongitude).toBeDefined()
    })

    it('getLunarMeanGeometricLongitude should be', () => {
      const l = getLunarMeanGeometricLongitude(datetime)
      expect(l).toBeCloseTo(80.32626508452813)
    })
  })

  describe('Lunar Mean Ecliptic Longitude of the Ascending Node', () => {
    it('getLunarMeanEclipticLongitudeOfTheAscendingNode should be defined', () => {
      expect(getLunarMeanEclipticLongitudeOfTheAscendingNode).toBeDefined()
    })

    it('getLunarMeanEclipticLongitudeOfTheAscendingNode should be', () => {
      const Ω = getLunarMeanEclipticLongitudeOfTheAscendingNode(datetime)
      expect(Ω).toBeCloseTo(71.667349296471)
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
      const { ra, dec } = getLunarEquatorialPosition(datetime)

      expect(ra).toBeCloseTo(76.239624)
      expect(dec).toBeCloseTo(23.598793)
    })

    it('getLunarEquatorialPosition should be', () => {
      const d = new Date('2022-01-16T02:56:00.000+00:00')

      const { ra, dec } = getLunarEquatorialPosition(d)

      expect(ra).toBeCloseTo(95.2930136)
      expect(dec).toBeCloseTo(26.493669)
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

  describe('Lunar Phase Name', () => {
    it('getLunarPhaseName should be defined', () => {
      expect(getLunarPhaseName).toBeDefined()
    })

    it('getLunarPhaseName should be Waxing Crescent for an age between ~1.845 and ~5.537', () => {
      const phase = getLunarPhaseName(3.45)
      expect(phase).toBe('Waxing Crescent')
    })

    it('getLunarPhaseName should be First Quarter for an age between ~5.537 and ~9.228', () => {
      const phase = getLunarPhaseName(7.3)
      expect(phase).toBe('First Quarter')
    })

    it('getLunarPhaseName should be Waxing Gibbous for an age between ~9.228 and ~12.919', () => {
      const phase = getLunarPhaseName(10.5)
      expect(phase).toBe('Waxing Gibbous')
    })

    it('getLunarPhaseName should be Full Moon for an age between ~12.919 and ~16.611', () => {
      const phase = getLunarPhaseName(13.5)
      expect(phase).toBe('Full')
    })

    it('getLunarPhaseName should be Waning Gibbous for an age between ~16.611 and ~20.302', () => {
      const phase = getLunarPhaseName(18.5)
      expect(phase).toBe('Waning Gibbous')
    })

    it('getLunarPhaseName should be Last Quarter for an age between ~20.302 and ~23.994', () => {
      const phase = getLunarPhaseName(21.5)
      expect(phase).toBe('Last Quarter')
    })

    it('getLunarPhaseName should be Waning Crescent for an age between ~23.994 and ~27.685', () => {
      const phase = getLunarPhaseName(25.5)
      expect(phase).toBe('Waning Crescent')
    })

    it('getLunarPhaseName should be New for an age between ~27.685 and ~1.845', () => {
      const phase = getLunarPhaseName(0)
      expect(phase).toBe('New')
    })
  })

  describe('The Moon', () => {
    it('getMoon should be defined', () => {
      expect(getMoon).toBeDefined()
    })

    it('getMoon should be defined', () => {
      const moon = getMoon(datetime)
      expect(moon.ra).toBeCloseTo(76.239624)
      expect(moon.dec).toBeCloseTo(23.598793)
      expect(moon.illumination).toBeCloseTo(0.04226)
      expect(moon.inclination).toBe(5.145)
      expect(moon.obliquity).toBe(6.687)
      expect(moon.phase).toBeCloseTo(0.06656)
      expect(moon.siderealMonth).toBe(27.321661)
      expect(moon.synodicMonth).toBe(29.530588)
    })
  })
})
