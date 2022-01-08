import { Constellation } from '../types'

export const chamaeleon: Constellation = {
  name: 'Chamaeleon',
  meaning: 'the lizard',
  aster: [
    // θ Chamaeleontis to α Chamaeleontis:
    {
      moveTo: {
        ra: 125.1620416667,
        dec: -77.4845833333
      },
      lineTo: {
        ra: 124.6302916667,
        dec: -76.9199722222
      }
    },
    // α Chamaeleontis to γ Chamaeleontis:
    {
      moveTo: {
        ra: 124.6302916667,
        dec: -76.9199722222
      },
      lineTo: {
        ra: 158.8675833333,
        dec: -78.6078055556
      }
    },
    // γ Chamaeleontis to δ² Chamaeleontis:
    {
      moveTo: {
        ra: 158.8675833333,
        dec: -78.6078055556
      },
      lineTo: {
        ra: 161.4464166667,
        dec: -80.5401944444
      }
    },
    // δ² Chamaeleontis to β Chamaeleontis:
    {
      moveTo: {
        ra: 161.4464166667,
        dec: -80.5401944444
      },
      lineTo: {
        ra: 184.58725,
        dec: -79.3122777778
      }
    },
    // γ Chamaeleontis to ε Chamaeleontis:
    {
      moveTo: {
        ra: 158.8675833333,
        dec: -78.6078055556
      },
      lineTo: {
        ra: 179.9070416667,
        dec: -78.2218055556
      }
    },
    // ε Chamaeleontis to β Chamaeleontis:
    {
      moveTo: {
        ra: 179.9070416667,
        dec: -78.2218055556
      },
      lineTo: {
        ra: 184.58725,
        dec: -79.3122777778
      }
    }
  ],
  boundaries: [
    {
      ra: 111.652115,
      dec: -82.775886
    },
    {
      ra: 209.111109,
      dec: -83.120071
    },
    {
      ra: 207.781434,
      dec: -75.623596
    },
    {
      ra: 169.856973,
      dec: -75.684013
    },
    {
      ra: 135.243687,
      dec: -75.495468
    },
    {
      ra: 114.214704,
      dec: -75.289917
    },
    {
      ra: 111.652115,
      dec: -82.775886
    }
  ]
}
