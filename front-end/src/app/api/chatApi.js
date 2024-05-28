import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://auto-buy-api.vercel.app/';

export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    sendMessage: builder.mutation({
      query: (message) => ({
        url: '/chats',
        method: 'POST',
        body: message
      })
    }),
    fetchMessageHistory: builder.query({
      query: ({ user1, user2 }) => ({
        url: `/chats/${user1}/${user2}`,
        method: 'GET'
      })
    }),
    updateMessageStatus: builder.mutation({
      query: ({ chatId, status }) => ({
        url: `/chats/${chatId}`,
        method: 'PUT',
        body: { status }
      })
    })
  })
});

export const {
  useSendMessageMutation,
  useFetchMessageHistoryQuery,
  useUpdateMessageStatusMutation
} = chatApi;
