import { lens } from 'lens.ts'
import { GyroType } from '../../Tables/GyroTable'

export interface IGyro {
  name: string,
  manufacturer: string,
  type: GyroType,
}

export const Gyro = (props: IGyro): Readonly<IGyro> => ({
  ...props,
})

export const EngineL = lens<IGyro>()
