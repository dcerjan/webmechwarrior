declare module 'redux-form-saga/lib' {
  import { ForkEffect } from 'redux-saga/effects';

  interface IActions {
    (values: any, dispatch: (action: any) => void, props: any): Promise<any>;
    success(data?: any): any;
    failure(data: any): any;
    REQUEST: string;
    SUCCESS: string;
    FAILURE: string;
  }

  export function formActionSaga(): IterableIterator<ForkEffect>;
  export function createFormAction(name: string): IActions;
}
