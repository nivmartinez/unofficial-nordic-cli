const camelToSnakeCase = str => str.replace(/[A-Z]/g, (letter, index) => {
  if (index === 0) {
    return letter.toLowerCase()
  } else {
    return `-${letter.toLowerCase()}`
  }
})

const spaceToSnakeCase = str => str.replace(/\s/g, () => '-')

const hasWhiteSpace = (s) => /\s/g.test(s)

export const snakeCaseToCamel = (s) => {
  const camelCase = s.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace('-', '')
      .replace('_', '')
  })

  const [firstLetter, ...rest] = camelCase

  return {
    upper: firstLetter.toUpperCase() + rest.join(''),
    lower: camelCase
  }
}

export const formatName = (name) => {
  if (!name) return name

  let formattedName = name
  if (hasWhiteSpace(name)) {
    formattedName = spaceToSnakeCase(name)
  }

  return camelToSnakeCase(formattedName)
}
