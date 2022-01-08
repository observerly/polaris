import { Constellation } from '../types'

export const telescopium: Constellation = {
  name: 'Telescopium',
  meaning: 'the telescope',
  aster: [
    // ε Telescopii to α Telescopii:
    {
      moveTo: {
        ra: 272.8074166667,
        dec: -45.9543333333
      },
      lineTo: {
        ra: 276.7434583333,
        dec: -45.9683333333
      }
    },
    // α Telescopii to ζ Telescopii:
    {
      moveTo: {
        ra: 276.7434583333,
        dec: -45.9683333333
      },
      lineTo: {
        ra: 277.20725,
        dec: -49.0700277778
      }
    }
  ],
  boundaries: [
    {
      ra: 307.458801,
      dec: -56.588577
    },
    {
      ra: 307.169295,
      dec: -45.09
    },
    {
      ra: 289.76964,
      dec: -45.277565
    },
    {
      ra: 272.309017,
      dec: -45.485973
    },
    {
      ra: 272.672253,
      dec: -56.983772
    },
    {
      ra: 307.458801,
      dec: -56.588577
    }
  ]
}
