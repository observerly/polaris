import { describe, expect, it, suite } from 'vitest'

import { arcturus, betelgeuse, datetime, denebola, longitude, observer, spica } from '.'

import {
  getAngularSeparation,
  getEclipticObliquity,
  getEclipticObliquityCorrected,
  getEclipticObliquityEpoch2000,
  getEquatorialCoordinateProperMotionCorrected,
  getHourAngle,
  getOrthodromicAngluarDistance,
  getParallacticAngle,
  getLocalSiderealTime,
  getNumberOfJulianCenturiesSinceEpoch2000,
  getSolarNutation
} from '../src'

import { J2000 } from '../src/epoch/constants'

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

    it('getEquatorialCoordinateProperMotionCorrected should be defined', () => {
      expect(getEquatorialCoordinateProperMotionCorrected).toBeDefined()
    })

    it('getEquatorialCoordinateProperMotionCorrected should apply the correct proper motion', () => {
      const equatorialCoordinate = getEquatorialCoordinateProperMotionCorrected(
        datetime,
        betelgeuse,
        { ra: 7.65e-6, dec: 3.13889e-6 },
        J2000
      )

      expect(equatorialCoordinate.ra).not.toBe(betelgeuse.ra)
      expect(equatorialCoordinate.ra).toBeCloseTo(88.79312)

      expect(equatorialCoordinate.dec).not.toBe(betelgeuse.dec)
      expect(equatorialCoordinate.dec).toBeCloseTo(7.407131)
    })

    it('getParallacticAngle should be defined', () => {
      expect(getParallacticAngle).toBeDefined()
    })

    it('getParallacticAngle should be', () => {
      const q = getParallacticAngle(betelgeuse, observer, datetime)
      expect(q).toBeCloseTo(-42.6281265)
    })
  })

  describe('getAngularSeparation', () => {
    it('should be defined', () => {
      expect(getAngularSeparation).toBeDefined()
    })

    it('should be an angular separation of approximately 32 degrees between Arcturus and Spica', () => {
      const separation = getAngularSeparation(arcturus, spica)
      expect(separation).toBeCloseTo(32.793027)
    })

    it('should be an angular separation of approximately 35 degrees between Spica and Denebola', () => {
      const separation = getAngularSeparation(spica, denebola)
      expect(separation).toBeCloseTo(35.064334)
    })

    it('should be an angular separation of approximately 35 degrees between Denebola and Arcturus', () => {
      const separation = getAngularSeparation(denebola, arcturus)
      expect(separation).toBeCloseTo(35.309668)
    })
  })

  describe('getOrthodromicAngluarDistance', () => {
    it('getOrthodromicAngluarDistance should be defined', () => {
      expect(getOrthodromicAngluarDistance).toBeDefined()
    })

    it('getOrthodromicAngluarDistance should be', () => {
      const d = getOrthodromicAngluarDistance(arcturus, spica)
      expect(d).toBeCloseTo(32.793027)
    })
  })
})
