import { Constellation } from '../../src/types'

export const apus: Constellation = {
  name: 'Apus',
  meaning: 'bird-of-paradise (without feet)',
  aster: [
    // α Apodis to δ¹ Apodis:
    {
      moveTo: {
        ra: 221.9655416667,
        dec: -79.0447222222
      },
      lineTo: {
        ra: 245.0868333333,
        dec: -78.6956666667
      }
    },
    // δ¹ Apodis to β Apodis:
    {
      moveTo: {
        ra: 245.0868333333,
        dec: -78.6956666667
      },
      lineTo: {
        ra: 250.7725833333,
        dec: -77.5165833333
      }
    },
    // β Apodis to γ Apodis:
    {
      moveTo: {
        ra: 250.7725833333,
        dec: -77.5165833333
      },
      lineTo: {
        ra: 248.3644166667,
        dec: -78.8969722222
      }
    }
  ],
  boundaries: [
    {
      ra: 209.111109,
      dec: -83.120071
    },
    {
      ra: 276.865998,
      dec: -82.458275
    },
    {
      ra: 274.19506,
      dec: -74.974518
    },
    {
      ra: 273.280077,
      dec: -67.48008
    },
    {
      ra: 265.775729,
      dec: -67.571106
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
    },
    {
      ra: 207.46087,
      dec: -70.624443
    },
    {
      ra: 207.781434,
      dec: -75.623596
    },
    {
      ra: 209.111109,
      dec: -83.120071
    }
  ]
}
