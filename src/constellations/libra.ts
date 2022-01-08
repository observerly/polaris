import { Constellation } from '../types'

export const libra: Constellation = {
  name: 'Libra',
  meaning: 'balance',
  aster: [
    // Brachium to Zubenelgenubi:
    {
      moveTo: {
        ra: 226.017567,
        dec: -25.281961
      },
      lineTo: {
        ra: 222.719638,
        dec: -16.041777
      }
    },
    // Zubenelgenubi to Zubeneschamali:
    {
      moveTo: {
        ra: 222.719638,
        dec: -16.041777
      },
      lineTo: {
        ra: 229.251724,
        dec: -9.382914
      }
    },
    // Zubeneschamali to Zubenelhakrabi:
    {
      moveTo: {
        ra: 229.251724,
        dec: -9.382914
      },
      lineTo: {
        ra: 233.881578,
        dec: -14.789536
      }
    },
    // Zubenelhakrabi to ν Lupi:
    {
      moveTo: {
        ra: 233.881578,
        dec: -14.789536
      },
      lineTo: {
        ra: 234.6640833333,
        dec: -29.7776944444
      }
    },
    // Zubenelgenubi to Zubenelhakrabi:
    {
      moveTo: {
        ra: 222.719638,
        dec: -16.041777
      },
      lineTo: {
        ra: 233.881578,
        dec: -14.789536
      }
    }
  ],
  boundaries: [
    {
      ra: 227.853012,
      dec: -0.474289
    },
    {
      ra: 221.603093,
      dec: -0.526939
    },
    {
      ra: 221.667108,
      dec: -8.526685
    },
    {
      ra: 215.408506,
      dec: -8.573134
    },
    {
      ra: 215.513091,
      dec: -22.572775
    },
    {
      ra: 215.53369,
      dec: -25.072702
    },
    {
      ra: 225.576554,
      dec: -24.99511
    },
    {
      ra: 225.63077,
      dec: -29.994879
    },
    {
      ra: 236.92998,
      dec: -29.889616
    },
    {
      ra: 236.813064,
      dec: -20.390202
    },
    {
      ra: 240.571776,
      dec: -20.351618
    },
    {
      ra: 240.437279,
      dec: -8.352324
    },
    {
      ra: 240.386954,
      dec: -3.602587
    },
    {
      ra: 227.881951,
      dec: -3.72416
    },
    {
      ra: 227.853012,
      dec: -0.474289
    }
  ]
}
