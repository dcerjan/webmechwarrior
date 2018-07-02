
export const error = (namespace: string) =>
  (error: string) =>
    console.error(`[${namespace}]`, error)
