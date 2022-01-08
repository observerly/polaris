import { Constellation } from '../types'

export const hydrus: Constellation = {
  name: 'Hydrus',
  meaning: 'lesser water snake',
  aster: [
    // α Hydri to β Hydri:
    {
      moveTo: {
        ra: 29.691125,
        dec: -61.5699166667
      },
      lineTo: {
        ra: 6.4133333333,
        dec: -77.2550277778
      }
    },
    // β Hydri to γ Hydri:
    {
      moveTo: {
        ra: 6.4133333333,
        dec: -77.2550277778
      },
      lineTo: {
        ra: 56.8092916667,
        dec: -74.23925
      }
    },
    // γ Hydri to α Hydri:
    {
      moveTo: {
        ra: 56.8092916667,
        dec: -74.23925
      },
      lineTo: {
        ra: 29.691125,
        dec: -61.5699166667
      }
    }
  ],
  boundaries: [
    {
      ra: 68.794019,
      dec: -67.247925
    },
    {
      ra: 68.581524,
      dec: -69.746719
    },
    {
      ra: 67.957485,
      dec: -74.743164
    },
    {
      ra: 52.075782,
      dec: -74.574127
    },
    {
      ra: 50.091655,
      dec: -82.064453
    },
    {
      ra: 1.533391,
      dec: -81.803955
    },
    {
      ra: 1.566297,
      dec: -74.303963
    },
    {
      ra: 12.332438,
      dec: -74.318573
    },
    {
      ra: 12.295415,
      dec: -75.318527
    },
    {
      ra: 20.65405,
      dec: -75.347221
    },
    {
      ra: 21.206229,
      dec: -57.848415
    },
    {
      ra: 33.489425,
      dec: -57.916157
    },
    {
      ra: 33.20236,
      dec: -66.915192
    },
    {
      ra: 48.36269,
      dec: -67.03582
    },
    {
      ra: 68.794019,
      dec: -67.247925
    }
  ]
}
