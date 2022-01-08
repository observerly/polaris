import { Constellation } from '../types'

export const coronaBorealis: Constellation = {
  name: 'Corona Borealis',
  meaning: 'northern crown',
  aster: [
    // θ Coronae Borealis to Nusakan:
    {
      moveTo: {
        ra: 233.2325,
        dec: 31.3591666667
      },
      lineTo: {
        ra: 231.957211,
        dec: 29.105699
      }
    },
    // Nusakan to Alphecca:
    {
      moveTo: {
        ra: 231.957211,
        dec: 29.105699
      },
      lineTo: {
        ra: 233.67195,
        dec: 26.714693
      }
    },
    // Alphecca to γ Coronae Borealis:
    {
      moveTo: {
        ra: 233.67195,
        dec: 26.714693
      },
      lineTo: {
        ra: 235.686,
        dec: 26.2955277778
      }
    },
    // γ Coronae Borealis to δ Coronae Borealis:
    {
      moveTo: {
        ra: 235.686,
        dec: 26.2955277778
      },
      lineTo: {
        ra: 237.39875,
        dec: 26.0685555556
      }
    },
    // δ Coronae Borealis to ε Coronae Borealis:
    {
      moveTo: {
        ra: 237.39875,
        dec: 26.0685555556
      },
      lineTo: {
        ra: 239.3970833333,
        dec: 26.8780277778
      }
    },
    // ε Coronae Borealis to ι Coronae Borealis:
    {
      moveTo: {
        ra: 239.3970833333,
        dec: 26.8780277778
      },
      lineTo: {
        ra: 240.3607916667,
        dec: 29.8510833333
      }
    }
  ],
  boundaries: [
    {
      ra: 229.099516,
      dec: 25.538057
    },
    {
      ra: 229.015919,
      dec: 32.537678
    },
    {
      ra: 232.746978,
      dec: 32.572613
    },
    {
      ra: 232.643652,
      dec: 39.572113
    },
    {
      ra: 237.365427,
      dec: 39.618908
    },
    {
      ra: 246.071949,
      dec: 39.71172
    },
    {
      ra: 246.279803,
      dec: 26.712872
    },
    {
      ra: 243.786706,
      dec: 26.685524
    },
    {
      ra: 243.800182,
      dec: 25.685595
    },
    {
      ra: 241.805735,
      dec: 25.664141
    },
    {
      ra: 229.099516,
      dec: 25.538057
    }
  ]
}
