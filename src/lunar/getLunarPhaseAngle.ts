import { convertRadianToDegree } from '../'

/**
 *
 * getLunarPhaseAngle
 *
 * @param D lunar mean elongation in radians
 * @param S solar mean anomaly in radians
 * @param M lunar mean anomaly in radians
 *
 * @returns the lunar phase angle for the orbital paramaters provided
 */
export const getLunarPhaseAngle = (D: number, S: number, M: number) => {
  // Lunar Phase Angle:
  return (
    180 -
    convertRadianToDegree(D) -
    6.289 * Math.sin(M) +
    2.1 * Math.sin(S) -
    1.274 * Math.sin(2 * D - M) -
    0.658 * Math.sin(D) -
    0.214 * Math.sin(2 * M) -
    0.11 * Math.sin(D)
  )
}
