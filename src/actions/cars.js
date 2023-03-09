import {
  CAR_INITIALIZE,
  CARS_FETCH_REQUEST,
  CARS_FETCH_SUCCESS,
  CARS_FETCH_FAILURE,
  CAR_FETCH_REQUEST,
  CAR_FETCH_SUCCESS,
  CAR_FETCH_FAILURE,
  CAR_OPTIONS_FETCH_REQUEST,
  CAR_OPTIONS_FETCH_SUCCESS,
  CAR_OPTIONS_FETCH_FAILURE,
  CAR_CREATE_REQUEST,
  CAR_CREATE_SUCCESS,
  CAR_CREATE_FAILURE,
  CAR_UPDATE_REQUEST,
  CAR_UPDATE_SUCCESS,
  CAR_UPDATE_FAILURE,
} from '../constants/ActionTypes'
import { APIEndpoints } from '../constants/constants'

export function fetchCars(user_id, page = 1, per = 10) {
  return {
    types: [
      CARS_FETCH_REQUEST,
      CARS_FETCH_SUCCESS,
      CARS_FETCH_FAILURE
    ],
    payload: {
      request: {
        url: APIEndpoints.CARS,
        params: {
          page,
          per,
          user_id,
        }
      }
    }
  }
}

export function fetchCar(carId) {
  return {
    types: [
      CAR_FETCH_REQUEST,
      CAR_FETCH_SUCCESS,
      CAR_FETCH_FAILURE
    ],
    payload: {
      request: {
        url: `${APIEndpoints.CARS}/${carId}`,
      }
    }
  }
}

export function fetchCarsOptions() {
  return {
    types: [
      CAR_OPTIONS_FETCH_REQUEST,
      CAR_OPTIONS_FETCH_SUCCESS,
      CAR_OPTIONS_FETCH_FAILURE
    ],
    payload: {
      request: {
        url: `${APIEndpoints.CARS}/options`,
      }
    }
  }
}

export function createCar(body) {
  return {
    types: [
      CAR_CREATE_REQUEST,
      CAR_CREATE_SUCCESS,
      CAR_CREATE_FAILURE
    ],
    payload: {
      request: {
        method: 'post',
        url: APIEndpoints.CARS,
        data: body,
        simple: false
      }
    }
  }
}

export function updateCar(body, carId) {
  return {
    types: [
      CAR_UPDATE_REQUEST,
      CAR_UPDATE_SUCCESS,
      CAR_UPDATE_FAILURE
    ],
    payload: {
      request: {
        method: 'put',
        url: `${APIEndpoints.CARS}/${carId}`,
        data: body,
        simple: false
      }
    }
  }
}

export function initializeCar() {
  return {
    type: CAR_INITIALIZE
  }
}
