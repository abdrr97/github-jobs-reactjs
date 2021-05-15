const ACTIONS = {
  MAKE_REQUEST: 'MAKE_REQUEST',
  GET_DATA: 'GET_DATA',
  ERROR: 'ERROR',
  UPDATE_HAS_NEXT_PAGE: 'UPDATE_HAS_NEXT_PAGE',
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
    case ACTIONS.UPDATE_HAS_NEXT_PAGE:
      return { ...state, hasNextPage: payload.hasNextPage }
    default:
      return { ...state }
  }
}

export { reducer, ACTIONS }
