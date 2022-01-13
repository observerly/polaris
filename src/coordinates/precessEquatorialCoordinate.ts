import type { EquatorialCoordinate } from '../types'

import { convertDegreeToRadian, convertRadianToDegree } from '../utilities'

/**
 *
 * precessEquatorialCoordinate()
 *
 * @description "precess" an Equatorial Coordinates from one epoch to another.
 * @see Herget precession, see p. 9 of Publ. Cincinnati Obs., No. 24.
 *
 * @param equatorialCoordinate { ra, dec }, in degrees.
 * @param epochFrom
 * @param epochTo
 *
 * @returns the equatorial coordinate { ra, dec }, in dgrees, of the precessed input coordinate to epoch
 */
export const precessEquatorialCoordinate = (
  equatorialCoordinate: EquatorialCoordinate,
  epochFrom: number,
  epochTo: number
): EquatorialCoordinate => {
  const cdr = Math.PI / 180.0
  const csr = cdr / 3600.0

  let { ra, dec } = equatorialCoordinate

  ra = convertDegreeToRadian(ra)
  dec = convertDegreeToRadian(dec)

  const x1 = [Math.cos(dec) * Math.cos(ra), Math.cos(dec) * Math.sin(ra), Math.sin(dec)]

  const t = 0.001 * (epochTo - epochFrom)

  const st = 0.001 * (epochFrom - 1900.0)

  const a = csr * t * (23042.53 + st * (139.75 + 0.06 * st) + t * (30.23 - 0.27 * st + 18.0 * t))
  const b = csr * t * t * (79.27 + 0.66 * st + 0.32 * t) + a
  const c = csr * t * (20046.85 - st * (85.33 + 0.37 * st) + t * (-42.67 - 0.37 * st - 41.8 * t))

  const sina = Math.sin(a)
  const sinb = Math.sin(b)
  const sinc = Math.sin(c)
  const cosa = Math.cos(a)
  const cosb = Math.cos(b)
  const cosc = Math.cos(c)

  const r = [
    [0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0]
  ]

  r[0][0] = cosa * cosb * cosc - sina * sinb
  r[0][1] = -cosa * sinb - sina * cosb * cosc
  r[0][2] = -cosb * sinc
  r[1][0] = sina * cosb + cosa * sinb * cosc
  r[1][1] = cosa * cosb - sina * sinb * cosc
  r[1][2] = -sinb * sinc
  r[2][0] = cosa * sinc
  r[2][1] = -sina * sinc
  r[2][2] = cosc

  const x2 = [0.0, 0.0, 0.0]

  for (let i = 0; i < 3; i++) {
    x2[i] = r[i][0] * x1[0] + r[i][1] * x1[1] + r[i][2] * x1[2]
  }

  ra = Math.atan2(x2[1], x2[0])

  if (ra < 0.0) ra += 2.0 * Math.PI

  return {
    ra: convertRadianToDegree(ra),
    dec: convertRadianToDegree(Math.asin(x2[2]))
  }
}
