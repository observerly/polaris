import { describe, expect, it, suite } from 'vitest'

import {
  convertDegreeToHour,
  convertDegreeToRadian,
  convertRadianToDegree,
  getNormalisedDegree
} from '../'

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

  describe('Normalised Degree To Full Rotation', () => {
    it('getNormalisedDegree should be defined', () => {
      expect(getNormalisedDegree).toBeDefined()
    })

    it('getNormalisedDegree should not be applied', () => {
      const degree = getNormalisedDegree(45)
      expect(degree).toBe(45)
    })

    it('getNormalisedDegree should be able to handle negative angles', () => {
      const degree = getNormalisedDegree(-45)
      expect(degree).toBe(315)
    })

    it('getNormalisedDegree should be able to handle large angles', () => {
      const degree = getNormalisedDegree(488)
      expect(degree).toBe(128)
    })

    it('getNormalisedDegree should be able to multiple rotations', () => {
      const degree = getNormalisedDegree(2880)
      expect(degree).toBe(0)
    })
  })

  describe('Convert Degree to Hour', () => {
    it('convertDegreeToHour should be defined', () => {
      expect(convertDegreeToHour).toBeDefined()
    })

    it('convertDegreeToHour should be 24 hours at a full rotation', () => {
      const hr = convertDegreeToHour(360)
      expect(hr).toBe(24)
    })

    it('convertDegreeToHour should be 12 hours at a half rotation', () => {
      const hr = convertDegreeToHour(180)
      expect(hr).toBe(12)
    })

    it('convertDegreeToHour should be 3 hours at a 1/8 rotation', () => {
      const hr = convertDegreeToHour(45)
      expect(hr).toBe(3)
    })
  })
})
