import { useReducer, useEffect } from 'react'
import axios from 'axios'
import { reducer, ACTIONS } from '../utils/reducer'
// for the cors issue https://cors-anywhere.herokuapp.com/

const url =
  'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'

const useFetchJobs = (params, page) => {
  const initialState = {
    jobs: [],
    loading: true,
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const cancelToken1 = axios.CancelToken.source()
    const cancelToken2 = axios.CancelToken.source()
    dispatch({ type: ACTIONS.MAKE_REQUEST })
    axios
      .get(url, {
        cancelToken: cancelToken1.token,
        params: {
          markdown: true,
          page: page,
          ...params,
        },
      })
      .then(({ data }) => {
        dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: data } })
      })
      .catch((error) => {
        if (axios.isCancel(error)) return

        dispatch({ type: ACTIONS.ERROR, payload: { error: error } })
      })

    axios
      .get(url, {
        cancelToken: cancelToken2.token,
        params: {
          markdown: true,
          page: page + 1,
          ...params,
        },
      })
      .then(({ data }) => {
        dispatch({
          type: ACTIONS.UPDATE_HAS_NEXT_PAGE,
          payload: { hasNextPage: data.length !== 0 },
        })
      })
      .catch((error) => {
        if (axios.isCancel(error)) return

        dispatch({ type: ACTIONS.ERROR, payload: { error: error } })
      })

    return () => {
      cancelToken1.cancel()
      cancelToken2.cancel()
    }
  }, [params, page])

  return {
    ...state,
  }
}

export { useFetchJobs }
