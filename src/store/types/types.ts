import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { store } from '../store';



interface IState {
  authenticated: boolean,
  user: null | IUser,
  loading: boolean
}

interface IUser {
  id: string,
  fullName: string,
  email: string,
  createdAt: string
}

interface IResponse {
  token: string,
  user: IUser
}

type UserSignInDto = {
  email: string,
  password: string
} 


type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppSelector };
export type { IState, RootState, AppDispatch, IUser, IResponse, UserSignInDto };