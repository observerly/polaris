import { Constellation } from '../types'

export const microscopium: Constellation = {
  name: 'Microscopium',
  meaning: 'microscope',
  aster: [
    // α Microscopii to γ Microscopii:
    {
      moveTo: {
        ra: 312.492,
        dec: -33.7796666667
      },
      lineTo: {
        ra: 315.32275,
        dec: -32.2577777778
      }
    },
    // γ Microscopii to ε Microscopii:
    {
      moveTo: {
        ra: 315.32275,
        dec: -32.2577777778
      },
      lineTo: {
        ra: 319.484375,
        dec: -32.1724722222
      }
    }
  ],
  boundaries: [
    {
      ra: 306.897955,
      dec: -27.591339
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
      ra: 322.042321,
      dec: -44.958858
    },
    {
      ra: 307.169295,
      dec: -45.09
    },
    {
      ra: 306.897955,
      dec: -27.591339
    }
  ]
}
