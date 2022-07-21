import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { storage } from "../../services/services";
import { IResponse, IUser, UserSignInDto } from "../types/types";

const checkToken = createAction<number>('CHECK_TOKEN')


const signUp= createAsyncThunk<IResponse, UserSignInDto>(
  'auth/sign-in',
  async (user) => {
    const response = await fetch('https://travel-app-api.glitch.me/api/v1/auth/sign-in', {
      body: JSON.stringify(user),
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },

    })

    if (response.status !== 200) {
      const { message } = await response.json()
      throw new Error(message)
    } else {
      const res = await response.json() as IResponse
      storage.setItem('token', res.token)
      return res
    }
  }
);

const signIn = createAsyncThunk<IResponse, UserSignInDto>(
  'auth/sign-in',
  async (user) => {
    const response = await fetch('https://travel-app-api.glitch.me/api/v1/auth/sign-in', {
      body: JSON.stringify(user),
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },

    })

    if (response.status !== 200) {
      const { message } = await response.json()
      throw new Error(message)
    } else {
      const res = await response.json() as IResponse
      storage.setItem('token', res.token)
      return res
    }
  }
);

const reSignIn = createAsyncThunk<any, string>(
  'auth/resign-in',
  async (token) => {
    const response = await fetch('https://travel-app-api.glitch.me/api/v1/auth/authenticated-user', {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`
      },

    })

    if (response.status !== 200) {
      const { message } = await response.json()
      throw new Error(message)
    } else {
      const user = await response.json() as IUser
      return {user}
    }

  }
)



// {
//   "user": {
//       "id": "f1b26b79-c25e-405d-8900-a10ea7d2b55f",
//       "fullName": "Pavel Navrotskyi",
//       "email": "fun.love.nuts@gmail.com",
//       "createdAt": "2022-07-21T06:43:47.274Z"
//   },
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYxYjI2Yjc5LWMyNWUtNDA1ZC04OTAwLWExMGVhN2QyYjU1ZiIsImlhdCI6MTY1ODM4NTgyNywiZXhwIjoxNjU4NDcyMjI3fQ.a7cUHUpZvdizNrJAuEvG_iItPJxY3hajPuh4wpjvvpY"
// }


export { checkToken, signIn, reSignIn }