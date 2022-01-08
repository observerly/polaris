import { Constellation } from '../types'

export const caelum: Constellation = {
  name: 'Caelum',
  meaning: 'chisel',
  aster: [
    // α Caeli to β Caeli:
    {
      moveTo: {
        ra: 70.1409166667,
        dec: -41.8635833333
      },
      lineTo: {
        ra: 70.514375,
        dec: -37.1447777778
      }
    },
    // β Caeli to γ Caeli:
    {
      moveTo: {
        ra: 70.514375,
        dec: -37.1447777778
      },
      lineTo: {
        ra: 76.1012916667,
        dec: -35.4828611111
      }
    },
    // α Caeli to δ Caeli:
    {
      moveTo: {
        ra: 70.1409166667,
        dec: -41.8635833333
      },
      lineTo: {
        ra: 67.70875,
        dec: -44.95375
      }
    }
  ],
  boundaries: [
    {
      ra: 65.076413,
      dec: -39.700729
    },
    {
      ra: 64.882386,
      dec: -48.699665
    },
    {
      ra: 68.362248,
      dec: -48.738449
    },
    {
      ra: 68.424096,
      dec: -46.238796
    },
    {
      ra: 73.402083,
      dec: -46.295902
    },
    {
      ra: 73.48237,
      dec: -42.796368
    },
    {
      ra: 75.974444,
      dec: -42.82555
    },
    {
      ra: 76.254937,
      dec: -27.077204
    },
    {
      ra: 73.759296,
      dec: -27.047979
    },
    {
      ra: 71.763331,
      dec: -27.024877
    },
    {
      ra: 71.722419,
      dec: -29.774643
    },
    {
      ra: 69.976651,
      dec: -29.75466
    },
    {
      ra: 69.862375,
      dec: -36.754005
    },
    {
      ra: 65.12985,
      dec: -36.701023
    },
    {
      ra: 65.076413,
      dec: -39.700729
    }
  ]
}
