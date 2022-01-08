import { Constellation } from '../types'

export const pyxis: Constellation = {
  name: 'Pyxis',
  meaning: "a mariner's compass",
  aster: [
    // γ Pyxidis to α Pyxidis:
    {
      moveTo: {
        ra: 132.633375,
        dec: -27.7100555556
      },
      lineTo: {
        ra: 130.898125,
        dec: -33.1864166667
      }
    },
    // α Pyxidis to β Pyxidis:
    {
      moveTo: {
        ra: 130.898125,
        dec: -33.1864166667
      },
      lineTo: {
        ra: 130.0255833333,
        dec: -35.3083055556
      }
    }
  ],
  boundaries: [
    {
      ra: 126.927095,
      dec: -17.411257
    },
    {
      ra: 130.18434,
      dec: -17.442471
    },
    {
      ra: 130.163512,
      dec: -19.442373
    },
    {
      ra: 137.68497,
      dec: -19.508831
    },
    {
      ra: 137.636776,
      dec: -24.508631
    },
    {
      ra: 141.904335,
      dec: -24.542519
    },
    {
      ra: 141.771599,
      dec: -37.292015
    },
    {
      ra: 126.677799,
      dec: -37.160038
    },
    {
      ra: 126.927095,
      dec: -17.411257
    },
    {
      ra: 126.927095,
      dec: -17.411257
    }
  ]
}
