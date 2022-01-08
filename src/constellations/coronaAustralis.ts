import { Constellation } from '../types'

export const coronaAustralis: Constellation = {
  name: 'Corona Australis',
  meaning: 'southern crown',
  aster: [
    // γ Coronae Australis to Meridiana:
    {
      moveTo: {
        ra: 286.6043333333,
        dec: -37.06275
      },
      lineTo: {
        ra: 287.368087,
        dec: -37.904473
      }
    },
    // Meridiana to β Coronae Australis:
    {
      moveTo: {
        ra: 287.368087,
        dec: -37.904473
      },
      lineTo: {
        ra: 287.5072916667,
        dec: -39.3406944444
      }
    },
    // β Coronae Australis to δ Coronae Australis:
    {
      moveTo: {
        ra: 287.5072916667,
        dec: -39.3406944444
      },
      lineTo: {
        ra: 287.0872083333,
        dec: -40.4966388889
      }
    },
    // δ Coronae Australis to θ Coronae Australis:
    {
      moveTo: {
        ra: 287.0872083333,
        dec: -40.4966388889
      },
      lineTo: {
        ra: 278.3756666667,
        dec: -42.3124722222
      }
    }
  ],
  boundaries: [
    {
      ra: 269.625464,
      dec: -37.01746
    },
    {
      ra: 289.59632,
      dec: -36.778565
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
      ra: 269.809284,
      dec: -45.516346
    },
    {
      ra: 269.625464,
      dec: -37.01746
    }
  ]
}
