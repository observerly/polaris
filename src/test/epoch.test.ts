import { describe, expect, it, suite } from 'vitest'

import { datetime } from '.'

import { getJulianDate, getJulianYearInSeconds, getModifiedJulianDate } from '../'

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

  describe('Julian Date', () => {
    it('getJulianDate should be defined', () => {
      expect(getJulianDate).toBeDefined()
    })

    it('getJulianDate should be', () => {
      const julianDate = getJulianDate(datetime)
      expect(julianDate).toBe(2459348.5)
    })
  })

  describe('Modified Julian Date', () => {
    it('getModifiedJulianDate should be defined', () => {
      expect(getModifiedJulianDate).toBeDefined()
    })

    it('getModifiedJulianDate should be', () => {
      const modifiedJulianDate = getModifiedJulianDate(datetime)
      expect(modifiedJulianDate).toBe(59348)
    })
  })
})
