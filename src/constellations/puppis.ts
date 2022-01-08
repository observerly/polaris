import { Constellation } from '../types'

export const puppis: Constellation = {
  name: 'Puppis',
  meaning: "a ship's poop deck",
  aster: [
    // Naos to Tureis:
    {
      moveTo: {
        ra: 120.896031,
        dec: -40.003148
      },
      lineTo: {
        ra: 121.886037,
        dec: -24.304324
      }
    },
    // Tureis to Azmidi:
    {
      moveTo: {
        ra: 121.886037,
        dec: -24.304324
      },
      lineTo: {
        ra: 117.323563,
        dec: -24.859786
      }
    },
    // Azmidi to κ¹ Puppis:
    {
      moveTo: {
        ra: 117.323563,
        dec: -24.859786
      },
      lineTo: {
        ra: 114.7078333333,
        dec: -26.8038888889
      }
    },
    // Azmidi to l Puppis:
    {
      moveTo: {
        ra: 117.323563,
        dec: -24.859786
      },
      lineTo: {
        ra: 115.9519583333,
        dec: -28.9548333333
      }
    },
    // κ¹ Puppis to p Puppus:
    {
      moveTo: {
        ra: 114.7078333333,
        dec: -26.8038888889
      },
      lineTo: {
        ra: 113.8455833333,
        dec: -28.3692777778
      }
    },
    // l Puppis to p Puppis:
    {
      moveTo: {
        ra: 115.9519583333,
        dec: -28.9548333333
      },
      lineTo: {
        ra: 113.8455833333,
        dec: -28.3692777778
      }
    },
    // p Puppis to π Puppis:
    {
      moveTo: {
        ra: 113.8455833333,
        dec: -28.3692777778
      },
      lineTo: {
        ra: 109.2856666667,
        dec: -37.0975
      }
    },
    // π Puppis to ν Puppis:
    {
      moveTo: {
        ra: 109.2856666667,
        dec: -37.0975
      },
      lineTo: {
        ra: 99.4402916667,
        dec: -43.1959166667
      }
    }
  ],
  boundaries: [
    {
      ra: 111.9734,
      dec: -11.252145
    },
    {
      ra: 111.677199,
      dec: -33.250469
    },
    {
      ra: 99.90386,
      dec: -33.112816
    },
    {
      ra: 99.708916,
      dec: -43.111649
    },
    {
      ra: 90.951777,
      dec: -43.005779
    },
    {
      ra: 90.748902,
      dec: -50.754547
    },
    {
      ra: 120.861698,
      dec: -51.102585
    },
    {
      ra: 121.038279,
      dec: -43.353504
    },
    {
      ra: 126.572313,
      dec: -43.409519
    },
    {
      ra: 126.677799,
      dec: -37.160038
    },
    {
      ra: 126.927095,
      dec: -17.411257
    },
    {
      ra: 126.98978,
      dec: -11.411565
    },
    {
      ra: 122.734179,
      dec: -11.368799
    },
    {
      ra: 111.9734,
      dec: -11.252145
    }
  ]
}
