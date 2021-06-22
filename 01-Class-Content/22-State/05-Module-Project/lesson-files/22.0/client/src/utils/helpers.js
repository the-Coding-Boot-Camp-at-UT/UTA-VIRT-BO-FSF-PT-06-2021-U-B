export function pluralize(name, count) {
  if (count === 1) {
    return name
  }
  return name + 's'
}
