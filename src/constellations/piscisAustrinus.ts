import { Constellation } from '../types'

export const piscisAustrinus: Constellation = {
  name: 'Piscis Austrinus',
  meaning: 'the southern fish',
  aster: [
    // Fomalhaut to δ Piscis Austrini:
    {
      moveTo: {
        ra: 344.412693,
        dec: -29.622237
      },
      lineTo: {
        ra: 343.9870416667,
        dec: -32.5396944444
      }
    },
    // δ Piscis Austrini to γ Piscis Austrini:
    {
      moveTo: {
        ra: 343.9870416667,
        dec: -32.5396944444
      },
      lineTo: {
        ra: 343.1315,
        dec: -32.8754444444
      }
    },
    // γ Piscis Austrini to β Piscis Austrini:
    {
      moveTo: {
        ra: 343.1315,
        dec: -32.8754444444
      },
      lineTo: {
        ra: 337.8762083333,
        dec: -32.3460277778
      }
    },
    // β Piscis Austrini to μ Piscis Austrini:
    {
      moveTo: {
        ra: 337.8762083333,
        dec: -32.3460277778
      },
      lineTo: {
        ra: 332.095625,
        dec: -32.9883888889
      }
    },
    // μ Piscis Austrini to ι Piscis Austrini:
    {
      moveTo: {
        ra: 332.095625,
        dec: -32.9883888889
      },
      lineTo: {
        ra: 326.236625,
        dec: -33.0255555556
      }
    },
    // ι Piscis Austrini to θ Piscis Austrini:
    {
      moveTo: {
        ra: 326.236625,
        dec: -33.0255555556
      },
      lineTo: {
        ra: 326.9340416667,
        dec: -30.8983055556
      }
    },
    // θ Piscis Austrini to μ Piscis Austrini:
    {
      moveTo: {
        ra: 326.9340416667,
        dec: -30.8983055556
      },
      lineTo: {
        ra: 332.095625,
        dec: -32.9883888889
      }
    },
    // μ Piscis Austrini to ε Piscis Austrini:
    {
      moveTo: {
        ra: 332.095625,
        dec: -32.9883888889
      },
      lineTo: {
        ra: 340.163875,
        dec: -27.0436111111
      }
    },
    // ε Piscis Austrini to Fomalhaut:
    {
      moveTo: {
        ra: 340.163875,
        dec: -27.0436111111
      },
      lineTo: {
        ra: 344.412693,
        dec: -29.622237
      }
    }
  ],
  boundaries: [
    {
      ra: 346.680966,
      dec: -24.825045
    },
    {
      ra: 329.770289,
      dec: -24.904041
    },
    {
      ra: 321.807775,
      dec: -24.959761
    },
    {
      ra: 321.831636,
      dec: -27.459667
    },
    {
      ra: 321.928053,
      dec: -36.459297
    },
    {
      ra: 346.727514,
      dec: -36.324974
    },
    {
      ra: 346.680966,
      dec: -24.825045
    },
    {
      ra: 346.680966,
      dec: -24.825045
    }
  ]
}
