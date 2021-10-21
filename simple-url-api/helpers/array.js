exports.collectionPick = (collection, keys) => {
  return collection.reduce((acc, item) => {
    const result = {}

    keys.forEach(key => (result[key] = item[key]))

    acc.push(result)

    return acc
  }, [])
}