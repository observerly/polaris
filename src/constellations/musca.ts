import { Constellation } from '../types'

export const musca: Constellation = {
  name: 'Musca',
  meaning: 'the fly',
  aster: [
    // α Muscae 8 to β Muscae:
    {
      moveTo: {
        ra: 189.2961666667,
        dec: -69.135527777
      },
      lineTo: {
        ra: 191.5702916667,
        dec: -68.1080833333
      }
    },
    // β Muscae to δ Muscae:
    {
      moveTo: {
        ra: 191.5702916667,
        dec: -68.1080833333
      },
      lineTo: {
        ra: 195.56575,
        dec: -71.5488055556
      }
    },
    // δ Muscae to γ Muscae:
    {
      moveTo: {
        ra: 195.56575,
        dec: -71.5488055556
      },
      lineTo: {
        ra: 188.117125,
        dec: -72.1329722222
      }
    },
    // γ Muscae to α Muscae:
    {
      moveTo: {
        ra: 188.117125,
        dec: -72.1329722222
      },
      lineTo: {
        ra: 189.2961666667,
        dec: -69.135527777
      }
    },
    // α Muscae to ε Muscae:
    {
      moveTo: {
        ra: 189.2961666667,
        dec: -69.135527777
      },
      lineTo: {
        ra: 184.3943333333,
        dec: -67.9606666667
      }
    },
    // ε Muscae to λ Muscae:
    {
      moveTo: {
        ra: 184.3943333333,
        dec: -67.9606666667
      },
      lineTo: {
        ra: 176.402375,
        dec: -66.7288333333
      }
    }
  ],
  boundaries: [
    {
      ra: 170.084811,
      dec: -64.684265
    },
    {
      ra: 169.856973,
      dec: -75.684013
    },
    {
      ra: 207.781434,
      dec: -75.623596
    },
    {
      ra: 207.46087,
      dec: -70.624443
    },
    {
      ra: 207.268023,
      dec: -65.624954
    },
    {
      ra: 204.70748,
      dec: -65.637878
    },
    {
      ra: 204.680286,
      dec: -64.63794
    },
    {
      ra: 194.43838,
      dec: -64.676964
    },
    {
      ra: 179.057364,
      dec: -64.695785
    },
    {
      ra: 170.084811,
      dec: -64.684265
    }
  ]
}
