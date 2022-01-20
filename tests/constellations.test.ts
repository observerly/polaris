import { describe, expect, it, suite } from 'vitest'

import { alpheratz, arcturus, betelgeuse, datetime, regulus, vega } from '.'

import { constellations, getConstellation } from '../src'

suite('@observerly/polaris Constellations', () => {
  describe('IAU Constellations', () => {
    it('constellations should be defined', () => {
      expect(constellations).toBeDefined()
    })

    it('constellations should be', () => {
      expect(constellations.length).toBeGreaterThanOrEqual(88)
    })
  })

  describe('Get Constellation from Equatorial Coordinate', () => {
    it('The star Alpheratz should be in the constellation of Andromeda', () => {
      const andromeda = getConstellation(alpheratz, datetime)
      expect(andromeda.name).toBe('Andromeda')
    })

    it('The star Arcturus should be in the constellation of Boötes', () => {
      const bootes = getConstellation(arcturus, datetime)
      expect(bootes.name).toBe('Boötes')
    })

    it('The star Betelgeuse should be in the constellation of Orion', () => {
      const orion = getConstellation(betelgeuse, datetime)
      expect(orion.name).toBe('Orion')
    })

    it('The star Regulus should be in the constellation of Leo', () => {
      const leo = getConstellation(regulus, datetime)
      expect(leo.name).toBe('Leo')
    })

    it('The star Vega should be in the constellation of Lyra', () => {
      const lyra = getConstellation(vega, datetime)
      expect(lyra.name).toBe('Lyra')
    })
  })
})
