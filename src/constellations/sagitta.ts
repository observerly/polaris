import { Constellation } from '../types'

export const sagitta: Constellation = {
  name: 'Sagitta',
  meaning: 'the arrow',
  aster: [
    // γ Sagittae to δ Sagittae:
    {
      moveTo: {
        ra: 299.689125,
        dec: 19.4920833333
      },
      lineTo: {
        ra: 296.84625,
        dec: 18.5336111111
      }
    },
    // δ Sagittae to Sham:
    {
      moveTo: {
        ra: 296.84625,
        dec: 18.5336111111
      },
      lineTo: {
        ra: 295.024133,
        dec: 18.013891
      }
    },
    // δ Sagittae to β Sagittae:
    {
      moveTo: {
        ra: 296.84625,
        dec: 18.5336111111
      },
      lineTo: {
        ra: 295.2622083333,
        dec: 17.4761111111
      }
    }
  ],
  boundaries: [
    {
      ra: 284.373636,
      dec: 18.664709
    },
    {
      ra: 284.339133,
      dec: 21.247835
    },
    {
      ra: 290.096311,
      dec: 21.314816
    },
    {
      ra: 290.121288,
      dec: 19.398298
    },
    {
      ra: 298.885689,
      dec: 19.495539
    },
    {
      ra: 298.860255,
      dec: 21.578733
    },
    {
      ra: 305.125409,
      dec: 21.643656
    },
    {
      ra: 305.134049,
      dec: 20.8937
    },
    {
      ra: 305.186949,
      dec: 16.143963
    },
    {
      ra: 303.558998,
      dec: 16.127516
    },
    {
      ra: 298.926,
      dec: 16.079084
    },
    {
      ra: 298.921165,
      dec: 16.495729
    },
    {
      ra: 286.405477,
      dec: 16.355068
    },
    {
      ra: 286.375494,
      dec: 18.688223
    },
    {
      ra: 284.373636,
      dec: 18.664709
    }
  ]
}
