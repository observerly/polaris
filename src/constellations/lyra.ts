import { Constellation } from '../types'

export const lyra: Constellation = {
  name: 'Lyra',
  meaning: 'the harp (lyre)',
  aster: [
    // Vega to ε¹ Lyrae:
    {
      moveTo: {
        ra: 279.234735,
        dec: 38.783689
      },
      lineTo: {
        ra: 281.0845833333,
        dec: 39.6711111111
      }
    },
    // ε¹ Lyrae to ζ¹ Lyrae:
    {
      moveTo: {
        ra: 281.0845833333,
        dec: 39.6711111111
      },
      lineTo: {
        ra: 281.1930833333,
        dec: 37.6050555556
      }
    },
    // ζ¹ Lyrae to Vega:
    {
      moveTo: {
        ra: 281.1930833333,
        dec: 37.6050555556
      },
      lineTo: {
        ra: 279.234735,
        dec: 38.783689
      }
    },
    // ζ¹ Lyrae to δ¹ Lyrae:
    {
      moveTo: {
        ra: 281.1930833333,
        dec: 37.6050555556
      },
      lineTo: {
        ra: 283.4315,
        dec: 36.9717222222
      }
    },
    // δ¹ Lyrae to Sulafat:
    {
      moveTo: {
        ra: 283.4315,
        dec: 36.9717222222
      },
      lineTo: {
        ra: 284.735928,
        dec: 32.689557
      }
    },
    // Sulafat to β Lyrae:
    {
      moveTo: {
        ra: 284.735928,
        dec: 32.689557
      },
      lineTo: {
        ra: 282.505,
        dec: 33.3572222222
      }
    },
    // β Lyrae to ζ¹ Lyrae:
    {
      moveTo: {
        ra: 282.505,
        dec: 33.3572222222
      },
      lineTo: {
        ra: 281.1930833333,
        dec: 37.6050555556
      }
    }
  ],
  boundaries: [
    {
      ra: 284.277162,
      dec: 25.664141
    },
    {
      ra: 284.269867,
      dec: 26.164097
    },
    {
      ra: 276.762886,
      dec: 26.07435
    },
    {
      ra: 276.700773,
      dec: 30.073977
    },
    {
      ra: 273.824386,
      dec: 30.039156
    },
    {
      ra: 273.466874,
      dec: 47.536987
    },
    {
      ra: 274.342375,
      dec: 47.547604
    },
    {
      ra: 287.120648,
      dec: 47.699867
    },
    {
      ra: 288.37552,
      dec: 47.714394
    },
    {
      ra: 288.470307,
      dec: 43.714939
    },
    {
      ra: 291.983527,
      dec: 43.755035
    },
    {
      ra: 292.119655,
      dec: 36.755802
    },
    {
      ra: 291.492605,
      dec: 36.748714
    },
    {
      ra: 291.598778,
      dec: 30.249315
    },
    {
      ra: 290.095253,
      dec: 30.232197
    },
    {
      ra: 290.132646,
      dec: 27.732408
    },
    {
      ra: 290.161314,
      dec: 25.732574
    },
    {
      ra: 284.277162,
      dec: 25.664141
    }
  ]
}
