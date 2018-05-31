
export const replicate = <T>(object: T, count: number): T[] => {
  const ret: T[] = []
  for (let i = 0; i < count; ++i) {
    ret.push(object)
  }
  return ret
}
