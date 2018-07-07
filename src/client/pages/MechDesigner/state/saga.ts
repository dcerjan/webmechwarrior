import { reset, SubmissionError } from 'redux-form'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import { MechChassisService } from '../../../services/MechChassisService'
import {
  loadMechChassisFailure,
  loadMechChassisSuccess,
  MechDesignerActionType,
  save,
} from './action'

import { MechChassis } from '../../../models/Mech'

function* saveMechChassis(action: any) {
  console.log(action)

  try {
    const response: MechChassis = yield call(MechChassisService.save, action.payload)
    console.log(response)

    yield put(save.success())
  } catch (error) {
    console.log(error)
    const formError = new SubmissionError({
      _error: error,
    })
    yield put(save.failure(formError))
  }
}

function* loadMechChassis(action: any) {
  try {
    const response = yield call(MechChassisService.list, action.id)
    yield put(loadMechChassisSuccess(response.data))
  } catch (error) {
    console.log(error)
    yield put(loadMechChassisFailure(error))
  }
}

function* clearMechChasis(action: any) {
  yield put(reset('Lab.Mech'))
}

export function* watcher() {
  yield all([
    takeLatest(MechDesignerActionType.LOAD_MECH_CHASSIS_REQUEST, loadMechChassis),
    takeLatest(save.REQUEST, saveMechChassis),
    takeLatest(MechDesignerActionType.CLEAR_MECH_CHASIS, clearMechChasis),
  ])
}
