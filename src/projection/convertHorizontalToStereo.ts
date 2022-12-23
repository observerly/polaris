import type { CartesianCoordinate, HorizontalCoordinate } from '../types'

import { convertDegreeToRadian } from '../utilities'

/**
 *
 * convertHorizontalToStereo()
 *
 * @param horizontalCoordinate representing the { alt, az } position of a particular observed body.
 * @param horizontalFocusCoordinate representing the { alt, az } position of the "center" of the projected "canvas".
 * @param focus (of type number) representing the focal length of the stereographic projection.
 * @param width (of type number) representing the width of the projected "canvas"
 * @param height (of type number) representing the height of the projected "canvas"
 * @returns the Cartesian Coordinate { x, y } conversion to the stereographic projection
 */
export const convertHorizontalToStereo = (
  horizontalCoordinate: HorizontalCoordinate,
  horizontalFocusCoordinate: HorizontalCoordinate,
  focus: number,
  width: number,
  height: number
): CartesianCoordinate => {
  const { az, alt } = horizontalCoordinate

  const { alt: altCentroid } = horizontalFocusCoordinate

  // We're dealing with a perfect sphere of radius 1:
  const R = 1

  // The focal length of the projection:
  const f = focus

  // The following is 0 for the polar "zenith", i.e. (0, 0):
  const sinalt1 = Math.sin(convertDegreeToRadian(altCentroid))

  // The following is 1 for the poalr "zenith", i.e. (0, 0):
  const cosalt1 = Math.cos(convertDegreeToRadian(altCentroid))

  const cosaz = Math.cos(convertDegreeToRadian(az) - Math.PI)

  const sinaz = Math.sin(convertDegreeToRadian(az) - Math.PI)

  const sinalt = Math.sin(convertDegreeToRadian(alt))

  const cosalt = Math.cos(convertDegreeToRadian(alt))

  const k = (2 * R) / (1 + sinalt1 * sinalt + cosalt1 * cosalt * cosaz)

  const x = width / 2 + f * k * height * cosalt * sinaz

  const y = height - f * k * height * (cosalt1 * sinalt - sinalt1 * cosalt * cosaz)

  return {
    x: x,
    y: y
  }
}
