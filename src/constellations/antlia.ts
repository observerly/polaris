import { Constellation } from '../types'

export const antlia: Constellation = {
  name: 'Antlia',
  meaning: 'pump',
  centrum: {
    ra: 160.2557175981,
    dec: -34.1933428302
  },
  aster: [
    // ι Antilae to α Antilae:
    {
      moveTo: {
        ra: 164.1791666667,
        dec: -37.1374722222
      },
      lineTo: {
        ra: 156.7881666667,
        dec: -31.0678055556
      }
    },
    // α Antilae to ε Antilae:
    {
      moveTo: {
        ra: 156.7881666667,
        dec: -31.0678055556
      },
      lineTo: {
        ra: 142.3114166667,
        dec: -35.9513611111
      }
    }
  ],
  boundaries: [
    {
      ra: 141.904335,
      dec: -24.542519
    },
    {
      ra: 141.771599,
      dec: -37.292015
    },
    {
      ra: 141.734061,
      dec: -40.291874
    },
    {
      ra: 166.456505,
      dec: -40.424622
    },
    {
      ra: 166.479363,
      dec: -35.674656
    },
    {
      ra: 163.958515,
      dec: -35.666496
    },
    {
      ra: 163.977885,
      dec: -31.833201
    },
    {
      ra: 160.201379,
      dec: -31.818586
    },
    {
      ra: 160.212894,
      dec: -29.818613
    },
    {
      ra: 155.181327,
      dec: -29.794784
    },
    {
      ra: 155.199338,
      dec: -27.128162
    },
    {
      ra: 147.659283,
      dec: -27.083504
    },
    {
      ra: 147.679681,
      dec: -24.583571
    },
    {
      ra: 141.904335,
      dec: -24.542519
    }
  ]
}
