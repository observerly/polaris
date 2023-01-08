/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/polaris
// @license        Copyright © 2021-2022 observerly

/*****************************************************************************************************************/

import { Observer, UseObserverParams } from './observer'

import { getLocalSiderealTime, getJulianDate, getModifiedJulianDate } from '../epoch'

/*****************************************************************************************************************/

export type UseObserver = (params: UseObserverParams) => Observer

/*****************************************************************************************************************/

/**
 *
 * reactive proxy factory for Observer
 *
 * @description
 *
 * @param params {UseObserverParams}
 * @returns {Observer}
 */
export const useObserver: UseObserver = params => {
  const { datetime = new Date(), longitude = 0, latitude = 0, elevation = 0 } = params

  const observer = new Observer({
    datetime,
    longitude,
    latitude,
    elevation
  })

  return new Proxy(observer, {
    set: function (target: Observer, key, value) {
      if (key === 'datetime') {
        target.setDatetime(value)
        target.setJD(getJulianDate(target.datetime))
        target.setMJD(getModifiedJulianDate(target.datetime))
      }

      if (key === 'latitude') {
        target.setLatitude(value)
      }

      if (key === 'longitude') {
        target.setLongitude(value)
        target.setLST(getLocalSiderealTime(target.datetime, target.longitude))
      }

      if (key === 'elevation') {
        target.setElevation(value)
      }

      return Reflect.set(target, key, value)
    }
  })
}

/*****************************************************************************************************************/
