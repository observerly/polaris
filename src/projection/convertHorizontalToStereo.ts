import type { CartesianCoordinate, HorizontalCoordinate } from '../types'

import { convertDegreeToRadian } from '../utilities'

/**
 *
 * convertHorizontalToStereo()
 *
 * @param horizontalCoordinate
 * @param width
 * @param height
 * @returns the Cartesian Coordinate { x, y } conversion to the stereographic projection
 */
export const convertHorizontalToStereo = (
  horizontalCoordinate: HorizontalCoordinate,
  width: number,
  height: number
): CartesianCoordinate => {
  const { az, alt } = horizontalCoordinate

  const f = 0.42

  const sinalt1 = 0

  const cosalt1 = 1

  const cosaz = Math.cos(convertDegreeToRadian(az) - Math.PI)

  const sinaz = Math.sin(convertDegreeToRadian(az) - Math.PI)

  const sinalt = Math.sin(convertDegreeToRadian(alt))

  const cosalt = Math.cos(convertDegreeToRadian(alt))

  const k = 2 / (1 + sinalt1 * sinalt + cosalt1 * cosalt * cosaz)

  const x = width / 2 + f * k * height * cosalt * sinaz

  const y = height - f * k * height * (cosalt1 * sinalt - sinalt1 * cosalt * cosaz)

  return {
    x: x,
    y: y
  }
}
