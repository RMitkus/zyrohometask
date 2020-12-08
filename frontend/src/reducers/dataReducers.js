import {
  GET_DATA_FAIL,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_ALL_DATA_FAIL,
  GET_ALL_DATA_REQUEST,
  GET_ALL_DATA_SUCCESS,
  GET_ALL_DATA_RESET,
} from '../constants/constants.js'

export const getDataReducer = (state = { data: {} }, action) => {
  switch (action.type) {
    case GET_DATA_REQUEST:
      return { loading: true, data: {} }
    case GET_DATA_SUCCESS:
      return {
        loading: false,
        infoData: action.payload.infoData,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case GET_DATA_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const getAllDataReducer = (state = { infoAllData: {} }, action) => {
  switch (action.type) {
    case GET_ALL_DATA_REQUEST:
      return { loading: true, data: {} }
    case GET_ALL_DATA_SUCCESS:
      return {
        loading: false,
        allInfoData: action.payload.infoData,
      }
    case GET_ALL_DATA_FAIL:
      return { loading: false, error: action.payload }
    case GET_ALL_DATA_RESET:
      return {}
    default:
      return state
  }
}
