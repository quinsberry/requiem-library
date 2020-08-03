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
export type TBossesCategory = {
  category: string
  title: string
  items: Array<TBoss>
}

export type TBoss = {
  _id: string
  name: string
  experience: string
  additionalInfo: string
  location: string
  links?: {
    name?: string
    additionalInfo?: string
    location?: string
  }
}
