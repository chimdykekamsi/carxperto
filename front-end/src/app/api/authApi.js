import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE_URL = 'https://api-v1.carxperto.com/';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials
      })
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST'
      })
    }),
    register: builder.mutation({
      query: ({ email, password }) => ({
        url: '/register',
        method: 'POST',
        body: { email, password }
      })
    })
  })
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } = authApi;
