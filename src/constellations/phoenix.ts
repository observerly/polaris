import { Constellation } from '../types'

export const phoenix: Constellation = {
  name: 'Phoenix',
  meaning: 'Phoenix (mythological immortal bird)',
  aster: [
    // Ankaa to β Phoenicis:
    {
      moveTo: {
        ra: 6.570939,
        dec: -42.306084
      },
      lineTo: {
        ra: 16.5212916667,
        dec: -46.7185
      }
    },
    // β Phoenicis to γ Phoenicis:
    {
      moveTo: {
        ra: 16.5212916667,
        dec: -46.7185
      },
      lineTo: {
        ra: 22.0914166667,
        dec: -43.3177222222
      }
    },
    // γ Phoenicis to δ Phoenicis:
    {
      moveTo: {
        ra: 22.0914166667,
        dec: -43.3177222222
      },
      lineTo: {
        ra: 22.8124166667,
        dec: -49.0730833333
      }
    },
    // δ Phoenicis to Wurren:
    {
      moveTo: {
        ra: 22.8124166667,
        dec: -49.0730833333
      },
      lineTo: {
        ra: 17.096173,
        dec: -55.245758
      }
    },
    // Wurren to β Phoenicis:
    {
      moveTo: {
        ra: 17.096173,
        dec: -55.245758
      },
      lineTo: {
        ra: 16.5212916667,
        dec: -46.7185
      }
    },
    // β Phoenicis to ε Phoenicis:
    {
      moveTo: {
        ra: 16.5212916667,
        dec: -46.7185
      },
      lineTo: {
        ra: 2.35225,
        dec: -45.747
      }
    },
    // ε Phoenicis to Ankaa:
    {
      moveTo: {
        ra: 2.35225,
        dec: -45.747
      },
      lineTo: {
        ra: 6.570939,
        dec: -42.306084
      }
    }
  ],
  boundaries: [
    {
      ra: 351.692705,
      dec: -39.312759
    },
    {
      ra: 351.768522,
      dec: -56.312687
    },
    {
      ra: 351.778394,
      dec: -57.812679
    },
    {
      ra: 21.206229,
      dec: -57.848415
    },
    {
      ra: 21.273263,
      dec: -52.84856
    },
    {
      ra: 24.967355,
      dec: -52.865856
    },
    {
      ra: 24.993847,
      dec: -50.865921
    },
    {
      ra: 28.693257,
      dec: -50.885922
    },
    {
      ra: 28.738323,
      dec: -47.552723
    },
    {
      ra: 36.152948,
      dec: -47.600494
    },
    {
      ra: 36.264014,
      dec: -39.434216
    },
    {
      ra: 26.350728,
      dec: -39.372623
    },
    {
      ra: 351.692705,
      dec: -39.312759
    }
  ]
}
