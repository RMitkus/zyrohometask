import {
  GET_DATA_FAIL,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_ALL_DATA_FAIL,
  GET_ALL_DATA_REQUEST,
  GET_ALL_DATA_SUCCESS,
} from '../constants/constants.js'
import axios from 'axios'

//Fetch paginated data
export const getData = (pageNumber = null) => async (dispatch) => {
  try {
    dispatch({ type: GET_DATA_REQUEST })

    const { data } = await axios.get(`/api/data?pageNumber=${pageNumber}`)

    dispatch({
      type: GET_DATA_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: GET_DATA_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

//Fetch all data
export const getAllData = (pageNumber) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_DATA_REQUEST })

    const { data } = await axios.get(`/api/data/all/${pageNumber}`)

    dispatch({
      type: GET_ALL_DATA_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: GET_ALL_DATA_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
