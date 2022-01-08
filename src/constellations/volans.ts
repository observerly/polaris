import { Constellation } from '../types'

export const volans: Constellation = {
  name: 'Volans',
  meaning: 'the flying fish',
  aster: [
    // α Volantis to β Volantis:
    {
      moveTo: {
        ra: 135.6116666667,
        dec: -66.3958333333
      },
      lineTo: {
        ra: 126.434375,
        dec: -66.1365277778
      }
    },
    // β Volantis to ε Volantis:
    {
      moveTo: {
        ra: 126.434375,
        dec: -66.1365277778
      },
      lineTo: {
        ra: 121.9826666667,
        dec: -68.6171388889
      }
    },
    // ε Volantis to δ Volantis:
    {
      moveTo: {
        ra: 121.9826666667,
        dec: -68.6171388889
      },
      lineTo: {
        ra: 109.207625,
        dec: -67.9571666667
      }
    },
    // δ Volantis to γ¹ Volantis:
    {
      moveTo: {
        ra: 109.207625,
        dec: -67.9571666667
      },
      lineTo: {
        ra: 107.1764166667,
        dec: -70.4973333333
      }
    },
    // γ¹ Volantis to ε Volantis:
    {
      moveTo: {
        ra: 107.1764166667,
        dec: -70.4973333333
      },
      lineTo: {
        ra: 121.9826666667,
        dec: -68.6171388889
      }
    },
    // α Volantis to ε Volantis:
    {
      moveTo: {
        ra: 135.6116666667,
        dec: -66.3958333333
      },
      lineTo: {
        ra: 121.9826666667,
        dec: -68.6171388889
      }
    }
  ],
  boundaries: [
    {
      ra: 98.937249,
      dec: -64.107025
    },
    {
      ra: 98.454423,
      dec: -70.104134
    },
    {
      ra: 97.77071,
      dec: -75.100037
    },
    {
      ra: 114.214704,
      dec: -75.289917
    },
    {
      ra: 135.243687,
      dec: -75.495468
    },
    {
      ra: 136.094727,
      dec: -64.499039
    },
    {
      ra: 102.703314,
      dec: -64.151878
    },
    {
      ra: 98.937249,
      dec: -64.107025
    }
  ]
}
