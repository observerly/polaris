import { describe, expect, it, suite } from 'vitest'

import { constellations } from '../'

suite('@observerly/polaris Constellations', () => {
  describe('IAU Constellations', () => {
    it('constellations should be defined', () => {
      expect(constellations).toBeDefined()
    })

    it('constellations should be', () => {
      expect(constellations.length).toBeGreaterThanOrEqual(88)
    })
  })
})
