import { Constellation } from '../types'

export const pavo: Constellation = {
  name: 'Pavo',
  meaning: 'peacock',
  aster: [
    // Peacock to γ Pavonis:
    {
      moveTo: {
        ra: 306.411904,
        dec: -56.73509
      },
      lineTo: {
        ra: 321.610375,
        dec: -65.3681388889
      }
    },
    // γ Pavonis to β Pavonis:
    {
      moveTo: {
        ra: 321.610375,
        dec: -65.3681388889
      },
      lineTo: {
        ra: 311.2398333333,
        dec: -66.20325
      }
    },
    // β Pavonis to δ Pavonis:
    {
      moveTo: {
        ra: 311.2398333333,
        dec: -66.20325
      },
      lineTo: {
        ra: 302.1744166667,
        dec: -66.1793333333
      }
    },
    // δ Pavonis to Peacock:
    {
      moveTo: {
        ra: 302.1744166667,
        dec: -66.1793333333
      },
      lineTo: {
        ra: 306.411904,
        dec: -56.73509
      }
    },
    // δ Pavonis to ε Pavonis:
    {
      moveTo: {
        ra: 302.1744166667,
        dec: -66.1793333333
      },
      lineTo: {
        ra: 300.1474583333,
        dec: -72.9101944444
      }
    },
    // δ Pavonis to ζ Pavonis:
    {
      moveTo: {
        ra: 302.1744166667,
        dec: -66.1793333333
      },
      lineTo: {
        ra: 280.758875,
        dec: -71.4277222222
      }
    },
    // δ Pavonis to λ Pavonis:
    {
      moveTo: {
        ra: 302.1744166667,
        dec: -66.1793333333
      },
      lineTo: {
        ra: 283.0543333333,
        dec: -62.1875555556
      }
    },
    // δ Pavonis to κ Pavonis:
    {
      moveTo: {
        ra: 302.1744166667,
        dec: -66.1793333333
      },
      lineTo: {
        ra: 284.2376666667,
        dec: -67.2335277778
      }
    },
    // λ Pavonis to ξ Pavonis:
    {
      moveTo: {
        ra: 283.0543333333,
        dec: -62.1875555556
      },
      lineTo: {
        ra: 275.80675,
        dec: -61.4939166667
      }
    },
    // ξ Pavonis to π Pavonis:
    {
      moveTo: {
        ra: 275.80675,
        dec: -61.4939166667
      },
      lineTo: {
        ra: 272.1449583333,
        dec: -63.6680555556
      }
    },
    // κ Pavonis to π Pavonis:
    {
      moveTo: {
        ra: 284.2376666667,
        dec: -67.2335277778
      },
      lineTo: {
        ra: 272.1449583333,
        dec: -63.6680555556
      }
    },
    // π Pavonis to η Pavonis:
    {
      moveTo: {
        ra: 272.1449583333,
        dec: -63.6680555556
      },
      lineTo: {
        ra: 266.4333333333,
        dec: -64.7237222222
      }
    }
  ],
  boundaries: [
    {
      ra: 274.19506,
      dec: -74.974518
    },
    {
      ra: 323.184757,
      dec: -74.454468
    },
    {
      ra: 322.348651,
      dec: -59.457684
    },
    {
      ra: 307.564801,
      dec: -59.588055
    },
    {
      ra: 307.458801,
      dec: -56.588577
    },
    {
      ra: 272.672253,
      dec: -56.983772
    },
    {
      ra: 265.16819,
      dec: -57.074776
    },
    {
      ra: 265.775729,
      dec: -67.571106
    },
    {
      ra: 273.280077,
      dec: -67.48008
    },
    {
      ra: 274.19506,
      dec: -74.974518
    }
  ]
}
