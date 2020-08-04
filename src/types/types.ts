import { TRootReducer } from '../redux/store'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'

// ------------ GENERAL TYPES ------------

export type TAppState = ReturnType<TRootReducer>

export type TInferActions<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export type TBaseThunk<A extends Action = Action, R = Promise<void>> = ThunkAction<
  R,
  TAppState,
  unknown,
  A
>

// Bosses -----------------
export type TBossesAvailableTypes =
  | 'easy'
  | 'medium'
  | 'strong'
  | 'dangerBoys'
  | 'guildBosses'
  | 'priests'
  | 'dragons'
  | 'superBosses'

export type TAddBoss = {
  name: string
  category: TBossesAvailableTypes
  experience: string
  additionalInfo: string
  location: string
  links?: {
    name?: string
    additionalInfo?: string
    location?: string
  }
}

export type TBoss = {
  _id: string
  name: string
  category: TBossesAvailableTypes
  experience: string
  additionalInfo: string
  location: string
  links?: {
    name?: string
    additionalInfo?: string
    location?: string
  }
}
