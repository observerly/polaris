import { Constellation } from '../types'

export const ursaMinor: Constellation = {
  name: 'Ursa Minor',
  meaning: 'the lesser bear',
  aster: [
    // Polaris to Yildun:
    {
      moveTo: {
        ra: 37.954561,
        dec: 89.264109
      },
      lineTo: {
        ra: 263.054126,
        dec: 86.586462
      }
    },
    // Yildun to ε Ursae Minoris:
    {
      moveTo: {
        ra: 263.054126,
        dec: 86.586462
      },
      lineTo: {
        ra: 251.4923333333,
        dec: 82.03725
      }
    },
    // ε Ursae Minoris to ζ Ursae Minoris:
    {
      moveTo: {
        ra: 251.4923333333,
        dec: 82.03725
      },
      lineTo: {
        ra: 236.0144166667,
        dec: 77.7945
      }
    },
    // ζ Ursae Minoris to Kochab:
    {
      moveTo: {
        ra: 236.0144166667,
        dec: 77.7945
      },
      lineTo: {
        ra: 222.676357,
        dec: 74.155504
      }
    },
    // Kochab to Pherkad:
    {
      moveTo: {
        ra: 222.676357,
        dec: 74.155504
      },
      lineTo: {
        ra: 230.18215,
        dec: 71.834017
      }
    },
    // Pherkad to η Ursae Minoris:
    {
      moveTo: {
        ra: 230.18215,
        dec: 71.834017
      },
      lineTo: {
        ra: 244.3770833333,
        dec: 75.7546944444
      }
    },
    // η Ursae Minoris to ζ Ursae Minoris:
    {
      moveTo: {
        ra: 244.3770833333,
        dec: 75.7546944444
      },
      lineTo: {
        ra: 236.0144166667,
        dec: 77.7945
      }
    }
  ],
  boundaries: [
    {
      ra: 195.820613,
      dec: 76.328911
    },
    {
      ra: 196.097474,
      dec: 69.329361
    },
    {
      ra: 210.650811,
      dec: 69.399117
    },
    {
      ra: 210.820555,
      dec: 65.399651
    },
    {
      ra: 235.329565,
      dec: 65.602348
    },
    {
      ra: 235.05063,
      dec: 69.600944
    },
    {
      ra: 247.841062,
      dec: 69.738304
    },
    {
      ra: 247.220707,
      dec: 74.734787
    },
    {
      ra: 261.536637,
      dec: 74.903313
    },
    {
      ra: 260.217905,
      dec: 79.895348
    },
    {
      ra: 267.65602,
      dec: 79.985748
    },
    {
      ra: 261.72223,
      dec: 85.94957
    },
    {
      ra: 308.72097,
      dec: 86.465622
    },
    {
      ra: 308.331355,
      dec: 86.63063
    },
    {
      ra: 343.510666,
      dec: 86.836891
    },
    {
      ra: 339.260988,
      dec: 88.663887
    },
    {
      ra: 135.832471,
      dec: 87.568916
    },
    {
      ra: 130.40275,
      dec: 86.097542
    },
    {
      ra: 213.022957,
      dec: 85.930809
    },
    {
      ra: 216.782856,
      dec: 79.444984
    },
    {
      ra: 203.80919,
      dec: 79.36293
    },
    {
      ra: 204.157019,
      dec: 76.363815
    },
    {
      ra: 195.820613,
      dec: 76.328911
    }
  ]
}
