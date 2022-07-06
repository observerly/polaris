/**
 *
 * convertDegreeToDMS()
 *
 * @param degree (of type number)
 * @returns the degrees, minutes and seconds components of a degree value.
 */
export const convertDegreeToDMS = (degree: number): { deg: number; min: number; sec: number } => {
  const deg = Math.floor(Math.abs(degree))

  const min = Math.floor((Math.abs(degree) - deg) * 60)

  const sec = Math.round((Math.abs(degree) - deg - min / 60) * 3600 * 1000) / 1000

  return {
    deg: degree < 0 ? -deg : deg,
    min: min,
    sec: sec
  }
}
