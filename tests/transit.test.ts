import { describe, expect, it, suite } from 'vitest'

import { betelgeuse, datetime, observer } from '.'

import { getDoesObjectRiseOrSet, getObjectTransit, isAboveHorizon } from '../src'

suite('@observerly/polaris Transit', () => {
  describe('Does Object Rise or Set', () => {
    it('getDoesObjectRiseOrSet should be defined', () => {
      expect(getDoesObjectRiseOrSet).toBeDefined()
    })

    it('getDoesObjectRiseOrSet should return true for Betelgeuse for a high latitude', () => {
      const doesRiseOrSet = getDoesObjectRiseOrSet(betelgeuse, observer.latitude)
      expect(doesRiseOrSet).toStrictEqual({
        Ar: 0.13703602843777568,
        H1: 0.04685668397579211
      })
    })

    it('getDoesObjectRiseOrSet should return false for Betelgeuse for a low latitude', () => {
      // The object never rises or sets for the observer:
      const doesRiseOrSet = getDoesObjectRiseOrSet(
        {
          ra: betelgeuse.ra,
          dec: 80
        },
        -45
      )
      expect(doesRiseOrSet).toBe(false)
    })

    it('getDoesObjectRiseOrSet should return false for Betelgeuse for a high latitude', () => {
      // The object is always above the horizon for the observer:
      const doesRiseOrSet = getDoesObjectRiseOrSet(betelgeuse, 80)
      expect(doesRiseOrSet).toStrictEqual({
        Ar: 0.7424083500051002,
        H1: 0.7372819131688116
      })
    })
  })

  describe('Object Transit ', () => {
    it('getObjectTransit should be defined', () => {
      expect(getObjectTransit).toBeDefined()
    })

    it('getObjectTransit should return the correct transit times for Betelgeuse', () => {
      const { rise, set } = getObjectTransit(datetime, betelgeuse, observer)

      expect(rise).toBeDefined()
      expect(set).toBeDefined()

      if (rise) {
        expect(
          Math.abs(new Date(rise).getTime() - new Date('2021-05-14T18:35:24.623Z').getTime())
        ).toBeLessThan(30000)
      }

      if (set) {
        expect(
          Math.abs(new Date(set).getTime() - new Date('2021-05-14T06:58:57.992Z').getTime())
        ).toBeLessThan(30000)
      }
    })
  })

  describe('Is Object Above Horizon', () => {
    it('isAboveHorizon should be defined', () => {
      expect(isAboveHorizon).toBeDefined()
    })

    it('Betelgeuse will never be above to horizon for an observer in the Northern Hemisphere during the summer at Night Time', () => {
      const isAbove = isAboveHorizon(
        datetime,
        betelgeuse,
        {
          latitude: 49.965108,
          longitude: -6.2903662
        },
        {
          start: new Date('2021-06-01T00:00:00.000Z'),
          end: new Date('2021-06-01T04:00:00.000Z')
        }
      )
      expect(isAbove).toBe(false)
    })

    it('Betelgeuse will be above to horizon for an observer in the Northern Hemisphere during the winter at Night Time', () => {
      const isAbove = isAboveHorizon(
        datetime,
        betelgeuse,
        {
          latitude: 49.965108,
          longitude: -6.2903662
        },
        {
          start: new Date('2021-12-01T00:00:00.000Z'),
          end: new Date('2021-12-01T04:00:00.000Z')
        }
      )
      expect(isAbove).toBe(true)
    })
  })
})
