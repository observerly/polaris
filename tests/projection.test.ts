import { describe, expect, it, suite } from 'vitest'

import { convertHorizontalToStereo } from '../src'

suite('@observerly/polaris Projection', () => {
  describe('Horizontal to Stereo conversion', () => {
    it('convertHorizontalToStereo should be defined', () => {
      expect(convertHorizontalToStereo).toBeDefined()
    })
  })
})
