import { createAsyncThunk } from '@reduxjs/toolkit';
import { useSendMessageMutation, useFetchMessageHistoryQuery } from '../api/chatApi';

export const fetchMessageHistory = createAsyncThunk(
  'chat/fetchMessageHistory',
  async (_, { getState }) => {
    const { user1, user2 } = getState().chat;
    const response = await useFetchMessageHistoryQuery({ user1, user2 }).unwrap();
    return response;
  }
);

export const sendMessage = createAsyncThunk(
  'chat/sendMessage',
  async (messageContent, { getState }) => {
    const { user1, user2 } = getState().chat;
    await useSendMessageMutation({ sender: user1, receiver: user2, content: messageContent });
  }
);
