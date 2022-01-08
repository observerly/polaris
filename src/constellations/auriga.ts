import { Constellation } from '../types'

export const auriga: Constellation = {
  name: 'Auriga',
  meaning: 'the charioteer',
  aster: [
    // Capella to Saclateni:
    {
      moveTo: {
        ra: 79.172328,
        dec: 45.997991
      },
      lineTo: {
        ra: 75.619531,
        dec: 41.075839
      }
    },
    // Saclateni to Hassaleh
    {
      moveTo: {
        ra: 75.619531,
        dec: 41.075839
      },
      lineTo: {
        ra: 74.248421,
        dec: 33.1661
      }
    },
    // Hassaleh to Elnath:
    {
      moveTo: {
        ra: 74.248421,
        dec: 33.1661
      },
      lineTo: {
        ra: 81.572971,
        dec: 28.607452
      }
    },
    // Elnath to Mahasim:
    {
      moveTo: {
        ra: 81.572971,
        dec: 28.607452
      },
      lineTo: {
        ra: 89.930292,
        dec: 37.212585
      }
    },
    // Mahasim to Menkalinan:
    {
      moveTo: {
        ra: 89.930292,
        dec: 37.212585
      },
      lineTo: {
        ra: 89.882179,
        dec: 44.947433
      }
    },
    // Menkalinan to Capella:
    {
      moveTo: {
        ra: 89.882179,
        dec: 44.947433
      },
      lineTo: {
        ra: 79.172328,
        dec: 45.997991
      }
    }
  ],
  boundaries: [
    {
      ra: 69.486938,
      dec: 30.921875
    },
    {
      ra: 69.573841,
      dec: 36.254715
    },
    {
      ra: 72.457344,
      dec: 36.221851
    },
    {
      ra: 72.840285,
      dec: 52.719647
    },
    {
      ra: 77.484762,
      dec: 52.665554
    },
    {
      ra: 77.606765,
      dec: 56.164833
    },
    {
      ra: 94.131089,
      dec: 55.965809
    },
    {
      ra: 94.057366,
      dec: 53.966255
    },
    {
      ra: 100.046031,
      dec: 53.893829
    },
    {
      ra: 99.91946,
      dec: 49.894588
    },
    {
      ra: 104.406359,
      dec: 49.841003
    },
    {
      ra: 104.265303,
      dec: 44.341839
    },
    {
      ra: 112.734125,
      dec: 44.243549
    },
    {
      ra: 112.560719,
      dec: 35.24453
    },
    {
      ra: 100.090276,
      dec: 35.390564
    },
    {
      ra: 99.965658,
      dec: 27.891312
    },
    {
      ra: 90.221071,
      dec: 28.009291
    },
    {
      ra: 90.228903,
      dec: 28.509243
    },
    {
      ra: 73.212475,
      dec: 28.71244
    },
    {
      ra: 73.235343,
      dec: 30.212309
    },
    {
      ra: 69.476789,
      dec: 30.25526
    }
  ]
}
