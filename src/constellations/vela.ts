import { Constellation } from '../types'

export const vela: Constellation = {
  name: 'Vela',
  meaning: 'the sails',
  aster: [
    // Alsephina to γ¹ Velorum:
    {
      moveTo: {
        ra: 131.175944,
        dec: -54.708819
      },
      lineTo: {
        ra: 122.3720833333,
        dec: -47.3458333333
      }
    },
    // γ¹ Velorum to Suhail:
    {
      moveTo: {
        ra: 122.3720833333,
        dec: -47.3458333333
      },
      lineTo: {
        ra: 136.998993,
        dec: -43.432589
      }
    },
    // Suhail to ψ Velorum:
    {
      moveTo: {
        ra: 136.998993,
        dec: -43.432589
      },
      lineTo: {
        ra: 142.6754583333,
        dec: -40.4668888889
      }
    },
    // ψ Velorum to q Velorum:
    {
      moveTo: {
        ra: 142.6754583333,
        dec: -40.4668888889
      },
      lineTo: {
        ra: 153.6844583333,
        dec: -42.1220555556
      }
    },
    // q Velorum to μ Velorum:
    {
      moveTo: {
        ra: 153.6844583333,
        dec: -42.1220555556
      },
      lineTo: {
        ra: 161.6921666667,
        dec: -49.4201388889
      }
    },
    // μ Velorum to φ Velorum:
    {
      moveTo: {
        ra: 161.6921666667,
        dec: -49.4201388889
      },
      lineTo: {
        ra: 149.215625,
        dec: -54.5678055556
      }
    },
    // φ Velorum to Markeb:
    {
      moveTo: {
        ra: 149.215625,
        dec: -54.5678055556
      },
      lineTo: {
        ra: 140.528407,
        dec: -55.010667
      }
    },
    // Markeb to Alsephina:
    {
      moveTo: {
        ra: 140.528407,
        dec: -55.010667
      },
      lineTo: {
        ra: 131.175944,
        dec: -54.708819
      }
    }
  ],
  boundaries: [
    {
      ra: 166.337256,
      dec: -57.174442
    },
    {
      ra: 166.456505,
      dec: -40.424622
    },
    {
      ra: 141.734061,
      dec: -40.291874
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
      ra: 126.572313,
      dec: -43.409519
    },
    {
      ra: 121.038279,
      dec: -43.353504
    },
    {
      ra: 120.861698,
      dec: -51.102585
    },
    {
      ra: 123.381129,
      dec: -51.128529
    },
    {
      ra: 123.320116,
      dec: -53.37822
    },
    {
      ra: 127.609291,
      dec: -53.420677
    },
    {
      ra: 127.567119,
      dec: -54.920471
    },
    {
      ra: 133.380174,
      dec: -54.97422
    },
    {
      ra: 133.323655,
      dec: -56.973972
    },
    {
      ra: 166.337256,
      dec: -57.174442
    }
  ]
}
