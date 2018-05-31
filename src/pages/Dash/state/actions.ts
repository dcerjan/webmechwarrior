export enum DashActionType {
  PUSH_MESSAGE = 'DashAction::PUSH_MESSAGE',
}

type PushMessage = (message: string) => { type: DashActionType.PUSH_MESSAGE, message: string }
export const pushMessage: PushMessage = (message) => ({ type: DashActionType.PUSH_MESSAGE, message })

export type DashAction =
  | ReturnType<PushMessage>
