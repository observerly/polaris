import type { EquatorialCoordinate, GeographicCoordinate } from '../src'

// For testing we need to specify a date because most calculations are
// differential w.r.t a time component. We set it to the author's birthday:
export const datetime = new Date('2021-05-14T00:00:00.000+00:00')

//  For testing, we will fix the longitude to be Manua Kea, Hawaii, US
export const longitude = -155.468094

//  For testing, we will fix the longitude and latitude to be Manua Kea, Hawaii, US
export const observer: GeographicCoordinate = {
  latitude: 19.820611,
  longitude: -155.468094
}

// Define Alpheratz at a known Equatorial Coordinate:
export const alpheratz: EquatorialCoordinate = {
  ra: 2.096916,
  dec: 29.090431
}

// Define Arcturus at a known Equatorial Coordinate:
export const arcturus: EquatorialCoordinate = {
  ra: 213.9153,
  dec: 19.182409
}

// Define Betelgeuse at a known Equatorial Coordinate:
export const betelgeuse: EquatorialCoordinate = {
  ra: 88.7929583,
  dec: 7.4070639
}

// Define Regulus at a known Equatorial Coordinate:
export const regulus: EquatorialCoordinate = {
  ra: 152.092962,
  dec: 11.967209
}

// Define Vega at a known Equatorial Coordinate:
export const vega: EquatorialCoordinate = {
  ra: 279.234735,
  dec: 38.783689
}
