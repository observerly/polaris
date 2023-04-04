import { describe, expect, it, suite } from 'vitest'

import { getPlanetaryEquationOfCenter, getPlanetaryMeanAnomaly } from '../src'

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
})
