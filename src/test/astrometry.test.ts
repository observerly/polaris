import { describe, expect, it, suite } from 'vitest'

import { datetime, longitude, betelgeuse } from '.'

import { getHourAngle, getLocalSiderealTime } from '../'

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
})
