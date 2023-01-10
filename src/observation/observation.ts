/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/polaris
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { convertEquatorialToHorizontal } from '../coordinates'

import { EquatorialCoordinate, HorizontalCoordinate } from '../types'

import { type UseObserverParams } from '../observer'
import { getAirmass } from './getAirmass'

/*****************************************************************************************************************/

export interface UseObservationParams {
  /**
   *
   * Right Ascension coordinate {in degrees} of the observation target
   *
   * @default -Infinity
   * @type {number}
   * @memberof UseObserverationParams
   *
   */
  ra?: number
  /**
   *
   * Declination coordinate {in degrees} of the observation target
   *
   * @default -Infinity
   * @type {number}
   * @memberof UseObserverationParams
   *
   */
  dec?: number
}

/*****************************************************************************************************************/

/**
 *
 * @class Observation
 * @description A class to represent an observation of an astronomical target { ra, dec } at a specific
 * location (geographic longitude, latitude and elevation above sea level) and datetime (in Universal
 * Coordinated Time, UTC) on Earth.
 *
 */
export class Observation extends Object {
  public datetime: Date = new Date()

  public longitude: number = 0

  public latitude: number = 0

  public elevation: number = 0

  public ra: number = -Infinity

  public dec: number = -Infinity

  public az: number = -Infinity

  public alt: number = -Infinity

  public airmass = 1.0

  constructor(
    { ra = -Infinity, dec = -Infinity }: UseObservationParams,
    { datetime = new Date(), longitude = 0, latitude = 0, elevation = 0 }: UseObserverParams
  ) {
    super()

    this.setDatetime(datetime)
    this.setLongitude(longitude)
    this.setLatitude(latitude)
    this.setElevation(elevation)

    this.setEquatorialCoordinates({
      ra,
      dec
    })

    this.setHorizontalCoordinates(
      convertEquatorialToHorizontal(
        {
          ra,
          dec
        },
        {
          longitude,
          latitude
        },
        datetime
      )
    )

    this.setAirmass(getAirmass(this.alt))
  }

  /**
   *
   * @param observer
   */
  public at(observer: UseObserverParams) {
    const { datetime, longitude, latitude, elevation } = observer

    if (datetime) this.setDatetime(datetime)
    if (longitude) this.setLongitude(longitude)
    if (latitude) this.setLatitude(latitude)
    if (elevation) this.setElevation(elevation)

    this.setHorizontalCoordinates(
      convertEquatorialToHorizontal(
        {
          ra: this.ra,
          dec: this.dec
        },
        {
          longitude: this.longitude,
          latitude: this.latitude
        },
        this.datetime
      )
    )
  }

  public setDatetime(datetime: Date) {
    // Ensure datetime is in UTC:
    this.datetime = new Date(
      Date.UTC(
        datetime.getUTCFullYear(),
        datetime.getUTCMonth(),
        datetime.getUTCDate(),
        datetime.getUTCHours(),
        datetime.getUTCMinutes(),
        datetime.getUTCSeconds(),
        datetime.getUTCMilliseconds()
      )
    )
  }

  public setLongitude(longitude: number) {
    this.longitude = longitude
  }

  public setLatitude(latitude: number) {
    this.latitude = latitude
  }

  public setElevation(elevation: number) {
    this.elevation = elevation
  }

  public setEquatorialCoordinates(equatorialCoordinate: EquatorialCoordinate) {
    const { ra, dec } = equatorialCoordinate
    this.ra = ra
    this.dec = dec
  }

  public getEquatorialCoordinates(): EquatorialCoordinate {
    return {
      ra: this.ra,
      dec: this.dec
    }
  }

  public setHorizontalCoordinates(horizontalCoordinate: HorizontalCoordinate) {
    const { az, alt } = horizontalCoordinate
    this.az = az
    this.alt = alt
  }

  public getHorizontalCoordinates(): HorizontalCoordinate {
    return {
      az: this.az,
      alt: this.alt
    }
  }

  public setAirmass(airmass: number) {
    this.airmass = airmass
  }

  public getAirmass(): number {
    return this.airmass
  }
}
