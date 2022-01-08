import { Constellation } from '../types'

export const delphinus: Constellation = {
  name: 'Delphinus',
  meaning: 'the dolphin',
  aster: [
    // Sualocin to γ¹ Delphini:
    {
      moveTo: {
        ra: 309.90953,
        dec: 15.912073
      },
      lineTo: {
        ra: 311.6619583333,
        dec: 16.1246111111
      }
    },
    // γ¹ Delphini to δ Delphini:
    {
      moveTo: {
        ra: 311.6619583333,
        dec: 16.1246111111
      },
      lineTo: {
        ra: 310.8647916667,
        dec: 15.0746944444
      }
    },
    // δ Delphini to Rotanev:
    {
      moveTo: {
        ra: 310.8647916667,
        dec: 15.0746944444
      },
      lineTo: {
        ra: 309.387235,
        dec: 14.595115
      }
    },
    // Rotanev to Sualocin:
    {
      moveTo: {
        ra: 309.387235,
        dec: 14.595115
      },
      lineTo: {
        ra: 309.90953,
        dec: 15.912073
      }
    },
    // Rotanev to Aldulfin:
    {
      moveTo: {
        ra: 309.387235,
        dec: 14.595115
      },
      lineTo: {
        ra: 308.303216,
        dec: 11.303261
      }
    }
  ],
  boundaries: [
    {
      ra: 309.579877,
      dec: 2.436087
    },
    {
      ra: 306.079101,
      dec: 2.402147
    },
    {
      ra: 306.013956,
      dec: 8.901824
    },
    {
      ra: 303.636675,
      dec: 8.877912
    },
    {
      ra: 303.558998,
      dec: 16.127516
    },
    {
      ra: 305.186949,
      dec: 16.143963
    },
    {
      ra: 305.134049,
      dec: 20.8937
    },
    {
      ra: 309.896937,
      dec: 20.939947
    },
    {
      ra: 309.907665,
      dec: 19.939997
    },
    {
      ra: 317.178783,
      dec: 20.004641
    },
    {
      ra: 317.248364,
      dec: 12.338261
    },
    {
      ra: 314.618596,
      dec: 12.315764
    },
    {
      ra: 314.671096,
      dec: 6.482664
    },
    {
      ra: 314.045505,
      dec: 6.477161
    },
    {
      ra: 314.081097,
      dec: 2.477318
    },
    {
      ra: 309.579877,
      dec: 2.436087
    }
  ]
}
