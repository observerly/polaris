import { Constellation } from '../types'

export const canisMajor: Constellation = {
  name: 'Canis Major',
  meaning: 'the greater dog',
  aster: [
    // Sirius to Mirzam:
    {
      moveTo: {
        ra: 101.287155,
        dec: -16.716116
      },
      lineTo: {
        ra: 95.674939,
        dec: -17.955919
      }
    },
    // Sirius to ι Canis Majoris
    {
      moveTo: {
        ra: 101.287155,
        dec: -16.716116
      },
      lineTo: {
        ra: 104.0342916667,
        dec: -17.05425
      }
    },
    // ι Canis Majoris to Muliphein
    {
      moveTo: {
        ra: 104.0342916667,
        dec: -17.05425
      },
      lineTo: {
        ra: 105.939554,
        dec: -15.633286
      }
    },
    // ι Canis Majoris to θ Canis Majoris
    {
      moveTo: {
        ra: 104.0342916667,
        dec: -17.05425
      },
      lineTo: {
        ra: 103.5478333333,
        dec: -12.0385833333
      }
    },
    // Muliphein to θ Canis Majoris
    {
      moveTo: {
        ra: 105.939554,
        dec: -15.633286
      },
      lineTo: {
        ra: 103.5478333333,
        dec: -12.0385833333
      }
    },
    // Mirzam to ν² Canis Majoris
    {
      moveTo: {
        ra: 95.674939,
        dec: -17.955919
      },
      lineTo: {
        ra: 99.1708333333,
        dec: -19.2557222222
      }
    },
    // ν² Canis Majoris to ο¹ Canis Majoris
    {
      moveTo: {
        ra: 99.1708333333,
        dec: -19.2557222222
      },
      lineTo: {
        ra: 103.533125,
        dec: -24.1842222222
      }
    },
    // ο¹ Canis Majoris to Adhara:
    {
      moveTo: {
        ra: 103.533125,
        dec: -24.1842222222
      },
      lineTo: {
        ra: 104.656453,
        dec: -28.972086
      }
    },
    // Adhara to Wezen:
    {
      moveTo: {
        ra: 104.656453,
        dec: -28.972086
      },
      lineTo: {
        ra: 107.09785,
        dec: -26.3932
      }
    },
    // Wezen to Sirius,
    {
      moveTo: {
        ra: 107.09785,
        dec: -26.3932
      },
      lineTo: {
        ra: 101.287155,
        dec: -16.716116
      }
    },
    // Wezen to Aludra:
    {
      moveTo: {
        ra: 107.09785,
        dec: -26.3932
      },
      lineTo: {
        ra: 111.02376,
        dec: -29.303106
      }
    }
  ],
  boundaries: [
    {
      ra: 93.215625,
      dec: -11.030153
    },
    {
      ra: 111.9734,
      dec: -11.252145
    },
    {
      ra: 111.677199,
      dec: -33.250469
    },
    {
      ra: 99.90386,
      dec: -33.112816
    },
    {
      ra: 92.899068,
      dec: -33.028233
    },
    {
      ra: 92.992566,
      dec: -27.278799
    },
    {
      ra: 93.215625,
      dec: -11.030153
    }
  ]
}
