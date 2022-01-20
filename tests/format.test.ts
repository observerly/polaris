import { describe, expect, it, suite } from 'vitest'

import { betelgeuse } from '.'

import { convertDegreesToHMS } from '../src'

suite('@observerly/polaris Format', () => {
  describe('Degrees To HMS', () => {
    it('convertDegreesToHMS should be defined', () => {
      expect(convertDegreesToHMS).toBeDefined()
    })

    it('convertDegreesToHMS for the Right Asencsion of the star Betelgeuse should be', () => {
      const { hrs, min, sec } = convertDegreesToHMS(betelgeuse.ra)

      expect(hrs).toBe(5)
      expect(min).toBe(55)
      expect(sec).toBe(10.31)
    })
  })
})
