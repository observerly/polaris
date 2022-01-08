import { Constellation } from '../types'

export const scutum: Constellation = {
  name: 'Scutum',
  meaning: 'shield (of Sobieski)',
  aster: [
    // α Scuti to γ Scuti:
    {
      moveTo: {
        ra: 278.8018333333,
        dec: -8.2433055556
      },
      lineTo: {
        ra: 277.299375,
        dec: -14.5658055556
      }
    },
    // γ Scuti to δ Scuti:
    {
      moveTo: {
        ra: 277.299375,
        dec: -14.5658055556
      },
      lineTo: {
        ra: 280.5684166667,
        dec: -9.0525555556
      }
    },
    // δ Scuti to β Scuti:
    {
      moveTo: {
        ra: 280.5684166667,
        dec: -9.0525555556
      },
      lineTo: {
        ra: 281.7936666667,
        dec: -4.7478333333
      }
    },
    // β Scuti to α Scuti:
    {
      moveTo: {
        ra: 281.7936666667,
        dec: -4.7478333333
      },
      lineTo: {
        ra: 278.8018333333,
        dec: -8.2433055556
      }
    }
  ],
  boundaries: [
    {
      ra: 275.549526,
      dec: -15.943572
    },
    {
      ra: 284.79372,
      dec: -15.832812
    },
    {
      ra: 284.744054,
      dec: -11.866436
    },
    {
      ra: 284.647293,
      dec: -3.833677
    },
    {
      ra: 280.398188,
      dec: -3.884223
    },
    {
      ra: 275.399123,
      dec: -3.944483
    },
    {
      ra: 275.549526,
      dec: -15.943572
    }
  ]
}
