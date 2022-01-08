import { Constellation } from '../types'

export const indus: Constellation = {
  name: 'Indus',
  meaning: 'Indian (of unspecified type)',
  aster: [
    // α Indi to β Indi:
    {
      moveTo: {
        ra: 309.391625,
        dec: -47.2916666667
      },
      lineTo: {
        ra: 313.7024166667,
        dec: -58.4540833333
      }
    },
    // β Indi to δ Indi:
    {
      moveTo: {
        ra: 313.7024166667,
        dec: -58.4540833333
      },
      lineTo: {
        ra: 329.4792916667,
        dec: -54.9925555556
      }
    },
    // δ Indi to θ Indi:
    {
      moveTo: {
        ra: 329.4792916667,
        dec: -54.9925555556
      },
      lineTo: {
        ra: 319.9661666667,
        dec: -53.4492777778
      }
    },
    // θ Indi to α Indi:
    {
      moveTo: {
        ra: 319.9661666667,
        dec: -53.4492777778
      },
      lineTo: {
        ra: 309.391625,
        dec: -47.2916666667
      }
    }
  ],
  boundaries: [
    {
      ra: 323.184757,
      dec: -74.454468
    },
    {
      ra: 351.997833,
      dec: -74.312462
    },
    {
      ra: 351.861391,
      dec: -66.812599
    },
    {
      ra: 332.398568,
      dec: -66.889992
    },
    {
      ra: 332.113695,
      dec: -56.390835
    },
    {
      ra: 331.998825,
      dec: -49.391174
    },
    {
      ra: 322.117366,
      dec: -49.458572
    },
    {
      ra: 322.042321,
      dec: -44.958858
    },
    {
      ra: 307.169295,
      dec: -45.09
    },
    {
      ra: 307.458801,
      dec: -56.588577
    },
    {
      ra: 307.564801,
      dec: -59.588055
    },
    {
      ra: 322.348651,
      dec: -59.457684
    },
    {
      ra: 323.184757,
      dec: -74.454468
    }
  ]
}
