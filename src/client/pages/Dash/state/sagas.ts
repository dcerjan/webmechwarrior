import { all, call, put, takeLatest } from 'redux-saga/effects'

import { MechChassisService } from '../../../services/MechChassisService'
import { DashActionType, listMechChassisFailure, listMechChassisSuccess } from './actions'

function* listMechs(action: any) {
  try {
    const response = yield call(MechChassisService.list, action.payload)

    yield put(listMechChassisSuccess(response.data))
  } catch (error) {
    console.log(error)
    yield put(listMechChassisFailure(error))
  }
}

export function* watcher() {
  yield all([
    takeLatest(DashActionType.LIST_MECH_CHASSIS_REQUEST, listMechs)
  ])
}
