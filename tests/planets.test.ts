import { describe, expect, it, suite } from 'vitest'

import { getPlanetaryMeanAnomaly } from '../src'

suite('@observerly/polaris Planets', () => {
  describe('Planetary Mean Anomaly', () => {
    it('getPlanetaryMeanAnomaly should be defined', () => {
      expect(getPlanetaryMeanAnomaly).toBeDefined()
    })

    it('getPlanetaryMeanAnomaly should be correct for the default datetime for Venus', () => {
      const datetime = new Date('2016-01-04T00:00:00.000Z')

      const meanAnomaly = getPlanetaryMeanAnomaly(datetime, 0.615197, 181.9791, 131.602467)
      expect(meanAnomaly).toBeCloseTo(58.23781)
    })
  })
})
