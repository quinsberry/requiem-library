import { TInferActions, TBaseThunk } from '../../types/types'

type TInitialState = typeof initialState

const initialState = {
  activeCategory: 'easy',
  isLoading: false,
}

export default (state = initialState, action: TActions): TInitialState => {
  switch (action.type) {
    case 'bosses/SET_ACTIVE_CATEGORY':
      return {
        ...state,
        activeCategory: action.payload,
      }
    case 'bosses/SET_IS_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      }
    default:
      return state
  }
}

type TActions = TInferActions<typeof actions>

export const actions = {
  setActiveCategory: (payload: string) =>
    ({ type: 'bosses/SET_ACTIVE_CATEGORY', payload } as const),
  setIsLoading: (payload: boolean) => ({ type: 'bosses/SET_IS_LOADING', payload } as const),
}

type TThunk = TBaseThunk<TActions>
