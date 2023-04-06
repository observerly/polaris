import { describe, expect, it, suite } from 'vitest'

import {
  convertEclipticToEquatorial,
  getPlanetaryEclipticCoordinate,
  getPlanetaryEquationOfCenter,
  getPlanetaryHeliocentricAdjustedEclipticCoordinate,
  getPlanetaryHeliocentricEclipticCoordinate,
  getPlanetaryMeanAnomaly,
  getPlanetaryTrueAnomaly,
  Saturn,
  Venus
} from '../src'

suite('@observerly/polaris Planets', () => {
  describe('Planetary Mean Anomaly', () => {
    it('getPlanetaryMeanAnomaly should be defined', () => {
      expect(getPlanetaryMeanAnomaly).toBeDefined()
    })

    it('getPlanetaryMeanAnomaly should be correct for the default datetime for Venus', () => {
      const datetime = new Date('2016-01-04T00:00:00.000Z')

      const M = getPlanetaryMeanAnomaly(datetime, 0.615197, 181.9791, 131.602467)
      expect(M).toBeCloseTo(58.23781)
    })

    it('getPlanetaryMeanAnomaly should be correct for the default datetime for Saturn', () => {
      const datetime = new Date('2016-01-04T00:00:00.000Z')

      const M = getPlanetaryMeanAnomaly(datetime, 29.447498, 49.954244, 92.598878)
      expect(M).toBeCloseTo(153.062318)
    })
  })

  describe('Planetary Equation of Center', () => {
    it('getPlanetaryEquationOfCenter should be defined', () => {
      expect(getPlanetaryEquationOfCenter).toBeDefined()
    })

    it('getPlanetaryEquationOfCenter should be correct for the default datetime for Venus', () => {
      const datetime = new Date('2016-01-04T00:00:00.000Z')

      const M = getPlanetaryMeanAnomaly(datetime, 0.615197, 181.9791, 131.602467)

      const C = getPlanetaryEquationOfCenter(M, 0.0067767)
      expect(C).toBeCloseTo(0.655907)
    })

    it('getPlanetaryEquationOfCenter should be correct for the default datetime for Saturn', () => {
      const datetime = new Date('2016-01-04T00:00:00.000Z')

      const M = getPlanetaryMeanAnomaly(datetime, 29.447498, 49.954244, 92.598878)

      const C = getPlanetaryEquationOfCenter(M, 0.053862)
      expect(C).toBeCloseTo(2.7973)
    })
  })

  describe('Planetary True Anomaly', () => {
    it('getPlanetaryTrueAnomaly should be defined', () => {
      expect(getPlanetaryTrueAnomaly).toBeDefined()
    })

    it('getPlanetaryTrueAnomaly should be correct for the default datetime for Venus', () => {
      const datetime = new Date('2016-01-04T00:00:00.000Z')

      const M = getPlanetaryMeanAnomaly(datetime, 0.615197, 181.9791, 131.602467)

      const C = getPlanetaryEquationOfCenter(M, 0.0067767)

      const V = getPlanetaryTrueAnomaly(M, C)

      expect(V).toBeCloseTo(58.89372)
    })

    it('getPlanetaryTrueAnomaly should be correct for the default datetime for Saturn', () => {
      const datetime = new Date('2016-01-04T00:00:00.000Z')

      const M = getPlanetaryMeanAnomaly(datetime, 29.447498, 49.954244, 92.598878)

      const C = getPlanetaryEquationOfCenter(M, 0.053862)

      const V = getPlanetaryTrueAnomaly(M, C)

      expect(V).toBeCloseTo(155.858423)
    })
  })

  describe('Planetary Heliocentric Ecliptic Coordinate', () => {
    it('getPlanetaryHeliocentricEclipticCoordinate should be defined', () => {
      expect(getPlanetaryHeliocentricEclipticCoordinate).toBeDefined()
    })

    it('getPlanetaryHeliocentricEclipticCoordinate should be correct for the default datetime for Venus', () => {
      const datetime = new Date('2016-01-04T00:00:00.000Z')

      const { L, Λ, R } = getPlanetaryHeliocentricEclipticCoordinate(datetime, Venus)

      expect(L).toBeCloseTo(190.500533)

      expect(Λ).toBeCloseTo(3.105199)

      expect(R).toBeCloseTo(0.720735)
    })

    it('getPlanetaryHeliocentricEclipticCoordinate should be correct for the default datetime for Saturn', () => {
      const datetime = new Date('2016-01-04T00:00:00.000Z')

      const { L, Λ, R } = getPlanetaryHeliocentricEclipticCoordinate(datetime, Saturn)

      expect(L).toBeCloseTo(248.457302)

      expect(Λ).toBeCloseTo(1.764216)

      expect(R).toBeCloseTo(10.000499)
    })
  })

  describe('Planetary Heliocentric Adjusted Ecliptic Coordinate', () => {
    it('getPlanetaryHeliocentricEclipticCoordinate should be defined', () => {
      expect(getPlanetaryHeliocentricEclipticCoordinate).toBeDefined()
    })

    it('getPlanetaryHeliocentricEclipticCoordinate should be correct for the default datetime for Venus', () => {
      const datetime = new Date('2016-01-04T00:00:00.000Z')

      const { L, Λ, R } = getPlanetaryHeliocentricAdjustedEclipticCoordinate(datetime, Venus)

      expect(L).toBeCloseTo(190.537733)

      expect(Λ).toBeCloseTo(3.105199)

      expect(R).toBeCloseTo(0.720735)
    })
  })

  describe('Planetary Geocentric Ecliptic Coordinate', () => {
    it('getPlanetaryEclipticCoordinate should be defined', () => {
      expect(getPlanetaryEclipticCoordinate).toBeDefined()
    })

    it('getPlanetaryHeliocentricEclipticCoordinate should be correct for the default datetime for Venus', () => {
      const datetime = new Date('2016-01-04T00:00:00.000Z')

      const { λ, β, Λ } = getPlanetaryEclipticCoordinate(datetime, Venus)

      expect(λ).toBeCloseTo(246.25042062)

      expect(β).toBeCloseTo(1.881486)

      const { ra, dec } = convertEclipticToEquatorial({ λ, β, Λ }, datetime)

      expect(ra).toBeCloseTo(244.722343)
      expect(dec).toBeCloseTo(-19.495993)
    })

    it('getPlanetaryHeliocentricEclipticCoordinate should be correct for the default datetime for Saturn', () => {
      const datetime = new Date('2016-01-04T00:00:00.000Z')

      const { λ, β, Λ } = getPlanetaryEclipticCoordinate(datetime, Saturn)

      expect(λ).toBeCloseTo(251.47150994)

      expect(β).toBeCloseTo(1.629973)

      const { ra, dec } = convertEclipticToEquatorial({ λ, β, Λ }, datetime)

      expect(ra).toBeCloseTo(250.1710167)
      expect(dec).toBeCloseTo(-20.537509)
    })
  })
})
