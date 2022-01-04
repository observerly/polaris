import { describe, expect, it, suite } from 'vitest'

import { convertDegreeToRadian } from '../'

suite('@observerly/polaris Utilities', () => {
  describe('Degree to Radian Convserion', () => {
    it('convertDegreeToRadian should be defined', () => {
      expect(convertDegreeToRadian).toBeDefined()
    })

    it('convertDegreeToRadian should be', () => {
      const radian = convertDegreeToRadian(180)
      expect(radian).toBe(3.141592653589793)
    })

    it('convertDegreeToRadian should be able to handle large angles', () => {
      const radian = convertDegreeToRadian(5760)
      expect(radian).toBe(100.53096491487338)
    })

    it('convertDegreeToRadian should be precise', () => {
      const radian = convertDegreeToRadian(45.819)
      expect(radian).toBe(0.7996924099712819)
    })
  })
})
