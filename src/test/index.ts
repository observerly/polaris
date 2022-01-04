import type { EquatorialCoordinate } from '..'

// For testing we need to specify a date because most calculations are
// differential w.r.t a time component. We set it to the author's birthday:
export const datetime = new Date('2021-05-14T00:00:00.000+00:00')

//  For testing, we will fix the longitude and latitude to be Manua Kea, Hawaii, US
export const longitude = -155.468094

// Define a star at a known Equatorial Coordinate:
export const betelgeuse: EquatorialCoordinate = {
  ra: 88.7929583,
  dec: 7.4070639
}
