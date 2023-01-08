/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/polaris
// @license        Copyright © 2021-2022 observerly

/*****************************************************************************************************************/

import { J2000, getLocalSiderealTime, getJulianDate, getModifiedJulianDate } from '../epoch'

/*****************************************************************************************************************/

export interface UseObserverParams {
  /**
   *
   * Longitude coordinate {in degrees} of the observer
   *
   * @default 0
   * @type {number}
   * @memberof UseObserverParams
   *
   */
  longitude?: number
  /**
   *
   * Latitude coordinate {in degrees} of the observer
   *
   * @default 0
   * @type {number}
   * @memberof UseObserverParams
   *
   */
  latitude?: number
  /**
   *
   * Elevation above sea level {in metres} of the observer
   *
   * @default 0
   * @type {number}
   * @memberof UseObserverParams
   *
   */
  elevation?: number
  /**
   *
   * Datetime {in UTC} of the observation
   *
   * @default new Date()
   * @type {Date}
   * @memberof UseObserverParams
   *
   */
  datetime?: Date
}

/*****************************************************************************************************************/

/**
 *
 * @class Observer
 * @description A class to represent an observer's location (geographic longitude, latitude
 * and elevation above sea level) and datetime (in Universal Coordinated Time, UTC) on Earth
 *
 */
export class Observer extends Object {
  public datetime: Date = new Date()

  public epoch: number = J2000

  public equinox: number = 2000

  public longitude: number = 0

  public latitude: number = 0

  public elevation: number = 0

  public JD: number = getJulianDate(this.datetime)

  public MJD: number = getModifiedJulianDate(this.datetime)

  public LST: number = getLocalSiderealTime(this.datetime, this.longitude)

  constructor({
    datetime = new Date(),
    longitude = 0,
    latitude = 0,
    elevation = 0
  }: UseObserverParams) {
    super()

    this.setDatetime(datetime)
    this.setLongitude(longitude)
    this.setLatitude(latitude)
    this.setElevation(elevation)

    // Set the Julian Date of the Observer
    this.JD = getJulianDate(this.datetime)

    // Set the Modified Julian Date of the Observer:
    this.MJD = getModifiedJulianDate(this.datetime)

    // Set the Local Sidereal Time of the Observer:
    this.LST = getLocalSiderealTime(this.datetime, this.longitude)
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

  public setJD(JD: number) {
    this.JD = JD
  }

  public setMJD(MJD: number) {
    this.MJD = MJD
  }

  public setLST(LST: number) {
    this.LST = LST
  }
}
