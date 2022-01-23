import type { CartesianCoordinate, HorizontalCoordinate } from '../types'

import { convertRadianToDegree } from '../utilities'

/**
 *
 * convertStereoToHorizontal()
 *
 * @param cartesianCoordinate representing the { x, y } position of a particular point to transform.
 * @param width (of type number) representing the width of the projected "canvas"
 * @param height (of type number) representing the height of the projected "canvas"
 * @returns the Horizontal Coordinate { alt, az } conversion from the stereographic projection
 */
export const convertStereoToHorizontal = (
  cartesianCoordinate: CartesianCoordinate,
  width: number,
  height: number
): HorizontalCoordinate => {
  const { x, y } = cartesianCoordinate

  const f = 0.42

  const sinalt1 = 0

  const cosalt1 = 1

  const X = (x - width / 2) / height

  const Y = (height - y) / height

  const P = Math.sqrt(Math.pow(X, 2) + Math.pow(Y, 2))

  const c = 2 * Math.atan2(P, 2 * f)

  const alt = Math.asin(Math.cos(c) * sinalt1 + (Y * Math.sin(c) * cosalt1) / P)

  const az =
    Math.PI + Math.atan2(X * Math.sin(c), P * cosalt1 * Math.cos(c) - Y * sinalt1 * Math.sin(c))

  return {
    az: convertRadianToDegree(az),
    alt: convertRadianToDegree(alt)
  }
}
