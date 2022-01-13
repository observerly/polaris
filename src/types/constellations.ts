import { EquatorialCoordinate } from './coordinates'

export interface Aster {
  /**
   *
   * aster line moveTo coordinate { ra, dec }
   *
   */
  moveTo: EquatorialCoordinate
  /**
   *
   * aster line lineTo coordinate { ra, dec }
   *
   */
  lineTo: EquatorialCoordinate
}

export interface Constellation {
  /**
   *
   * Constellation name
   *
   */
  name: string
  /**
   *
   * Constellation meaning (Latin and/or Greek)
   *
   */
  meaning: string
  /**
   *
   * Constellation central coordinate { ra, dec }
   *
   */
  centrum?: EquatorialCoordinate
  /**
   *
   * Constellation lines ("asters")
   *
   */
  aster: Aster[]
  /**
   *
   * Constellation boundary coordinates { ra, dec }
   *
   */
  boundaries: EquatorialCoordinate[]
}

export interface ConstellationNancyRoman {
  /**
   *
   * Right Ascension lower bound lookup
   *
   */
  RAl: number
  /**
   *
   * Right Ascension upper bound lookup
   *
   */
  RAu: number
  /**
   *
   * Declination lower bound lookup
   *
   */
  decl: number
  /**
   *
   * The name of the associated constellation boundary lookup
   *
   */
  constellation: string
}
