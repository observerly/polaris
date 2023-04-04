import { describe, expect, it, suite } from 'vitest'

import {
  getPlanetaryEquationOfCenter,
  getPlanetaryHeliocentricEclipticCoordinate,
  getPlanetaryMeanAnomaly,
  getPlanetaryTrueAnomaly
} from '../src'

const Venus = {
  period: 0.615197,
  eccentricity: 0.0067767,
  inclination: 3.394676,
  semiMajorAxis: 0.72332982,
  eclipticLongitudeAtTheEpoch: 181.9791,
  eclipticLongitudeAtPerihelion: 131.602467,
  eclipticLongitudeAtAscendingNode: 76.679842,
  inferior: true
}

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
  })
})
