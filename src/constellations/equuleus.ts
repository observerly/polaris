import { Constellation } from '../types'

export const equuleus: Constellation = {
  name: 'Equuleus',
  meaning: 'the foal (little horse)',
  aster: [
    // Kitalpha to δ Equulei:
    {
      moveTo: {
        ra: 318.955949,
        dec: 5.247865
      },
      lineTo: {
        ra: 318.6199583333,
        dec: 10.0077222222
      }
    },
    // δ Equulei to γ Equulei:
    {
      moveTo: {
        ra: 318.6199583333,
        dec: 10.0077222222
      },
      lineTo: {
        ra: 317.5852916667,
        dec: 10.1319444444
      }
    }
  ],
  boundaries: [
    {
      ra: 314.081097,
      dec: 2.477318
    },
    {
      ra: 314.045505,
      dec: 6.477161
    },
    {
      ra: 314.671096,
      dec: 6.482664
    },
    {
      ra: 314.618596,
      dec: 12.315764
    },
    {
      ra: 317.248364,
      dec: 12.338261
    },
    {
      ra: 318.250265,
      dec: 12.346555
    },
    {
      ra: 318.244515,
      dec: 13.013201
    },
    {
      ra: 321.501102,
      dec: 13.039063
    },
    {
      ra: 321.583471,
      dec: 2.53938
    },
    {
      ra: 314.081097,
      dec: 2.477318
    }
  ]
}
