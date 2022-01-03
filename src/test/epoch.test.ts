import { describe, expect, it, suite } from 'vitest'

import { getJulianYearInSeconds } from '../'

suite('@observerly/polaris Epoch', () => {
  describe('Julian Year', () => {
    it('getJulianYearInSeconds should be defined', () => {
      expect(getJulianYearInSeconds).toBeDefined()
    })

    it('getJulianYearInSeconds should be', () => {
      const julianYearInSeconds = getJulianYearInSeconds()
      expect(julianYearInSeconds).toBe(31557600)
    })
  })
})
