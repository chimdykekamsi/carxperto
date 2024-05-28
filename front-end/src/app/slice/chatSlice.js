import { createSlice } from '@reduxjs/toolkit';
import { fetchMessageHistory, sendMessage } from '../thunks/chatThunks';

const initialState = {
  user1: 'user1',
  user2: 'user2',
  messages: [],
  status: 'idle',
  error: null
};

export const messageStatus = {
  SENT: 'sent',
  DELIVERED: 'delivered',
  READ: 'read'
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    messageReceived: (state, action) => {
      state.messages.push(action.payload);
    },
    updateMessageStatus: (state, action) => {
      const { messageId, status } = action.payload;
      const messageToUpdate = state.messages.find((message) => message.id === messageId);
      if (messageToUpdate) {
        messageToUpdate.status = status;
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMessageHistory.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchMessageHistory.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.messages = action.payload;
    });
    builder.addCase(fetchMessageHistory.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
    builder.addCase(sendMessage.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(sendMessage.fulfilled, (state) => {
      state.status = 'succeeded';
    });
    builder.addCase(sendMessage.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  }
});

export const { messageReceived, updateMessageStatus } = chatSlice.actions;

export default chatSlice.reducer;
