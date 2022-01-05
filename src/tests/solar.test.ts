import { describe, expect, it, suite } from 'vitest'

import { getSolarMeanAnomaly, getNumberOfJulianCenturiesSinceEpoch2000 } from '..'

// For testing we need to specify a date because most calculations are
// differential w.r.t a time component. We set it to the date provided
// on p.342 of Meeus, Jean. 1991. Astronomical algorithms.Richmond,
// Va: Willmann - Bell.:
export const datetime = new Date('1992-04-12T00:00:00.000+00:00')

const T = getNumberOfJulianCenturiesSinceEpoch2000(datetime)

suite('@observerly/polaris Solar', () => {
  describe('Solar Mean Anomaly', () => {
    it('getSolarMeanAnomaly should be defined', () => {
      expect(getSolarMeanAnomaly).toBeDefined()
    })

    it('getSolarMeanAnomaly should be', () => {
      const S = getSolarMeanAnomaly(T)
      expect(S).toBeCloseTo(97.643514)
    })
  })
})
