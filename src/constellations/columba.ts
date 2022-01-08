import { Constellation } from '../types'

export const columba: Constellation = {
  name: 'Columba',
  meaning: 'the dove',
  aster: [
    // ε Columbae to Phact:
    {
      moveTo: {
        ra: 82.8030833333,
        dec: -35.4704444444
      },
      lineTo: {
        ra: 84.912254,
        dec: -34.07411
      }
    },
    // Phact to Wazn:
    {
      moveTo: {
        ra: 84.912254,
        dec: -34.07411
      },
      lineTo: {
        ra: 87.739968,
        dec: -35.76831
      }
    },
    // Wazn to γ Columbae:
    {
      moveTo: {
        ra: 87.739968,
        dec: -35.76831
      },
      lineTo: {
        ra: 89.3842083333,
        dec: -35.2833055556
      }
    },
    // γ Columbae to δ Columbae:
    {
      moveTo: {
        ra: 89.3842083333,
        dec: -35.2833055556
      },
      lineTo: {
        ra: 95.5285416667,
        dec: -33.4362777778
      }
    },
    // Wazn to η Columbae:
    {
      moveTo: {
        ra: 87.739968,
        dec: -35.76831
      },
      lineTo: {
        ra: 89.786625,
        dec: -42.8151111111
      }
    }
  ],
  boundaries: [
    {
      ra: 75.974444,
      dec: -42.82555
    },
    {
      ra: 76.254937,
      dec: -27.077204
    },
    {
      ra: 92.992566,
      dec: -27.278799
    },
    {
      ra: 92.899068,
      dec: -33.028233
    },
    {
      ra: 99.90386,
      dec: -33.112816
    },
    {
      ra: 99.708916,
      dec: -43.111649
    },
    {
      ra: 90.951777,
      dec: -43.005779
    },
    {
      ra: 75.974444,
      dec: -42.82555
    }
  ]
}
