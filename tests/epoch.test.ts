import { describe, expect, it, suite } from 'vitest'

import { datetime, longitude } from '.'

import {
  getCurrentYearEnd,
  getCurrentYearStart,
  getGreenwhichSiderealTime,
  getJulianDate,
  getJulianYearInSeconds,
  getLocalSiderealTime,
  getModifiedJulianDate,
  getNumberOfJulianCenturiesSinceEpoch,
  getNumberOfJulianCenturiesSinceEpoch1900,
  getNumberOfJulianCenturiesSinceEpoch2000
} from '../src'

import { J1900, J2000 } from '../src/epoch/constants'

suite('@observerly/polaris Epoch', () => {
  describe('Current Year', () => {
    it('getCurrentYearStart should be defined', () => {
      expect(getCurrentYearStart).toBeDefined()
    })

    it('getCurrentYearStart should be 1st January', () => {
      const yearStart = getCurrentYearStart(datetime)
      expect(yearStart.toISOString()).toBe('2021-01-01T00:00:00.000Z')
    })

    it('getCurrentYearEnd should be defined', () => {
      expect(getCurrentYearEnd).toBeDefined()
    })

    it('getCurrentYearEnd should be 31st December', () => {
      const yearEnd = getCurrentYearEnd(datetime)
      expect(yearEnd.toISOString()).toBe('2021-12-31T00:00:00.000Z')
    })
  })

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

  describe('Number Of Centuries Since Epoch', () => {
    it('getNumberOfJulianCenturiesSinceEpoch should be defined', () => {
      expect(getNumberOfJulianCenturiesSinceEpoch).toBeDefined()
    })

    it('getNumberOfJulianCenturiesSinceEpoch should be', () => {
      const T = getNumberOfJulianCenturiesSinceEpoch(datetime, J1900)
      expect(T).toBe(1.2136481861738535)
    })

    it('getNumberOfJulianCenturiesSinceEpoch should be', () => {
      const T = getNumberOfJulianCenturiesSinceEpoch(datetime, J2000)
      expect(T).toBe(0.21364818617385353)
    })

    it('getNumberOfJulianCenturiesSinceEpoch1900 should be defined', () => {
      expect(getNumberOfJulianCenturiesSinceEpoch1900).toBeDefined()
    })

    it('getNumberOfJulianCenturiesSinceEpoch1900 should be', () => {
      const T = getNumberOfJulianCenturiesSinceEpoch1900(datetime)
      expect(T).toBe(1.2136481861738535)
    })

    it('getNumberOfJulianCenturiesSinceEpoch2000 should be defined', () => {
      expect(getNumberOfJulianCenturiesSinceEpoch2000).toBeDefined()
    })

    it('getNumberOfJulianCenturiesSinceEpoch2000 should be', () => {
      const T = getNumberOfJulianCenturiesSinceEpoch2000(datetime)
      expect(T).toBe(0.21364818617385353)
    })
  })

  describe('Greenwhich Sidereal Time', () => {
    it('getGreenwhichSiderealTime should be defined', () => {
      expect(getGreenwhichSiderealTime).toBeDefined()
    })

    it('getGreenwhichSiderealTime should be', () => {
      const GST = getGreenwhichSiderealTime(datetime)
      expect(GST).toBe(15.463990399019053)
    })
  })

  describe('Local Sidereal Time', () => {
    it('getLocalSiderealTime should be defined', () => {
      expect(getLocalSiderealTime).toBeDefined()
    })

    it('getLocalSiderealTime should be', () => {
      const LST = getLocalSiderealTime(datetime, longitude)
      expect(LST).toBe(5.099450799019053)
    })
  })
})
