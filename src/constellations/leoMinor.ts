import { Constellation } from '../types'

export const leoMinor: Constellation = {
  name: 'Leo Minor',
  meaning: 'lesser lion',
  aster: [
    // β Leonis Minoris to Praecipua:
    {
      moveTo: {
        ra: 156.9712083333,
        dec: 36.7074722222
      },
      lineTo: {
        ra: 163.327937,
        dec: 34.214872
      }
    },
    // Praecipua to HD 90277:
    {
      moveTo: {
        ra: 163.327937,
        dec: 34.214872
      },
      lineTo: {
        ra: 156.478625,
        dec: 33.79625
      }
    },
    // HD 90277 to HD 87696:
    {
      moveTo: {
        ra: 156.478625,
        dec: 33.79625
      },
      lineTo: {
        ra: 151.8572083333,
        dec: 35.2446944444
      }
    },
    // β Leonis Minoris to HD 87696:
    {
      moveTo: {
        ra: 156.9712083333,
        dec: 36.7074722222
      },
      lineTo: {
        ra: 151.8572083333,
        dec: 35.2446944444
      }
    },
    // HD 87696 to HD 82635:
    {
      moveTo: {
        ra: 151.8572083333,
        dec: 35.2446944444
      },
      lineTo: {
        ra: 143.55575,
        dec: 36.3976111111
      }
    }
  ],
  boundaries: [
    {
      ra: 140.645985,
      dec: 32.969116
    },
    {
      ra: 140.721631,
      dec: 39.218819
    },
    {
      ra: 145.681973,
      dec: 39.181767
    },
    {
      ra: 145.709238,
      dec: 41.431675
    },
    {
      ra: 154.378224,
      dec: 41.377361
    },
    {
      ra: 154.359412,
      dec: 39.377411
    },
    {
      ra: 163.523169,
      dec: 39.335613
    },
    {
      ra: 163.489409,
      dec: 33.335678
    },
    {
      ra: 166.714225,
      dec: 33.324993
    },
    {
      ra: 166.693998,
      dec: 28.325026
    },
    {
      ra: 166.680937,
      dec: 24.825045
    },
    {
      ra: 162.951494,
      dec: 24.837589
    },
    {
      ra: 162.942539,
      dec: 22.837605
    },
    {
      ra: 159.210878,
      dec: 22.852978
    },
    {
      ra: 159.238401,
      dec: 27.852917
    },
    {
      ra: 150.042344,
      dec: 27.902409
    },
    {
      ra: 150.084385,
      dec: 32.902279
    },
    {
      ra: 140.645985,
      dec: 32.969116
    }
  ]
}
