import { describe, expect, it, suite } from 'vitest'

import { datetime, longitude, betelgeuse } from '.'

import {
  getEclipticObliquity,
  getEclipticObliquityCorrected,
  getEclipticObliquityEpoch2000,
  getHourAngle,
  getLocalSiderealTime,
  getNumberOfJulianCenturiesSinceEpoch2000,
  getSolarNutation
} from '../src'

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
    it('getEclipticObliquity should be defined', () => {
      expect(getEclipticObliquity).toBeDefined()
    })

    it('getEclipticObliquity should be', () => {
      // For testing we need to specify a date because most calculations are
      // differential w.r.t a time component. We set it to the date provided
      // on p.342 of Meeus, Jean. 1991. Astronomical algorithms.Richmond,
      // Va: Willmann - Bell.:
      const d = new Date('1992-10-13T00:00:00.000+00:00')

      const T = getNumberOfJulianCenturiesSinceEpoch2000(d)

      const O = getEclipticObliquity(T)

      expect(O).toBeCloseTo(23.43999)
    })

    it('getEclipticObliquityEpoch2000 should be defined', () => {
      expect(getEclipticObliquityEpoch2000).toBeDefined()
    })

    it('getEclipticObliquityEpoch2000 should be', () => {
      // For testing we need to specify a date because most calculations are
      // differential w.r.t a time component. We set it to the date provided
      // on p.342 of Meeus, Jean. 1991. Astronomical algorithms.Richmond,
      // Va: Willmann - Bell.:
      const d = new Date('1992-10-13T00:00:00.000+00:00')

      const T = getNumberOfJulianCenturiesSinceEpoch2000(d)

      const ε = getEclipticObliquity(T)

      const Ω = getSolarNutation(T)

      const O = getEclipticObliquityCorrected(ε, Ω)

      expect(O).toBeCloseTo(23.4399918)
    })

    it('getEclipticObliquityEpoch2000 should be defined', () => {
      expect(getEclipticObliquityEpoch2000).toBeDefined()
    })

    it('getEclipticObliquityEpoch2000 should be', () => {
      const O = getEclipticObliquityEpoch2000()
      expect(O).toBe(23.4392911)
    })
  })
})
