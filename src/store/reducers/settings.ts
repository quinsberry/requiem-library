import { TInferActions, TBaseThunk } from '../../types/types'

type TInitialState = typeof initialState

const initialState = {
  language: 'ru',
}

export default (state = initialState, action: TActions): TInitialState => {
  switch (action.type) {
    case 'sidebar/SET_LANGUAGE':
      return {
        ...state,
        language: action.payload,
      }
    default:
      return state
  }
}

type TActions = TInferActions<typeof actions>

export const actions = {
  setLanguage: (payload: string) => ({ type: 'sidebar/SET_LANGUAGE', payload } as const),
}

type TThunk = TBaseThunk<TActions>
