module.exports.getDiff = (source, compared) => {
  const result = {}

  Object.keys(source).forEach(key => {
    if (compared[key] !== undefined)
      source[key] != compared[key] && (result[key] = compared[key])
  })

  return result
}
module.exports.normalizeDTO = DTO => {
  return Object.fromEntries(Object.entries(DTO).map(([key, val]) => {
    !val && (val = null)
    return [key, val]
  }))
}