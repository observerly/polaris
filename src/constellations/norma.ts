import { Constellation } from '../types'

export const norma: Constellation = {
  name: 'Norma',
  meaning: "carpenter's level",
  aster: [
    // γ² Normae to γ¹ Normae:
    {
      moveTo: {
        ra: 244.9607083333,
        dec: -50.1553888889
      },
      lineTo: {
        ra: 244.2539166667,
        dec: -50.0681111111
      }
    },
    // γ¹ Normae to η Normae:
    {
      moveTo: {
        ra: 244.2539166667,
        dec: -50.0681111111
      },
      lineTo: {
        ra: 240.8035833333,
        dec: -49.2297222222
      }
    },
    // η Normae to δ Normae:
    {
      moveTo: {
        ra: 240.8035833333,
        dec: -49.2297222222
      },
      lineTo: {
        ra: 241.6225833333,
        dec: -45.1732777778
      }
    },
    // δ Normae to ε Normae:
    {
      moveTo: {
        ra: 241.6225833333,
        dec: -45.1732777778
      },
      lineTo: {
        ra: 246.7960416667,
        dec: -47.5547222222
      }
    },
    // ε Normae to γ² Normae:
    {
      moveTo: {
        ra: 246.7960416667,
        dec: -47.5547222222
      },
      lineTo: {
        ra: 244.9607083333,
        dec: -50.1553888889
      }
    }
  ],
  boundaries: [
    {
      ra: 232.549868,
      dec: -60.435493
    },
    {
      ra: 249.034681,
      dec: -60.264458
    },
    {
      ra: 248.570624,
      dec: -45.767052
    },
    {
      ra: 248.494778,
      dec: -42.267479
    },
    {
      ra: 242.152806,
      dec: -42.336678
    },
    {
      ra: 237.124585,
      dec: -42.388638
    },
    {
      ra: 237.247281,
      dec: -48.388023
    },
    {
      ra: 232.207246,
      dec: -48.437107
    },
    {
      ra: 232.353372,
      dec: -54.436417
    },
    {
      ra: 228.056716,
      dec: -54.475617
    },
    {
      ra: 228.083511,
      dec: -55.475494
    },
    {
      ra: 232.381911,
      dec: -55.436283
    },
    {
      ra: 232.549868,
      dec: -60.435493
    }
  ]
}
