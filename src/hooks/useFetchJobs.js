import { useReducer, useEffect } from 'react'
import axios from 'axios'

// for the cors issue https://cors-anywhere.herokuapp.com/

const url =
  'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'

const ACTIONS = {
  MAKE_REQUEST: 'MAKE_REQUEST',
  GET_DATA: 'GET_DATA',
  ERROR: 'ERROR',
}

const reducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case ACTIONS.MAKE_REQUEST:
      return { jobs: [], loading: true }
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, jobs: payload.jobs }
    case ACTIONS.ERROR:
      return { ...state, loading: false, error: payload.error, jobs: [] }

    default:
      return { ...state }
  }
}

const useFetchJobs = (params, page) => {
  const initialState = {
    jobs: [],
    loading: true,
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const cancelToken = axios.CancelToken.source()
    dispatch({ type: ACTIONS.MAKE_REQUEST })
    axios
      .get(url, {
        cancelToken: cancelToken.token,
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

    return () => {
      cancelToken.cancel()
    }
  }, [params, page])

  return {
    ...state,
  }
}

export { useFetchJobs }
