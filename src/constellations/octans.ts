import { Constellation } from '../types'

export const octans: Constellation = {
  name: 'Octans',
  meaning: 'octant (instrument)',
  aster: [
    // β Octantis to ν Octantis:
    {
      moveTo: {
        ra: 341.5155,
        dec: -81.3816111111
      },
      lineTo: {
        ra: 325.368625,
        dec: -77.3894722222
      }
    },
    // ν Octantis to δ Octantis:
    {
      moveTo: {
        ra: 325.368625,
        dec: -77.3894722222
      },
      lineTo: {
        ra: 216.73225,
        dec: -83.6678611111
      }
    },
    // δ Octantis to β Octantis:
    {
      moveTo: {
        ra: 216.73225,
        dec: -83.6678611111
      },
      lineTo: {
        ra: 341.5155,
        dec: -81.3816111111
      }
    }
  ],
  boundaries: [
    {
      ra: 0.800646,
      dec: -89.303902
    },
    {
      ra: 1.533391,
      dec: -81.803955
    },
    {
      ra: 50.091655,
      dec: -82.064453
    },
    {
      ra: 48.23292,
      dec: -84.555382
    },
    {
      ra: 109.019709,
      dec: -85.261444
    },
    {
      ra: 111.652115,
      dec: -82.775886
    },
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
      ra: 323.184757,
      dec: -74.454468
    },
    {
      ra: 351.997833,
      dec: -74.312462
    },
    {
      ra: 1.566306,
      dec: -74.303963
    },
    {
      ra: 0.800646,
      dec: -89.303902
    },
    {
      ra: 0.800652,
      dec: -89.303894
    },
    {
      ra: 0.800646,
      dec: -89.303902
    }
  ]
}
