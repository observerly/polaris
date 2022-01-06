import { describe, expect, it, suite } from 'vitest'

import { datetime, longitude, betelgeuse } from '.'

import { getEclipticObliquityEpoch2000, getHourAngle, getLocalSiderealTime } from '../'

suite('@observerly/polaris Astrometry', () => {
  describe('Hour Angle', () => {
    it('getHourAngle should be defined', () => {
      expect(getHourAngle).toBeDefined()
    })

    it('getHourAngle should be', () => {
      const LST = getLocalSiderealTime(datetime, longitude)
      const ha = getHourAngle(betelgeuse.ra, LST)
      expect(ha).toBe(347.6988036852858)
    })
  })

  describe('Obliquity of the Ecliptic', () => {
    it('getEclipticObliquityEpoch2000 should be defined', () => {
      expect(getEclipticObliquityEpoch2000).toBeDefined()
    })

    it('getEclipticObliquityEpoch2000 should be', () => {
      const O = getEclipticObliquityEpoch2000()
      expect(O).toBe(23.4392911)
    })
  })
})
