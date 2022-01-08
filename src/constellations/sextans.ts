import { Constellation } from '../types'

export const sextans: Constellation = {
  name: 'Sextans',
  meaning: 'the sextant',
  aster: [
    // α Sextantis to β Sextantis:
    {
      moveTo: {
        ra: 151.9845833333,
        dec: -0.3716388889
      },
      lineTo: {
        ra: 157.5729166667,
        dec: -0.6369722222
      }
    }
  ],
  boundaries: [
    {
      ra: 145.348906,
      dec: -0.567059
    },
    {
      ra: 145.398417,
      dec: 6.432767
    },
    {
      ra: 162.87602,
      dec: 6.33773
    },
    {
      ra: 162.849712,
      dec: -0.662221
    },
    {
      ra: 162.827139,
      dec: -6.662179
    },
    {
      ra: 162.807914,
      dec: -11.662143
    },
    {
      ra: 145.270272,
      dec: -11.566781
    },
    {
      ra: 145.348906,
      dec: -0.567059
    }
  ]
}
