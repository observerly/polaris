import { Constellation } from '../types'

export const fornax: Constellation = {
  name: 'Fornax',
  meaning: 'the furnace',
  aster: [
    // Dalim to β Fornacis:
    {
      moveTo: {
        ra: 48.018864,
        dec: -28.98762
      },
      lineTo: {
        ra: 42.2723333333,
        dec: -32.4062777778
      }
    },
    // β Fornacis to ν Fornacis:
    {
      moveTo: {
        ra: 42.2723333333,
        dec: -32.4062777778
      },
      lineTo: {
        ra: 31.122625,
        dec: -29.2968333333
      }
    }
  ],
  boundaries: [
    {
      ra: 26.465999,
      dec: -23.756258
    },
    {
      ra: 41.148759,
      dec: -23.853603
    },
    {
      ra: 57.588901,
      dec: -24.003378
    },
    {
      ra: 57.430512,
      dec: -35.619244
    },
    {
      ra: 53.699605,
      dec: -35.582035
    },
    {
      ra: 53.644284,
      dec: -39.165096
    },
    {
      ra: 46.193322,
      dec: -39.096256
    },
    {
      ra: 46.18726,
      dec: -39.512898
    },
    {
      ra: 36.264014,
      dec: -39.434216
    },
    {
      ra: 26.350728,
      dec: -39.372623
    },
    {
      ra: 26.458889,
      dec: -24.872909
    },
    {
      ra: 26.465999,
      dec: -23.756258
    }
  ]
}
