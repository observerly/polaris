import { EquatorialCoordinate, HorizontalCoordinate } from '../types'

import { convertDegreeToRadian, convertRadianToDegree } from '../utilities'

/*
	getAngularSeparation()

	Gets the angular separation between two objects of known coordinates

	@param c1 - the first object's coordinate of type Coordinate { ϕ, θ }
	@param c2 - the second object's coordinate of type Coordinate { ϕ, θ }
	@returns the angular separation (in degrees)
*/
export const getAngularSeparation = (
  coord1: Partial<HorizontalCoordinate & EquatorialCoordinate>,
  coord2: Partial<HorizontalCoordinate & EquatorialCoordinate>
): number => {
  // Convert to radians:
  let ϕ1: number = 0
  let θ1: number = 0
  let ϕ2: number = 0
  let θ2: number = 0

  if (coord1.az && coord1.alt) {
    θ1 = convertDegreeToRadian(coord1.az)
    ϕ1 = convertDegreeToRadian(coord1.alt)
  }

  if (coord2.az && coord2.alt) {
    θ2 = convertDegreeToRadian(coord2.az)
    ϕ2 = convertDegreeToRadian(coord2.alt)
  }

  if (coord1.ra && coord1.dec) {
    θ1 = convertDegreeToRadian(coord1.ra)
    ϕ1 = convertDegreeToRadian(coord1.dec)
  }

  if (coord2.ra && coord2.dec) {
    θ2 = convertDegreeToRadian(coord2.ra)
    ϕ2 = convertDegreeToRadian(coord2.dec)
  }

  const x = Math.cos(ϕ1) * Math.sin(ϕ2) - Math.sin(ϕ1) * Math.cos(ϕ2) * Math.cos(θ2 - θ1)

  const y = Math.cos(ϕ2) * Math.sin(θ2 - θ1)

  const z = Math.sin(ϕ1) * Math.sin(ϕ2) + Math.cos(ϕ1) * Math.cos(ϕ2) * Math.cos(θ2 - θ1)

  return convertRadianToDegree(Math.atan2(Math.sqrt(x * x + y * y), z))
}
