
export const replicate = <T>(object: T, count: number): T[] => {
  const ret: T[] = []
  for (let i = 0; i < count; ++i) {
    ret.push(object)
  }
  return ret
}

export const range = (start: number, end: number, increment: number = 1): number[] => {
  const ret: number[] = []

  for (let i = start; i < end; i += increment) {
    ret.push(i)
  }

  return ret
}

export const segment = (start: number, end: number, increment: number = 1): number[] => {
  const ret: number[] = []

  for (let i = start; i <= end; i += increment) {
    ret.push(i)
  }

  return ret
}

export const identity = <T>(val: T): T => val
