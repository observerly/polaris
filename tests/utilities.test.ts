import { describe, expect, it, suite } from 'vitest'

import { alpheratz, betelgeuse, spica } from '.'

import {
  convertDegreeToDMS,
  convertDegreeToHMS,
  convertDegreeToHour,
  convertDegreeToRadian,
  convertRadianToDegree,
  getNormalisedDegree,
  normaliseStellarMagnitude,
  parseDegreeToDMSHumanised,
  parseDegreeToHMSHumanised
} from '../src'

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

  describe('Convert Degree to Hours, Minutes and Seconds', () => {
    it('convertDegreeToHMS to be defined', () => {
      expect(convertDegreeToHMS).toBeDefined()
    })

    it('convertDegreeToHMS to return the correct value for Betelgeuse', () => {
      const { hrs, min, sec } = convertDegreeToHMS(betelgeuse.ra)
      expect(hrs).toBe(5)
      expect(min).toBe(55)
      expect(sec).toBe(10.31)
    })

    it('convertDegreeToHMS to return the correct value for a negative Betelgeuse', () => {
      const { hrs, min, sec } = convertDegreeToHMS(-betelgeuse.ra)
      expect(hrs).toBe(18)
      expect(min).toBe(4)
      expect(sec).toBe(49.69)
    })
  })

  describe('Parse Degree to Hours, Minutes and Seconds Humanised', () => {
    it('parseDegreeToHMSHumanised to be defined', () => {
      expect(parseDegreeToHMSHumanised).toBeDefined()
    })

    it('parseDegreeToHMSHumanised to return the correct value for Betelgeuse', () => {
      const humanised = parseDegreeToHMSHumanised(betelgeuse.ra)
      expect(humanised).toBe('05ʰ 55ᵐ 10.31ˢ')
    })

    it('parseDegreeToHMSHumanised to return the correct value for Betelgeuse', () => {
      const humanised = parseDegreeToHMSHumanised(alpheratz.ra)
      expect(humanised).toBe('00ʰ 08ᵐ 23.26ˢ')
    })
  })

  describe('Convert Degree to Degree, Minutes and  Seconds', () => {
    it('convertDegreeToDMS to be defined', () => {
      expect(convertDegreeToDMS).toBeDefined()
    })

    it('convertDegreeToDMS to return the correct value for Betelgeuse', () => {
      const { deg, min, sec } = convertDegreeToDMS(betelgeuse.dec)
      expect(deg).toBe(7)
      expect(min).toBe(24)
      expect(sec).toBe(25.43)
    })

    it('convertDegreeToDMS to return the correct value for Spica', () => {
      const { deg, min, sec } = convertDegreeToDMS(spica.dec)
      expect(deg).toBe(-11)
      expect(min).toBe(9)
      expect(sec).toBe(41.04)
    })
  })

  describe('Parse Degree to Degree, Minutes and Seconds Humanised', () => {
    it('parseDegreeToDMSHumanised to be defined', () => {
      expect(parseDegreeToDMSHumanised).toBeDefined()
    })

    it('parseDegreeToHMSHumanised to return the correct value for Betelgeuse', () => {
      const humanised = parseDegreeToDMSHumanised(betelgeuse.dec)
      expect(humanised).toBe('+07° 24\' 25.43"')
    })

    it('parseDegreeToDMSHumanised to return the correct value for Spica', () => {
      const humanised = parseDegreeToDMSHumanised(spica.dec)
      expect(humanised).toBe('-11° 09\' 41.04"')
    })

    it('parseDegreeToDMSHumanised to return the correct value for Spica', () => {
      const humanised = parseDegreeToDMSHumanised(-2)
      expect(humanised).toBe('-02° 00\' 00"')
    })
  })

  describe('Normalise Stellar Magntidue', () => {
    it('normaliseStellarMagnitude should be defined', () => {
      expect(normaliseStellarMagnitude).toBeDefined()
    })

    it('normaliseStellarMagnitude should return the correct value', () => {
      const magnitude = normaliseStellarMagnitude(5, 6)
      expect(magnitude).toBeCloseTo(1.333333)
    })

    it('normaliseStellarMagnitude should return the correct value', () => {
      const magnitude = normaliseStellarMagnitude(0, 6)
      expect(magnitude).toBeCloseTo(4.666666)
    })

    it('normaliseStellarMagnitude should return the correct value', () => {
      const magnitude = normaliseStellarMagnitude(-1, 6)
      expect(magnitude).toBeCloseTo(5.333333)
    })
  })
})
