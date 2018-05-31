import { lens } from 'lens.ts'

export interface ITrait {
  readonly name: string,
}

export const Trait = (props: ITrait): Readonly<ITrait> => ({
  ...props,
});

export const TraitL = lens<ITrait>();
