/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/polaris
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { type UseObserverParams } from '../observer'

import { type UseObservationParams, Observation } from './observation'

/*****************************************************************************************************************/

export type UseObservation = (
  params: UseObservationParams,
  options: UseObserverParams
) => Observation

/*****************************************************************************************************************/

/**
 *
 * reactive proxy factory for Observation
 *
 * @description
 *
 * @param params {UseObservationParams}
 * @returns {Observation}
 */
export const useObservation: UseObservation = (params, options) => {
  const { ra = -Infinity, dec = -Infinity } = params

  const observation = new Observation(
    {
      ra,
      dec
    },
    options
  )

  return new Proxy(observation, {
    set: function (target: Observation, key, value) {
      if (key === 'datetime') {
        target.datetime = value

        target.at({
          ...target
        })
      }

      if (key === 'longitude') {
        target.longitude = value

        target.at({
          ...target
        })
      }

      if (key === 'latitude') {
        target.latitude = value

        target.at({
          ...target
        })
      }

      if (key === 'elevation') {
        target.elevation = value

        target.at({
          ...target
        })
      }

      if (key === 'ra') {
        target.ra = value

        target.at({
          ...target
        })
      }

      if (key === 'dec') {
        target.dec = value

        target.at({
          ...target
        })
      }

      return Reflect.set(target, key, value)
    }
  })
}
