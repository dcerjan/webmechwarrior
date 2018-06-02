import { lens } from 'lens.ts'

export interface IQuirk {
  readonly name: string,
}

export const Quirk = (props: IQuirk): Readonly<IQuirk> => ({
  ...props,
})

export const QuirkL = lens<IQuirk>()
