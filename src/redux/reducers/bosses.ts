import {
  TInferActions,
  TBaseThunk,
  TBoss,
  TBossesAvailableTypes,
  TAddBoss,
} from '../../types/types'

import { bossesApi } from '../../api'

type TInitialState = typeof initialState

const initialState = {
  activeCategory: 'easy' as TBossesAvailableTypes,
  bossesList: [] as Array<TBoss>,
  errors: [],
  isLoading: false,
}

export default (state = initialState, action: TActions): TInitialState => {
  switch (action.type) {
    case 'bosses/SET_ACTIVE_CATEGORY':
      return {
        ...state,
        activeCategory: action.payload,
      }
    case 'bosses/SET_BOSSES': {
      const arrived = action.payload
      //@ts-ignore
      const sortedList = arrived.sort((a, b) => Number(a.experience) > Number(b.experience))
      return {
        ...state,
        bossesList: arrived,
      }
    }
    case 'bosses/SET_ERRORS': {
      const arrived = action.payload
      //@ts-ignore
      const sortedList = arrived.sort((a, b) => Number(a.experience) > Number(b.experience))
      return {
        ...state,
        bossesList: sortedList,
      }
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
  setActiveCategory: (payload: TBossesAvailableTypes) =>
    ({ type: 'bosses/SET_ACTIVE_CATEGORY', payload } as const),
  setBosses: (payload: Array<TBoss>) => ({ type: 'bosses/SET_BOSSES', payload } as const),
  setErrors: (payload: any) => ({ type: 'bosses/SET_ERRORS', payload } as const),
  setIsLoading: (payload: boolean) => ({ type: 'bosses/SET_IS_LOADING', payload } as const),
}

type TThunk = TBaseThunk<TActions>

export const getBosses = (type: TBossesAvailableTypes): TThunk => {
  return async (dispatch) => {
    dispatch(actions.setIsLoading(true))
    const res = await bossesApi.getBosses(type)

    dispatch(actions.setBosses(res))
    dispatch(actions.setIsLoading(false))
  }
}

export const addNewBoss = (data: TAddBoss): TThunk => {
  return async (dispatch) => {
    dispatch(actions.setIsLoading(true))
    const res = await bossesApi.addNewBoss(data)

    dispatch(actions.setIsLoading(false))
  }
}

export const addArrayOfBosses = (bossesArr: Array<TAddBoss>): TThunk => {
  return async (dispatch) => {
    dispatch(actions.setIsLoading(true))
    const res = await bossesApi.addArrayOfBosses(bossesArr)

    dispatch(actions.setIsLoading(false))
  }
}
