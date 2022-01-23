import { describe, expect, it, suite } from 'vitest'

import { convertHorizontalToStereo, convertStereoToHorizontal } from '../src'

suite('@observerly/polaris Projection', () => {
  describe('Horizontal to Stereo conversion', () => {
    it('convertHorizontalToStereo should be defined', () => {
      expect(convertHorizontalToStereo).toBeDefined()
    })
  })

  describe('Stereo to Horizontal conversion', () => {
    it('convertStereoToHorizontal should be defined', () => {
      expect(convertStereoToHorizontal).toBeDefined()
    })
  })
})
