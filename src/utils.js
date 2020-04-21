export const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const formatRating = rating => {
  if (rating < 1000) return rating.toString()

  return `${(rating / 1000).toFixed(1)}k`
}
