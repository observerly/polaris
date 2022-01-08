import { Constellation } from '../types'

export const circinus: Constellation = {
  name: 'Circinus',
  meaning: 'the compass',
  aster: [
    // α Circini to β Circini:
    {
      moveTo: {
        ra: 220.627875,
        dec: -64.9745833333
      },
      lineTo: {
        ra: 229.379,
        dec: -58.8008888889
      }
    },
    // α Circini to γ Circini:
    {
      moveTo: {
        ra: 220.627875,
        dec: -64.9745833333
      },
      lineTo: {
        ra: 230.8444166667,
        dec: -59.3206944444
      }
    }
  ],
  boundaries: [
    {
      ra: 204.680286,
      dec: -64.63794
    },
    {
      ra: 204.70748,
      dec: -65.637878
    },
    {
      ra: 207.268023,
      dec: -65.624954
    },
    {
      ra: 207.46087,
      dec: -70.624443
    },
    {
      ra: 224.166441,
      dec: -70.511543
    },
    {
      ra: 224.003634,
      dec: -68.012207
    },
    {
      ra: 226.557126,
      dec: -67.990929
    },
    {
      ra: 226.353535,
      dec: -64.075127
    },
    {
      ra: 230.166579,
      dec: -64.041565
    },
    {
      ra: 230.05457,
      dec: -61.458748
    },
    {
      ra: 232.589765,
      dec: -61.435307
    },
    {
      ra: 232.549868,
      dec: -60.435493
    },
    {
      ra: 232.381911,
      dec: -55.436283
    },
    {
      ra: 228.083511,
      dec: -55.475494
    },
    {
      ra: 220.234465,
      dec: -55.540089
    },
    {
      ra: 220.514975,
      dec: -64.539024
    },
    {
      ra: 204.680286,
      dec: -64.63794
    }
  ]
}
