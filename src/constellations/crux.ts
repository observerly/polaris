import { Constellation } from '../types'

export const crux: Constellation = {
  name: 'Crux',
  meaning: 'the cross',
  aster: [
    // Acrux to Gacrux:
    {
      moveTo: {
        ra: 186.649563,
        dec: -63.099093
      },
      lineTo: {
        ra: 187.791498,
        dec: -57.113213
      }
    },
    // Mimosa to Imai:
    {
      moveTo: {
        ra: 191.930263,
        dec: -59.688764
      },
      lineTo: {
        ra: 183.78632,
        dec: -58.748927
      }
    }
  ],
  boundaries: [
    {
      ra: 179.070768,
      dec: -55.695793
    },
    {
      ra: 179.057364,
      dec: -64.695785
    },
    {
      ra: 194.43838,
      dec: -64.676964
    },
    {
      ra: 194.334511,
      dec: -55.677105
    },
    {
      ra: 179.070768,
      dec: -55.695793
    }
  ]
}
