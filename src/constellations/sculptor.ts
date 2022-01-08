import { Constellation } from '../types'

export const sculptor: Constellation = {
  name: 'Sculptor',
  meaning: 'the sculptor',
  aster: [
    // α Sculptoris to ι Sculptoris:
    {
      moveTo: {
        ra: 14.6514583333,
        dec: -29.3574722222
      },
      lineTo: {
        ra: 5.3799166667,
        dec: -28.9813055556
      }
    },
    // ι Sculptoris to δ Sculptoris:
    {
      moveTo: {
        ra: 5.3799166667,
        dec: -28.9813055556
      },
      lineTo: {
        ra: 357.2311666667,
        dec: -28.1300277778
      }
    },
    // δ Sculptoris to γ Sculptoris:
    {
      moveTo: {
        ra: 357.2311666667,
        dec: -28.1300277778
      },
      lineTo: {
        ra: 349.7059583333,
        dec: -32.5318333333
      }
    },
    // γ Sculptoris to β Sculptoris:
    {
      moveTo: {
        ra: 349.7059583333,
        dec: -32.5318333333
      },
      lineTo: {
        ra: 353.2424583333,
        dec: -37.8183611111
      }
    }
  ],
  boundaries: [
    {
      ra: 346.680966,
      dec: -24.825045
    },
    {
      ra: 359.110565,
      dec: -24.804201
    },
    {
      ra: 26.458889,
      dec: -24.872909
    },
    {
      ra: 26.350728,
      dec: -39.372623
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
      ra: 346.680966,
      dec: -24.825045
    }
  ]
}
