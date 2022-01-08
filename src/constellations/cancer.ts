import { Constellation } from '../types'

export const cancer: Constellation = {
  name: 'Cancer',
  meaning: 'the crab',
  aster: [
    // ι Cancri to Asellus Borealis:
    {
      moveTo: {
        ra: 131.6666666667,
        dec: 28.7651666667
      },
      lineTo: {
        ra: 130.821442,
        dec: 21.468501
      }
    },
    // Asellus Borealis to Asellus Australis
    {
      moveTo: {
        ra: 130.821442,
        dec: 21.468501
      },
      lineTo: {
        ra: 131.171248,
        dec: 18.154309
      }
    },
    // Asellus Australis to Acubens:
    {
      moveTo: {
        ra: 131.171248,
        dec: 18.154309
      },
      lineTo: {
        ra: 134.621761,
        dec: 11.8577
      }
    },
    // Asellus Australis to Tarf:
    {
      moveTo: {
        ra: 131.171248,
        dec: 18.154309
      },
      lineTo: {
        ra: 124.128838,
        dec: 9.185544
      }
    }
  ],
  boundaries: [
    {
      ra: 140.404259,
      dec: 6.470069
    },
    {
      ra: 122.921391,
      dec: 6.630238
    },
    {
      ra: 120.548343,
      dec: 6.654985
    },
    {
      ra: 120.580672,
      dec: 9.654814
    },
    {
      ra: 118.832489,
      dec: 9.673426
    },
    {
      ra: 118.871605,
      dec: 13.173217
    },
    {
      ra: 118.947545,
      dec: 19.672808
    },
    {
      ra: 120.070124,
      dec: 19.66082
    },
    {
      ra: 120.171646,
      dec: 27.660282
    },
    {
      ra: 121.91597,
      dec: 27.641914
    },
    {
      ra: 121.993231,
      dec: 33.141514
    },
    {
      ra: 140.645985,
      dec: 32.969116
    },
    {
      ra: 140.404259,
      dec: 6.470069
    }
  ]
}
