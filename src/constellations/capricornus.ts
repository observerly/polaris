import { Constellation } from '../types'

export const capricornus: Constellation = {
  name: 'Capricornus',
  meaning: 'horned goat',
  aster: [
    // Algedi to Dabih:
    {
      moveTo: {
        ra: 304.513566,
        dec: -12.544852
      },
      lineTo: {
        ra: 305.252803,
        dec: -14.781405
      }
    },
    // Dabih to ψ Capricorni:
    {
      moveTo: {
        ra: 305.252803,
        dec: -14.781405
      },
      lineTo: {
        ra: 311.5240416667,
        dec: -25.2705277778
      }
    },
    // ψ Capricorni to ω Capricorni:
    {
      moveTo: {
        ra: 311.5240416667,
        dec: -25.2705277778
      },
      lineTo: {
        ra: 312.9554166667,
        dec: -26.9191388889
      }
    },
    // ω Capricorni to ζ Capricorni:
    {
      moveTo: {
        ra: 312.9554166667,
        dec: -26.9191388889
      },
      lineTo: {
        ra: 321.6667916667,
        dec: -22.4113888889
      }
    },
    // ζ Capricorni to ε Capricorni:
    {
      moveTo: {
        ra: 321.6667916667,
        dec: -22.4113888889
      },
      lineTo: {
        ra: 324.2700833333,
        dec: -19.466
      }
    },
    // ε Capricorni to Deneb Algedi:
    {
      moveTo: {
        ra: 324.2700833333,
        dec: -19.466
      },
      lineTo: {
        ra: 326.760184,
        dec: -16.127287
      }
    },
    // Deneb Algedi to Nashira:
    {
      moveTo: {
        ra: 326.760184,
        dec: -16.127287
      },
      lineTo: {
        ra: 325.022735,
        dec: -16.662308
      }
    },
    // Nashira to ι Capricorni:
    {
      moveTo: {
        ra: 325.022735,
        dec: -16.662308
      },
      lineTo: {
        ra: 320.5615833333,
        dec: -16.8345555556
      }
    },
    // ι Capricorni to θ Capricorni:
    {
      moveTo: {
        ra: 320.5615833333,
        dec: -16.8345555556
      },
      lineTo: {
        ra: 316.4865833333,
        dec: -17.2327222222
      }
    },
    // θ Capricorni to Algedi:
    {
      moveTo: {
        ra: 316.4865833333,
        dec: -17.2327222222
      },
      lineTo: {
        ra: 304.513566,
        dec: -12.544852
      }
    }
  ],
  boundaries: [
    {
      ra: 309.684648,
      dec: -8.563417
    },
    {
      ra: 301.693696,
      dec: -8.643075
    },
    {
      ra: 301.72637,
      dec: -11.676234
    },
    {
      ra: 301.91597,
      dec: -27.641914
    },
    {
      ra: 306.897955,
      dec: -27.591339
    },
    {
      ra: 321.831636,
      dec: -27.459667
    },
    {
      ra: 321.807775,
      dec: -24.959761
    },
    {
      ra: 329.770289,
      dec: -24.904041
    },
    {
      ra: 329.656162,
      dec: -8.4044
    },
    {
      ra: 321.668415,
      dec: -8.460295
    },
    {
      ra: 321.716451,
      dec: -14.460111
    },
    {
      ra: 309.743901,
      dec: -14.563136
    },
    {
      ra: 309.684648,
      dec: -8.563417
    }
  ]
}
