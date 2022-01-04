import { describe, expect, it, suite } from 'vitest'

import { betelgeuse, datetime, observer } from '.'

import { convertEquatorialToHorizontal } from '../'

suite('@observerly/polaris Coodinate', () => {
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
})
