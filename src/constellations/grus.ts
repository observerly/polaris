import { Constellation } from '../types'

export const grus: Constellation = {
  name: 'Grus',
  meaning: 'the crane',
  aster: [
    // Alnair to Tiaki:
    {
      moveTo: {
        ra: 332.05827,
        dec: -46.960974
      },
      lineTo: {
        ra: 340.666876,
        dec: -46.884576
      }
    },
    // Alnair to δ¹ Gruis:
    {
      moveTo: {
        ra: 332.05827,
        dec: -46.960974
      },
      lineTo: {
        ra: 337.3172916667,
        dec: -43.4955555556
      }
    },
    // Tiaki to δ¹ Gruis:
    {
      moveTo: {
        ra: 340.666876,
        dec: -46.884576
      },
      lineTo: {
        ra: 337.3172916667,
        dec: -43.4955555556
      }
    },
    // δ¹ Gruis to μ¹ Gruis:
    {
      moveTo: {
        ra: 337.3172916667,
        dec: -43.4955555556
      },
      lineTo: {
        ra: 333.9036666667,
        dec: -41.34675
      }
    },
    // μ¹ Gruis to λ Gruis:
    {
      moveTo: {
        ra: 333.9036666667,
        dec: -41.34675
      },
      lineTo: {
        ra: 331.52875,
        dec: -39.5430555556
      }
    },
    // λ Gruis to Aldhanab:
    {
      moveTo: {
        ra: 331.52875,
        dec: -39.5430555556
      },
      lineTo: {
        ra: 328.482192,
        dec: -37.364855
      }
    },
    // Tiaki to ε Gruis:
    {
      moveTo: {
        ra: 340.666876,
        dec: -46.884576
      },
      lineTo: {
        ra: 342.1383333333,
        dec: -51.3166944444
      }
    },
    // ε Gruis to ζ Gruis:
    {
      moveTo: {
        ra: 342.1383333333,
        dec: -51.3166944444
      },
      lineTo: {
        ra: 345.2202916667,
        dec: -52.7541111111
      }
    }
  ],
  boundaries: [
    {
      ra: 321.928053,
      dec: -36.459297
    },
    {
      ra: 322.042321,
      dec: -44.958858
    },
    {
      ra: 322.117366,
      dec: -49.458572
    },
    {
      ra: 331.998825,
      dec: -49.391174
    },
    {
      ra: 332.113695,
      dec: -56.390835
    },
    {
      ra: 351.768522,
      dec: -56.312687
    },
    {
      ra: 351.692705,
      dec: -39.312759
    },
    {
      ra: 351.683378,
      dec: -36.312767
    },
    {
      ra: 346.727514,
      dec: -36.324974
    },
    {
      ra: 321.928053,
      dec: -36.459297
    }
  ]
}
