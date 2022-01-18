/**
 *
 * convertDegreeToDMS()
 *
 * @param degree (of type number)
 * @returns the degrees, minutes and seconds components of a degree value.
 */
export const convertDegreeToDMS = (degree: number): { deg: number; min: number; sec: number } => {
  degree = Math.abs(degree)

  const deg = Math.floor(degree)

  const min = Math.floor((degree - deg) * 60)

  const sec = Math.round((degree - deg - min / 60) * 3600 * 1000) / 1000

  return {
    deg: deg,
    min: min,
    sec: sec
  }
}
