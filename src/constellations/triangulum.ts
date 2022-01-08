import { Constellation } from '../types'

export const triangulum: Constellation = {
  name: 'Triangulum',
  meaning: 'the triangle',
  aster: [
    // Mothallahto β Trianguli:
    {
      moveTo: {
        ra: 28.27045,
        dec: 29.578826
      },
      lineTo: {
        ra: 32.3855,
        dec: 34.9873888889
      }
    },
    // β Trianguli to γ Trianguli:
    {
      moveTo: {
        ra: 32.3855,
        dec: 34.9873888889
      },
      lineTo: {
        ra: 34.3285,
        dec: 33.8473333333
      }
    },
    // γ Trianguli to Mothallah:
    {
      moveTo: {
        ra: 34.3285,
        dec: 33.8473333333
      },
      lineTo: {
        ra: 28.27045,
        dec: 29.578826
      }
    }
  ],
  boundaries: [
    {
      ra: 26.744675,
      dec: 25.626335
    },
    {
      ra: 26.76471,
      dec: 28.626282
    },
    {
      ra: 22.86642,
      dec: 28.645439
    },
    {
      ra: 22.897426,
      dec: 33.64537
    },
    {
      ra: 22.910835,
      dec: 35.645336
    },
    {
      ra: 31.85425,
      dec: 35.597138
    },
    {
      ra: 31.871091,
      dec: 37.347084
    },
    {
      ra: 39.679341,
      dec: 37.293156
    },
    {
      ra: 40.434659,
      dec: 37.287388
    },
    {
      ra: 40.402383,
      dec: 34.537514
    },
    {
      ra: 42.666468,
      dec: 34.519676
    },
    {
      ra: 42.62838,
      dec: 31.186502
    },
    {
      ra: 38.103194,
      dec: 31.221315
    },
    {
      ra: 38.070149,
      dec: 27.804764
    },
    {
      ra: 30.530616,
      dec: 27.855019
    },
    {
      ra: 30.513711,
      dec: 25.60507
    },
    {
      ra: 26.744675,
      dec: 25.626335
    }
  ]
}
