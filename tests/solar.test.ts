import { describe, expect, it, suite } from 'vitest'

import {
  getSolarApparentLongitude,
  getSolarDeclination,
  getSolarEcliptic,
  getSolarEclipticLongitude,
  getSolarEquationOfCenter,
  getSolarEquatorialPosition,
  getSolarGeometricMeanLongitude,
  getSolarHourAngle,
  getSolarMeanAnomaly,
  getSolarMeanObliquity,
  getSolarMeanTime,
  getSolarNutation,
  getSolarRadialDistance,
  getSolarTransitJulianDate,
  getSolarTrueAnomaly,
  getSolarTrueGeometricLongitude,
  getSun,
  getNumberOfJulianCenturiesSinceEpoch2000,
  getNumberOfJulianDaysSinceEpoch2000,
  getEarthEccentricity,
  getSolarRiseSet
} from '../src'

import { datetime, longitude, latitude, elevation } from '.'

suite('@observerly/polaris Solar', () => {
  describe('Solar Mean Anomaly', () => {
    it('getSolarMeanAnomaly should be defined', () => {
      expect(getSolarMeanAnomaly).toBeDefined()
    })

    it('getSolarMeanAnomaly should be', () => {
      // For testing we need to specify a date because most calculations are
      // differential w.r.t a time component. We set it to the date provided
      // on p.342 of Meeus, Jean. 1991. Astronomical algorithms.Richmond,
      // Va: Willmann - Bell.:
      const d = new Date('1992-04-12T00:00:00.000+00:00')

      const T = getNumberOfJulianCenturiesSinceEpoch2000(d)

      const S = getSolarMeanAnomaly(T)
      expect(S).toBeCloseTo(97.643514)
    })
  })

  describe('Solar Mean Obliquity', () => {
    it('getSolarMeanObliquity should be defined', () => {
      expect(getSolarMeanObliquity).toBeDefined()
    })

    it('getSolarMeanObliquity should be', () => {
      const T = getNumberOfJulianCenturiesSinceEpoch2000(datetime)

      const O = getSolarMeanObliquity(T)
      expect(O).toBeCloseTo(23.43651)
    })
  })

  describe('Solar Nutation', () => {
    it('getSolarNutation should be defined', () => {
      expect(getSolarNutation).toBeDefined()
    })

    it('getSolarNutation should be', () => {
      // For testing we need to specify a date because most calculations are
      // differential w.r.t a time component. We set it to the date provided
      // on p.342 of Meeus, Jean. 1991. Astronomical algorithms.Richmond,
      // Va: Willmann - Bell.:
      const d = new Date('1992-10-13T00:00:00.000+00:00')

      const T = getNumberOfJulianCenturiesSinceEpoch2000(d)

      const Ω = getSolarNutation(T)

      expect(Ω).toBeCloseTo(264.652582)
    })
  })

  describe('Solar Geometric Mean Longitude', () => {
    it('getSolarGeometricMeanLongitude should be defined', () => {
      expect(getSolarGeometricMeanLongitude).toBeDefined()
    })

    it('getSolarGeometricMeanLongitude should be defined', () => {
      const T = getNumberOfJulianCenturiesSinceEpoch2000(datetime)

      const L = getSolarGeometricMeanLongitude(T)
      expect(L).toBeCloseTo(51.966, 1)
    })
  })

  describe('Solar True Geometric Longitude', () => {
    it('getSolarTrueGeometricLongitude should be defined', () => {
      expect(getSolarGeometricMeanLongitude).toBeDefined()
    })

    it('getSolarTrueGeometricLongitude should be defined', () => {
      // For testing we need to specify a date because most calculations are
      // differential w.r.t a time component. We set it to the date provided
      // on p.165 of Meeus, Jean. 1991. Astronomical algorithms.Richmond,
      // Va: Willmann - Bell.:
      const d = new Date('1992-10-13T00:00:00.000+00:00')

      const T = getNumberOfJulianCenturiesSinceEpoch2000(d)

      const M = getSolarMeanAnomaly(T)

      const C = getSolarEquationOfCenter(T, M)

      const L = getSolarGeometricMeanLongitude(T)

      const O = getSolarTrueGeometricLongitude(L, C)

      expect(O).toBeCloseTo(199.90988)
    })
  })

  describe('Solar Equation of Center', () => {
    it('getSolarEquationOfCenter should be defined', () => {
      expect(getSolarEquationOfCenter).toBeDefined()
    })

    it('getSolarEquationOfCenter should be', () => {
      // For testing we need to specify a date because most calculations are
      // differential w.r.t a time component. We set it to the date provided
      // on p.165 of Meeus, Jean. 1991. Astronomical algorithms.Richmond,
      // Va: Willmann - Bell.:
      const d = new Date('1992-10-13T00:00:00.000+00:00')

      const T = getNumberOfJulianCenturiesSinceEpoch2000(d)

      const M = getSolarMeanAnomaly(T)

      const C = getSolarEquationOfCenter(T, M)

      expect(C).toBeCloseTo(-1.897323847)
    })
  })

  describe('Solar Radial Distance', () => {
    it('getSolarRadialDistance should be defined', () => {
      expect(getSolarRadialDistance).toBeDefined()
    })

    it('getSolarRadialDistance should be', () => {
      // For testing we need to specify a date because most calculations are
      // differential w.r.t a time component. We set it to the date provided
      // on p.165 of Meeus, Jean. 1991. Astronomical algorithms.Richmond,
      // Va: Willmann - Bell.:
      const d = new Date('1992-10-13T00:00:00.000+00:00')

      const T = getNumberOfJulianCenturiesSinceEpoch2000(d)

      const M = getSolarMeanAnomaly(T)

      const C = getSolarEquationOfCenter(T, M)

      const e = getEarthEccentricity(T)

      const ν = getSolarTrueAnomaly(M, C)

      const R = getSolarRadialDistance(e, ν)

      expect(R).toBeCloseTo(0.9976619)
    })
  })

  describe('Solar Apparent Longitude', () => {
    it('getSolarApparentLongitude', () => {
      expect(getSolarApparentLongitude).toBeDefined()
    })

    it('getSolarApparentLongitude should be', () => {
      // For testing we need to specify a date because most calculations are
      // differential w.r.t a time component. We set it to the date provided
      // on p.165 of Meeus, Jean. 1991. Astronomical algorithms.Richmond,
      // Va: Willmann - Bell.:
      const d = new Date('1992-10-13T00:00:00.000+00:00')

      // First we need to calculate the Ephemeris Time:
      const T = getNumberOfJulianCenturiesSinceEpoch2000(d)

      // Correction for nutation (a rocking, swaying, or nodding motion in the
      // axis of rotation of a largely axially symmetric object) and aberration
      // (an apparent motion of celestial objects about their true positions,
      // dependent on the velocity of the observer).
      const Ω = getSolarNutation(T)

      const M = getSolarMeanAnomaly(T)

      const C = getSolarEquationOfCenter(T, M)

      const L = getSolarGeometricMeanLongitude(T)

      const l = getSolarTrueGeometricLongitude(L, C)

      const λ = getSolarApparentLongitude(l, Ω)

      expect(λ).toBeCloseTo(199.90895)
    })
  })

  describe('Solar Equatorial Position', () => {
    it('getSolarEquatorialPosition', () => {
      expect(getSolarEquatorialPosition).toBeDefined()
    })

    it('getSolarEquatorialPosition should be', () => {
      // For testing we need to specify a date because most calculations are
      // differential w.r.t a time component. We set it to the date provided
      // on p.165 of Meeus, Jean. 1991. Astronomical algorithms.Richmond,
      // Va: Willmann - Bell.:
      const d = new Date('1992-10-13T00:00:00.000+00:00')

      const { ra, dec } = getSolarEquatorialPosition(d)

      expect(ra).toBeCloseTo(198.38083)
      expect(dec).toBeCloseTo(-7.78507)
    })
  })

  describe('Solar Ecliptic Plane', () => {
    it('getSolarEcliptic should be defined', function () {
      expect(getSolarEcliptic).toBeDefined()
    })

    it('getSolarEcliptic should have 365 days of length', function () {
      const ecliptic = getSolarEcliptic(datetime)
      expect(ecliptic.length).toBe(365)
    })
  })

  describe('The Sun', () => {
    it('getSun should be defined', () => {
      expect(getSun).toBeDefined()
    })

    it('getSun should return the correct equatorial coordinate for the given date', () => {
      // For testing we need to specify a date because most calculations are
      // differential w.r.t a time component. We set it to the date provided
      // on p.165 of Meeus, Jean. 1991. Astronomical algorithms.Richmond,
      // Va: Willmann - Bell.:
      const d = new Date('1992-10-13T00:00:00.000+00:00')

      const { ra, dec } = getSun(d)

      expect(ra).toBeCloseTo(198.38083)
      expect(dec).toBeCloseTo(-7.78507)
    })
  })

  describe('Solar Mean Time', () => {
    it('getSolarMeanTime should be defined', () => {
      expect(getSolarMeanTime).toBeDefined()
    })

    it('getSolarMeanTime should be correct for the given datetime and observer longitude', () => {
      const meanTime = getSolarMeanTime(datetime, longitude)
      expect(meanTime).toBeCloseTo(7804.431855816667)
    })
  })

  describe('Solar Ecliptic Longitude', () => {
    it('getSolarEclipticLongitude should be defined', () => {
      expect(getSolarEclipticLongitude).toBeDefined()
    })

    it('getSolarEclipticLongitude should be correct for the given datetime and observer longitude', () => {
      const datetime = new Date(1992, 3, 12, 0, 0, 0, 0)

      const T = getNumberOfJulianCenturiesSinceEpoch2000(datetime)

      const M = getSolarMeanAnomaly(T)

      const C = getSolarEquationOfCenter(T, M)

      const eclipticLongitude = getSolarEclipticLongitude(M, C)
      expect(eclipticLongitude).toBeCloseTo(22.432276, 1)
    })
  })

  describe('Solar Declination', () => {
    it('getSolarDeclination should be defined', () => {
      expect(getSolarDeclination).toBeDefined()
    })

    it('getSolarDeclination should be correct for the given datetime and observer longitude', () => {
      const datetime = new Date(1992, 3, 12, 0, 0, 0, 0)

      const T = getNumberOfJulianCenturiesSinceEpoch2000(datetime)

      const M = getSolarMeanAnomaly(T)

      const C = getSolarEquationOfCenter(T, M)

      const λ = getSolarEclipticLongitude(M, C)

      const δ = getSolarDeclination(λ)

      expect(δ).toBeCloseTo(8.730823, 1)
    })
  })

  describe('Solar Hour Angle', () => {
    it('getSolarHourAngle should be defined', () => {
      expect(getSolarHourAngle).toBeDefined()
    })

    it('getSolarHourAngle should be correct for the given datetime and observer longitude', () => {
      const datetime = new Date(1992, 3, 12, 0, 0, 0, 0)

      const T = getNumberOfJulianCenturiesSinceEpoch2000(datetime)

      const M = getSolarMeanAnomaly(T)

      const C = getSolarEquationOfCenter(T, M)

      const λ = getSolarEclipticLongitude(M, C)

      const δ = getSolarDeclination(λ)

      const ha = getSolarHourAngle(δ, 0, latitude, elevation)

      expect(ha).toBeCloseTo(93.973461, 1)
    })
  })

  describe('Solar Transit Julian Date', () => {
    it('getSolarTransitJulianDate should be defined', () => {
      expect(getSolarTransitJulianDate).toBeDefined()
    })

    it('getSolarTransitJulianDate should be correct for the given datetime and observer longitude', () => {
      const datetime = new Date(1992, 3, 12, 0, 0, 0, 0)

      const T = getNumberOfJulianCenturiesSinceEpoch2000(datetime)

      const J = getSolarMeanTime(datetime, longitude)

      const M = getSolarMeanAnomaly(T)

      const C = getSolarEquationOfCenter(T, M)

      const λ = getSolarEclipticLongitude(M, C)

      const Jde = getSolarTransitJulianDate(J, M, λ)

      expect(Jde).toBeCloseTo(2448725.432069, 1)
    })
  })

  describe('Solar Rise & Set', () => {
    it('getSolarRiseSet should be defined', () => {
      expect(getSolarRiseSet).toBeDefined()
    })

    it('getSolarRiseSet should be correct for the given datetime and observer longitude', () => {
      const sun = getSolarRiseSet(datetime, 0, { longitude, latitude }, 0)

      expect(sun.rise).toStrictEqual(new Date('2021-05-14T15:55:14.350Z'))
      expect(sun.set).toStrictEqual(new Date('2021-05-15T04:59:18.401Z'))
      expect(sun.transit).toStrictEqual(new Date('2021-05-14T22:27:16.375Z'))
    })
  })
})
