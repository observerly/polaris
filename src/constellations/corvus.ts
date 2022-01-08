import { Constellation } from '../types'

export const corvus: Constellation = {
  name: 'Corvus',
  meaning: 'the crow',
  aster: [
    // Alchiba to ε Corvi:
    {
      moveTo: {
        ra: 182.103402,
        dec: -24.728875
      },
      lineTo: {
        ra: 182.531375,
        dec: -22.6198055556
      }
    },
    // ε Corvi to Gienah:
    {
      moveTo: {
        ra: 182.531375,
        dec: -22.6198055556
      },
      lineTo: {
        ra: 183.951543,
        dec: -17.541929
      }
    },
    // Gienah to Algorab:
    {
      moveTo: {
        ra: 183.951543,
        dec: -17.541929
      },
      lineTo: {
        ra: 187.466063,
        dec: -16.515431
      }
    },
    // Algorab to β Corvi:
    {
      moveTo: {
        ra: 187.466063,
        dec: -16.515431
      },
      lineTo: {
        ra: 188.59681,
        dec: -23.396759
      }
    },
    // β Corvi to ε Corvi:
    {
      moveTo: {
        ra: 188.59681,
        dec: -23.396759
      },
      lineTo: {
        ra: 182.531375,
        dec: -22.6198055556
      }
    }
  ],
  boundaries: [
    {
      ra: 194.133052,
      dec: -11.677388
    },
    {
      ra: 179.09676,
      dec: -11.695797
    },
    {
      ra: 179.09131,
      dec: -25.195795
    },
    {
      ra: 190.404525,
      dec: -25.186401
    },
    {
      ra: 190.398503,
      dec: -22.686409
    },
    {
      ra: 194.16687,
      dec: -22.677342
    },
    {
      ra: 194.133052,
      dec: -11.677388
    }
  ]
}
