import { describe, expect, it, suite } from 'vitest'

import { getCorrectionToEquatorialForPrecessionOfEquinoxes } from '../src'

import { betelgeuse, datetime } from '.'

suite('@observerly/polaris Precession', () => {
  describe('Equatorial Coordinate Precession', () => {
    it('getCorrectionToEquatorialForPrecessionOfEquinoxes should be defined', () => {
      expect(getCorrectionToEquatorialForPrecessionOfEquinoxes).toBeDefined()
    })

    it('getCorrectionToEquatorialForPrecessionOfEquinoxes should be correct for the default datetime for Betelgeuse', () => {
      const t = getCorrectionToEquatorialForPrecessionOfEquinoxes(datetime, betelgeuse)

      expect(t.ra).toBeCloseTo(0.012957)
      expect(t.dec).toBeCloseTo(-0.001086)

      const ra = t.ra + betelgeuse.ra
      const dec = t.dec + betelgeuse.dec

      expect(ra).toBeCloseTo(88.8059159898502)
      expect(dec).toBeCloseTo(7.40708895935797)
    })
  })
})
