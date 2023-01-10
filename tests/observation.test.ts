import { describe, expect, it, suite } from 'vitest'

import {
  convertEquatorialToHorizontal,
  getAirmass,
  useObservation,
  Observer,
  Observation
} from '../src'

import { betelgeuse, datetime, observer, longitude, latitude } from '.'

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

suite('@observerly/polaris Observation', () => {
  describe('Observation', () => {
    const observer = new Observer({
      datetime,
      longitude,
      latitude,
      elevation: 0
    })

    const observation = new Observation(
      {
        ra: 0,
        dec: 0
      },
      {
        ...observer
      }
    )

    it('should be defined', () => {
      expect(Observation).toBeDefined()
    })

    it('should have the related datetime properties correctly set', () => {
      expect(observation.datetime.toISOString()).toBe(datetime.toISOString())
      expect(observer.JD).toBe(2459348.5)
      expect(observer.MJD).toBe(59348)
      expect(observer.LST).toBe(5.099450799019053)
    })

    it('should have the longitude correctly set', () => {
      expect(observation.longitude).toBe(-155.468094)
    })

    it('should have the latitude correctly set', () => {
      expect(observation.latitude).toBe(19.820611)
    })

    it('should have the elevation correctly set', () => {
      expect(observation.elevation).toBe(0)
    })
  })

  describe('useObservation', () => {
    const observation = useObservation(betelgeuse, {
      datetime,
      longitude,
      latitude,
      elevation: 0
    })

    it('should be defined', () => {
      expect(useObservation).toBeDefined()
    })

    it('should be an instance of Observation', () => {
      expect(observation).toBeInstanceOf(Observation)
    })

    it('should have the related datetime properties correctly set', () => {
      expect(observation.datetime.toISOString()).toBe(datetime.toISOString())
      expect(observation.ra).toBe(88.7929583)
      expect(observation.dec).toBe(7.4070639)
    })

    it('should have the longitude correctly set', () => {
      expect(observation.longitude).toBe(-155.468094)
      expect(observation.alt).toBeCloseTo(72.78539444063765, 1)
      expect(observation.az).toBeCloseTo(134.44877920325155, 1)
    })

    it('should have the latitude correctly set', () => {
      expect(observation.latitude).toBe(19.820611)
      expect(observation.alt).toBeCloseTo(72.78539444063765, 1)
      expect(observation.az).toBeCloseTo(134.44877920325155, 1)
    })

    it('should have the elevation correctly set', () => {
      expect(observation.elevation).toBe(0)
      expect(observation.alt).toBeCloseTo(72.78539444063765, 1)
      expect(observation.az).toBeCloseTo(134.44877920325155, 1)
    })

    it('should react to having the datetime updated', () => {
      observation.datetime = new Date('2021-05-15T00:00:00.000+00:00')
      expect(observation.datetime.toISOString()).not.toBe(datetime.toISOString())
      expect(observation.datetime.toISOString()).toBe('2021-05-15T00:00:00.000Z')
      expect(observation.alt).toBeCloseTo(73.43302554026093, 1)
      expect(observation.az).toBeCloseTo(136.9690338481641, 1)
    })

    it('should react to having the longitude updated', () => {
      observation.longitude = 0
      expect(observation.longitude).toBe(0)
      expect(observation.az).toBe(304.14348753434854)
      expect(observation.alt).toBe(-45.437305916746375)
    })
  })
})
