import { suite, describe, expect, it } from 'vitest'

import { NUMBER_OF_DAYS_IN_CENTURY, J1900, J1970, J2000 } from '../src/constants'

suite('Constants', () => {
  describe('@observerly/celestia Constants', () => {
    it('The number of days in a century should be', () => {
      expect(NUMBER_OF_DAYS_IN_CENTURY).toBe(36525)
    })

    it('The number of days since start of Julian Epoch and 1900 should be', () => {
      expect(J1900).toBe(2415020.0)
    })

    it('The number of days since start of Julian Epoch and 1970 should be', () => {
      expect(J1970).toBe(2440587.5)
    })

    it('The number of days since start of Julian Epoch and 2000 should be', () => {
      expect(J2000).toBe(2451545.0)
    })
  })
})
