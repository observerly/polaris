import { describe, expect, it, suite } from 'vitest'

import { betelgeuse, datetime, observer } from '.'

import {
  convertEclipticToEquatorial,
  convertEquatorialToHorizontal,
  convertHorizontalToEquatorial,
  getLunarEclipticPosition,
  precessEquatorialCoordinate
} from '../'

suite('@observerly/polaris Coodinate', () => {
  describe('Equatorial to Horizontal conversion', () => {
    it('convertEclipticToEquatorial should be defined', () => {
      expect(convertEclipticToEquatorial).toBeDefined()
    })

    it('convertEclipticToEquatorial should return the correct Equatorial coordinate of the Moon', () => {
      const { ra, dec } = convertEclipticToEquatorial(getLunarEclipticPosition(datetime), datetime)
      expect(ra).toBeCloseTo(76.1983325)
      expect(dec).toBeCloseTo(23.447219)
    })
  })

  describe('Equatorial to Horizontal conversion', () => {
    it('convertEquatorialToHorizontal should be defined', () => {
      expect(convertEquatorialToHorizontal).toBeDefined()
    })

    it('convertEquatorialToHorizontal should return the correct Horizontal coordinate of the star Betelgeuse', () => {
      // Let's find where Betelgeuse will be on the datetime above:
      const { alt, az } = convertEquatorialToHorizontal(betelgeuse, observer, datetime)

      expect(alt).toBeCloseTo(72.78539444063765, 1)
      expect(az).toBeCloseTo(134.44877920325155, 1)
    })
  })

  describe('Horizontal to Equatorial conversion', () => {
    it('convertHorizontalToEquatorial should be defined', () => {
      expect(convertHorizontalToEquatorial).toBeDefined()
    })

    it('convertEquatorialToHorizontal should return the correct equatorial coordinate of the star Betelgeuse', () => {
      const { alt, az } = convertEquatorialToHorizontal(betelgeuse, observer, datetime)

      // Let's find where Betelgeuse will be on the datetime above:
      const { ra, dec } = convertHorizontalToEquatorial(
        {
          alt,
          az
        },
        observer,
        datetime
      )

      expect(ra).toBeCloseTo(betelgeuse.ra, 1)
      expect(dec).toBeCloseTo(betelgeuse.dec, 1)
    })
  })

  describe('Precess Equatorial Coordinate', () => {
    it('precessEquatorialCoordinate should be defined', () => {
      expect(precessEquatorialCoordinate).toBeDefined()
    })

    const { ra, dec } = precessEquatorialCoordinate(betelgeuse, datetime.getFullYear(), 1875)
    expect(ra).toBeCloseTo(86.81801)
    expect(dec).toBeCloseTo(7.3759358)
  })
})
