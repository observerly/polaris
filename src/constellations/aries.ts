import { Constellation } from '../types'

export const aries: Constellation = {
  name: 'Aries',
  meaning: 'the ram',
  aster: [
    // Bharani to Hamal:
    {
      moveTo: {
        ra: 42.495972,
        dec: 27.260507
      },
      lineTo: {
        ra: 31.793357,
        dec: 23.462418
      }
    },
    // Hamal to Sheratan:
    {
      moveTo: {
        ra: 31.793357,
        dec: 23.462418
      },
      lineTo: {
        ra: 28.660046,
        dec: 20.808031
      }
    },
    // Sheratan to Mesarthim:
    {
      moveTo: {
        ra: 28.660046,
        dec: 20.808031
      },
      lineTo: {
        ra: 28.38256,
        dec: 19.293852
      }
    }
  ],
  boundaries: [
    {
      ra: 31.665248,
      dec: 10.514395
    },
    {
      ra: 26.655734,
      dec: 10.54324
    },
    {
      ra: 26.744675,
      dec: 25.626335
    },
    {
      ra: 30.513711,
      dec: 25.60507
    },
    {
      ra: 30.530616,
      dec: 27.855019
    },
    {
      ra: 38.070149,
      dec: 27.804764
    },
    {
      ra: 38.103194,
      dec: 31.221315
    },
    {
      ra: 42.62838,
      dec: 31.186502
    },
    {
      ra: 52.426668,
      dec: 31.100361
    },
    {
      ra: 52.290623,
      dec: 19.434334
    },
    {
      ra: 51.037235,
      dec: 19.446114
    },
    {
      ra: 50.946411,
      dec: 10.363207
    },
    {
      ra: 31.665248,
      dec: 10.514395
    }
  ]
}
