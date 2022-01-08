import { Constellation } from '../types'

export const tucana: Constellation = {
  name: 'Tucana',
  meaning: 'the tucan',
  aster: [
    // α Tucanae to γ Tucanae:
    {
      moveTo: {
        ra: 334.62575,
        dec: -60.2595
      },
      lineTo: {
        ra: 349.3575416667,
        dec: -58.2359166667
      }
    },
    // γ Tucanae to β¹ Tucanae:
    {
      moveTo: {
        ra: 349.3575416667,
        dec: -58.2359166667
      },
      lineTo: {
        ra: 7.8856666667,
        dec: -62.9580833333
      }
    },
    // β¹ Tucanae to ζ Tucanae:
    {
      moveTo: {
        ra: 7.8856666667,
        dec: -62.9580833333
      },
      lineTo: {
        ra: 5.0079583333,
        dec: -64.8776111111
      }
    },
    // ζ Tucanae to ε Tucanae:
    {
      moveTo: {
        ra: 5.0079583333,
        dec: -64.8776111111
      },
      lineTo: {
        ra: 359.9787916667,
        dec: -65.5770833333
      }
    },
    // ε Tucanae to δ Tucanae:
    {
      moveTo: {
        ra: 359.9787916667,
        dec: -65.5770833333
      },
      lineTo: {
        ra: 336.8327916667,
        dec: -64.9663888889
      }
    },
    // δ Tucanae to α Tucanae:
    {
      moveTo: {
        ra: 336.8327916667,
        dec: -64.9663888889
      },
      lineTo: {
        ra: 334.62575,
        dec: -60.2595
      }
    }
  ],
  boundaries: [
    {
      ra: 351.997833,
      dec: -74.312462
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
      ra: 351.778394,
      dec: -57.812679
    },
    {
      ra: 351.768522,
      dec: -56.312687
    },
    {
      ra: 332.113695,
      dec: -56.390835
    },
    {
      ra: 332.398568,
      dec: -66.889992
    },
    {
      ra: 351.861391,
      dec: -66.812599
    },
    {
      ra: 351.997833,
      dec: -74.312462
    }
  ]
}
