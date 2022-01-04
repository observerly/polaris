import { describe, expect, it, suite } from 'vitest'

import { convertDegreeToRadian, convertRadianToDegree } from '../'

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

  describe('Radian To Degree Convsersion', () => {
    it('convertRadianToDegree should be defined', () => {
      expect(convertRadianToDegree).toBeDefined()
    })

    it('convertRadianToDegree should be', () => {
      const degree = convertRadianToDegree(Math.PI)
      expect(degree).toBe(180)
    })

    it('convertRadianToDegree should be able to handle large angles', () => {
      const degree = convertRadianToDegree(100.53096491487338)
      expect(degree).toBe(5760)
    })

    it('convertRadianToDegree should be precise', () => {
      const degree = convertRadianToDegree(0.7996924099712819)
      expect(degree).toBe(45.819)
    })
  })
})
