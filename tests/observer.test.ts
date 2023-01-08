import { describe, expect, it, suite } from 'vitest'

import { useObserver, Observer } from '../src'

import { datetime, longitude } from '.'

suite('@observerly/polaris Observer', () => {
  describe('Observer', () => {
    const observer = new Observer({
      datetime,
      longitude,
      latitude: 0,
      elevation: 0
    })

    it('should be defined', () => {
      expect(Observer).toBeDefined()
    })

    it('should have the related datetime properties correctly set', () => {
      expect(observer.datetime.toISOString()).toBe(datetime.toISOString())
      expect(observer.JD).toBe(2459348.5)
      expect(observer.MJD).toBe(59348)
      expect(observer.LST).toBe(5.099450799019053)
    })

    it('should have the longitude correctly set', () => {
      expect(observer.longitude).toBe(-155.468094)
    })

    it('should have the latitude correctly set', () => {
      expect(observer.latitude).toBe(0)
    })

    it('should have the elevation correctly set', () => {
      expect(observer.elevation).toBe(0)
    })
  })

  describe('useObserver', () => {
    const observer = useObserver({
      datetime,
      longitude,
      latitude: 0,
      elevation: 0
    })

    it('should be defined', () => {
      expect(useObserver).toBeDefined()
    })

    it('should be an instance of Observer', () => {
      expect(observer).toBeInstanceOf(Observer)
    })

    it('should have the related datetime properties correctly set', () => {
      expect(observer.datetime.toISOString()).toBe(datetime.toISOString())
      expect(observer.JD).toBe(2459348.5)
      expect(observer.MJD).toBe(59348)
      expect(observer.LST).toBe(5.099450799019053)
    })

    it('should have the longitude correctly set', () => {
      expect(observer.longitude).toBe(-155.468094)
    })

    it('should have the latitude correctly set', () => {
      expect(observer.latitude).toBe(0)
    })

    it('should have the elevation correctly set', () => {
      expect(observer.elevation).toBe(0)
    })

    it('should react to having the datetime updated', () => {
      observer.datetime = new Date('2021-05-15T00:00:00.000+00:00')
      expect(observer.datetime.toISOString()).not.toBe(datetime.toISOString())
      expect(observer.datetime.toISOString()).toBe('2021-05-15T00:00:00.000Z')
      expect(observer.JD).toBe(2459349.5)
      expect(observer.MJD).toBe(59349)
      expect(observer.LST).toBe(5.099450799019053)
    })

    it('should react to having the longitude updated', () => {
      observer.longitude = 0
      expect(observer.longitude).toBe(0)
      expect(observer.LST).not.toBe(5.099450799019053)
      expect(observer.LST).toBe(15.52970022371585)
    })
  })
})
