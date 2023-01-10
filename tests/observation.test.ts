import { describe, expect, it, suite } from 'vitest'

import { getAirmass, convertEquatorialToHorizontal } from '../src'

import { betelgeuse, datetime, observer } from '.'

suite('@observerly/polaris Observation', () => {
  describe('getAirmass', () => {
    it('should be defined', () => {
      expect(getAirmass).toBeDefined()
    })

    it('should return the correct airmass', () => {
      expect(getAirmass(0)).toBeCloseTo(1, 1)
    })

    it('should return the correct airmass for an observation of betelgeuse', () => {
      const { alt } = convertEquatorialToHorizontal(betelgeuse, observer, datetime)
      expect(getAirmass(alt)).toBeCloseTo(1.4, 1)
    })
  })
})
