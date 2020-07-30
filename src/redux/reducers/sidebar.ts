import { TInferActions, TBaseThunk } from '../../types/types'

type TInitialState = typeof initialState

const initialState = {
  active: 'BossList',
}

export default (state = initialState, action: TActions): TInitialState => {
  switch (action.type) {
    case 'sidebar/SET_ACTIVE_CATEGORY':
      return {
        ...state,
        active: action.payload,
      }
    default:
      return state
  }
}

type TActions = TInferActions<typeof actions>

export const actions = {
  setActiveCategory: (payload: string) =>
    ({ type: 'sidebar/SET_ACTIVE_CATEGORY', payload } as const),
}

type TThunk = TBaseThunk<TActions>
