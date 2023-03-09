import {
  NOTIFICATION_ADD_SUCCESS,
  NOTIFICATIONS_FETCH_REQUEST,
  NOTIFICATIONS_FETCH_SUCCESS,
  NOTIFICATIONS_FETCH_FAILURE,
  NOTIFICATION_UPDATE_REQUEST,
  NOTIFICATION_UPDATE_SUCCESS,
  NOTIFICATION_UPDATE_FAILURE,
} from '../constants/ActionTypes'
import { APIEndpoints } from '../constants/constants'

export function fetchNotifications(page = 1, per = 10) {
  return {
    types: [
      NOTIFICATIONS_FETCH_REQUEST,
      NOTIFICATIONS_FETCH_SUCCESS,
      NOTIFICATIONS_FETCH_FAILURE
    ],
    payload: {
      request: {
        url: APIEndpoints.NOTIFICATIONS,
        params: {
          page,
          per,
        }
      }
    }
  }
}

export function markNotificationAsSeen(notificationId) {
  return {
    types: [
      NOTIFICATION_UPDATE_REQUEST,
      NOTIFICATION_UPDATE_SUCCESS,
      NOTIFICATION_UPDATE_FAILURE
    ],
    payload: {
      request: {
        method: 'put',
        url: `${APIEndpoints.NOTIFICATIONS}/${notificationId}/mark_as_seen`,
      }
    }
  }
}

export function userNotificationAdd(notification) {
  return {
    type: NOTIFICATION_ADD_SUCCESS,
    item: notification
  }
}
