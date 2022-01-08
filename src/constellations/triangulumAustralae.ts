import { Constellation } from '../types'

export const triangulumAustralae: Constellation = {
  name: 'Triangulum Australe',
  meaning: 'the southern triangle',
  aster: [
    // Atria to β Trianguli Australis:
    {
      moveTo: {
        ra: 252.166229,
        dec: -69.027712
      },
      lineTo: {
        ra: 238.7867083333,
        dec: -63.42975
      }
    },
    // β Trianguli Australis to γ Trianguli Australis:
    {
      moveTo: {
        ra: 238.7867083333,
        dec: -63.42975
      },
      lineTo: {
        ra: 229.727875,
        dec: -68.6794722222
      }
    },
    // γ Trianguli Australis to Atria:
    {
      moveTo: {
        ra: 229.727875,
        dec: -68.6794722222
      },
      lineTo: {
        ra: 252.166229,
        dec: -69.027712
      }
    }
  ],
  boundaries: [
    {
      ra: 224.166441,
      dec: -70.511543
    },
    {
      ra: 224.003634,
      dec: -68.012207
    },
    {
      ra: 226.557126,
      dec: -67.990929
    },
    {
      ra: 226.353535,
      dec: -64.075127
    },
    {
      ra: 230.166579,
      dec: -64.041565
    },
    {
      ra: 230.05457,
      dec: -61.458748
    },
    {
      ra: 232.589765,
      dec: -61.435307
    },
    {
      ra: 232.549868,
      dec: -60.435493
    },
    {
      ra: 249.034681,
      dec: -60.264458
    },
    {
      ra: 249.08163,
      dec: -61.264195
    },
    {
      ra: 251.537847,
      dec: -61.236458
    },
    {
      ra: 251.676321,
      dec: -63.818996
    },
    {
      ra: 254.195137,
      dec: -63.790093
    },
    {
      ra: 254.283515,
      dec: -65.206253
    },
    {
      ra: 255.542393,
      dec: -65.191643
    },
    {
      ra: 255.724983,
      dec: -67.690582
    },
    {
      ra: 258.242482,
      dec: -67.661087
    },
    {
      ra: 258.470679,
      dec: -70.159744
    },
    {
      ra: 224.166441,
      dec: -70.511543
    }
  ]
}
