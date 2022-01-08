import { Constellation } from '../types'

export const reticulum: Constellation = {
  name: 'Reticulum',
  meaning: 'an eyepiece graticule',
  aster: [
    // α Reticuli to β Reticuli:
    {
      moveTo: {
        ra: 63.6059583333,
        dec: -62.4739722222
      },
      lineTo: {
        ra: 56.048125,
        dec: -64.8070833333
      }
    },
    // β Reticuli to δ Reticuli:
    {
      moveTo: {
        ra: 56.048125,
        dec: -64.8070833333
      },
      lineTo: {
        ra: 59.6864166667,
        dec: -61.4001388889
      }
    },
    // δ Reticuli to ε Reticuli:
    {
      moveTo: {
        ra: 59.6864166667,
        dec: -61.4001388889
      },
      lineTo: {
        ra: 64.1211666667,
        dec: -59.30175
      }
    },
    // ε Reticuli to α Reticuli:
    {
      moveTo: {
        ra: 64.1211666667,
        dec: -59.30175
      },
      lineTo: {
        ra: 63.6059583333,
        dec: -62.4739722222
      }
    }
  ],
  boundaries: [
    {
      ra: 48.36269,
      dec: -67.03582
    },
    {
      ra: 68.794019,
      dec: -67.247925
    },
    {
      ra: 69.274535,
      dec: -58.750664
    },
    {
      ra: 65.55459,
      dec: -58.708855
    },
    {
      ra: 65.650462,
      dec: -56.209385
    },
    {
      ra: 60.692919,
      dec: -56.155586
    },
    {
      ra: 60.797896,
      dec: -52.822811
    },
    {
      ra: 58.318788,
      dec: -52.796844
    },
    {
      ra: 53.365002,
      dec: -52.747078
    },
    {
      ra: 53.236816,
      dec: -57.079784
    },
    {
      ra: 48.791131,
      dec: -57.037785
    },
    {
      ra: 48.36269,
      dec: -67.03582
    }
  ]
}
