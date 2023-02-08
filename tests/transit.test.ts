import { describe, expect, it, suite } from 'vitest'

import { betelgeuse, datetime, observer } from '.'

import { getObjectTransit } from '../src'

suite('@observerly/polaris Transit', () => {
  describe('Object Transit ', () => {
    it('getObjectTransit should be defined', () => {
      expect(getObjectTransit).toBeDefined()
    })

    it('getObjectTransit should return the correct transit times for Betelgeuse', () => {
      const { rise, set } = getObjectTransit(datetime, betelgeuse, observer)

      expect(rise).toBeDefined()
      expect(set).toBeDefined()

      if (rise) {
        expect(
          Math.abs(new Date(rise).getTime() - new Date('2021-05-14T18:35:24.623Z').getTime())
        ).toBeLessThan(30000)
      }

      if (set) {
        expect(
          Math.abs(new Date(set).getTime() - new Date('2021-05-14T06:58:57.992Z').getTime())
        ).toBeLessThan(30000)
      }
    })
  })
})
