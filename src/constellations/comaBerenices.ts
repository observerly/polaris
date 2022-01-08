import { Constellation } from '../types'

export const comaBerenices: Constellation = {
  name: 'Coma Berenices',
  meaning: "Berenice's hair",
  aster: [
    // Diadem to β Comae Berenices:
    {
      moveTo: {
        ra: 197.497029,
        dec: 17.529447
      },
      lineTo: {
        ra: 197.9705,
        dec: 27.8760277778
      }
    },
    // β Comae Berenices to γ Comae Berenices:
    {
      moveTo: {
        ra: 197.9705,
        dec: 27.8760277778
      },
      lineTo: {
        ra: 186.7347083333,
        dec: 28.2686111111
      }
    }
  ],
  boundaries: [
    {
      ra: 179.604535,
      dec: 13.304049
    },
    {
      ra: 179.608941,
      dec: 28.304047
    },
    {
      ra: 181.595664,
      dec: 28.303963
    },
    {
      ra: 181.594506,
      dec: 33.303963
    },
    {
      ra: 186.55426,
      dec: 33.30743
    },
    {
      ra: 186.557694,
      dec: 31.307434
    },
    {
      ra: 200.207748,
      dec: 31.343737
    },
    {
      ra: 200.226575,
      dec: 27.843775
    },
    {
      ra: 203.953872,
      dec: 27.860313
    },
    {
      ra: 204.02893,
      dec: 14.360494
    },
    {
      ra: 194.059066,
      dec: 14.322509
    },
    {
      ra: 194.062027,
      dec: 13.322513
    },
    {
      ra: 179.604535,
      dec: 13.304049
    }
  ]
}
