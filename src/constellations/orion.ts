import { Constellation } from '../types'

export const orion: Constellation = {
  name: 'Orion',
  meaning: 'Orion (mythological character)',
  aster: [
    // ν Orionis to ξ Orionis
    {
      moveTo: {
        ra: 91.893,
        dec: 14.7685277778
      },
      lineTo: {
        ra: 92.985,
        dec: 14.2088055556
      }
    },
    // ν Orionis to χ¹ Orionis
    {
      moveTo: {
        ra: 91.893,
        dec: 14.7685277778
      },
      lineTo: {
        ra: 88.5961666667,
        dec: 20.2764166667
      }
    },
    // ξ Orionis to χ² Orionis:
    {
      moveTo: {
        ra: 92.985,
        dec: 14.2088055556
      },
      lineTo: {
        ra: 90.9799166667,
        dec: 20.1384722222
      }
    },
    // μ Orionis to ν Orionis
    {
      moveTo: {
        ra: 90.5957916667,
        dec: 9.6473611111
      },
      lineTo: {
        ra: 91.893,
        dec: 14.7685277778
      }
    },
    // μ Orionis to ξ Orionis:
    {
      moveTo: {
        ra: 90.5957916667,
        dec: 9.6473611111
      },
      lineTo: {
        ra: 92.985,
        dec: 14.2088055556
      }
    },
    // Betelgeuse to μ Orionis:
    {
      moveTo: {
        ra: 88.792939,
        dec: 7.407064
      },
      lineTo: {
        ra: 90.5957916667,
        dec: 9.6473611111
      }
    },
    // Betelgeuse to Meissa:
    {
      moveTo: {
        ra: 88.792939,
        dec: 7.407064
      },
      lineTo: {
        ra: 83.784486,
        dec: 9.934156
      }
    },
    // Meissa to Bellatrix:
    {
      moveTo: {
        ra: 83.784486,
        dec: 9.934156
      },
      lineTo: {
        ra: 81.282764,
        dec: 6.349703
      }
    },
    // Betelgeuse to Bellatrix
    {
      moveTo: {
        ra: 88.792939,
        dec: 7.407064
      },
      lineTo: {
        ra: 81.282764,
        dec: 6.349703
      }
    },
    // Betelgeuse to Alnitak
    {
      moveTo: {
        ra: 88.792939,
        dec: 7.407064
      },
      lineTo: {
        ra: 85.189694,
        dec: -1.942574
      }
    },
    // Alnitak to Saiph:
    {
      moveTo: {
        ra: 85.189694,
        dec: -1.942574
      },
      lineTo: {
        ra: 86.93912,
        dec: -9.669605
      }
    },
    // Alnitak to Alnilam:
    {
      moveTo: {
        ra: 85.189694,
        dec: -1.942574
      },
      lineTo: {
        ra: 84.053389,
        dec: -1.201919
      }
    },
    // Alnilam to Mintaka:
    {
      moveTo: {
        ra: 84.053389,
        dec: -1.201919
      },
      lineTo: {
        ra: 83.001667,
        dec: -0.299095
      }
    },
    // Mintaka to η Orionis:
    {
      moveTo: {
        ra: 83.001667,
        dec: -0.299095
      },
      lineTo: {
        ra: 81.11925,
        dec: -2.3971388889
      }
    },
    // η Orionis to Rigel:
    {
      moveTo: {
        ra: 81.11925,
        dec: -2.3971388889
      },
      lineTo: {
        ra: 78.634467,
        dec: -8.201638
      }
    },
    // Rigel to Saiph:
    {
      moveTo: {
        ra: 78.634467,
        dec: -8.201638
      },
      lineTo: {
        ra: 86.93912,
        dec: -9.669605
      }
    },
    // Bellatrix to Mintaka:
    {
      moveTo: {
        ra: 81.282764,
        dec: 6.349703
      },
      lineTo: {
        ra: 83.001667,
        dec: -0.299095
      }
    },
    // Bellatrix to Tabit:
    {
      moveTo: {
        ra: 81.282764,
        dec: 6.349703
      },
      lineTo: {
        ra: 72.460045,
        dec: 6.961275
      }
    },
    // Tabit to π⁴ Orionis:
    {
      moveTo: {
        ra: 72.460045,
        dec: 6.961275
      },
      lineTo: {
        ra: 72.8015416667,
        dec: 5.6051111111
      }
    },
    // π⁴ Orionis to π⁵ Orionis:
    {
      moveTo: {
        ra: 72.8015416667,
        dec: 5.6051111111
      },
      lineTo: {
        ra: 73.5629166667,
        dec: 2.4406666667
      }
    },
    // π⁵ Orionis to π⁶ Orionis:
    {
      moveTo: {
        ra: 73.5629166667,
        dec: 2.4406666667
      },
      lineTo: {
        ra: 74.6370833333,
        dec: 1.7140277778
      }
    },
    // Tabit to π² Orionis
    {
      moveTo: {
        ra: 72.460045,
        dec: 6.961275
      },
      lineTo: {
        ra: 72.653,
        dec: 8.90025
      }
    },
    // π² Orionis to π¹ Orionis:
    {
      moveTo: {
        ra: 72.653,
        dec: 8.90025
      },
      lineTo: {
        ra: 73.72375,
        dec: 10.1511388889
      }
    }
  ],
  boundaries: [
    {
      ra: 70.85236,
      dec: 0.237501
    },
    {
      ra: 71.034029,
      dec: 15.736463
    },
    {
      ra: 76.288926,
      dec: 15.675535
    },
    {
      ra: 76.295279,
      dec: 16.175499
    },
    {
      ra: 81.798712,
      dec: 16.110105
    },
    {
      ra: 81.792232,
      dec: 15.610145
    },
    {
      ra: 85.793646,
      dec: 15.56192
    },
    {
      ra: 85.755057,
      dec: 12.562155
    },
    {
      ra: 88.25537,
      dec: 12.531851
    },
    {
      ra: 88.327167,
      dec: 18.031416
    },
    {
      ra: 87.326982,
      dec: 18.043549
    },
    {
      ra: 87.393794,
      dec: 22.876472
    },
    {
      ra: 90.144037,
      dec: 22.843086
    },
    {
      ra: 90.125155,
      dec: 21.509872
    },
    {
      ra: 95.124127,
      dec: 21.449177
    },
    {
      ra: 95.069575,
      dec: 17.449507
    },
    {
      ra: 96.443917,
      dec: 17.432865
    },
    {
      ra: 96.372764,
      dec: 11.933297
    },
    {
      ra: 96.347665,
      dec: 9.933448
    },
    {
      ra: 95.348031,
      dec: 9.945548
    },
    {
      ra: 95.22568,
      dec: -0.05371
    },
    {
      ra: 95.177142,
      dec: -4.053416
    },
    {
      ra: 89.052372,
      dec: -3.979057
    },
    {
      ra: 88.96579,
      dec: -10.978532
    },
    {
      ra: 77.720031,
      dec: -10.843229
    },
    {
      ra: 77.804395,
      dec: -3.843729
    },
    {
      ra: 71.556359,
      dec: -3.77082
    },
    {
      ra: 71.602314,
      dec: 0.228916
    },
    {
      ra: 70.85236,
      dec: 0.237501
    }
  ]
}
