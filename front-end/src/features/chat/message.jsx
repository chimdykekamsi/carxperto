import React, { useState } from 'react';
import DashboardNavbar from '../../seller/widgets/layout/dashboard-navbar';
import Sidenav from '../../seller/widgets/layout/sidenav';
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Sidebar,
  Search,
  ConversationList,
  Conversation,
  Avatar,
  MessageSeparator,
  TypingIndicator,
  InfoButton,
  VideoCallButton,
  VoiceCallButton,
  ConversationHeader
} from '@chatscope/chat-ui-kit-react';
import './message.css';

export function Messages() {
  return (
    <div className=''>
      <DashboardNavbar />
      <div className='flex flex-row  overflow-hidden'>
        <div className=''>
          <Sidenav />
        </div>
        <div
          className='mt-7 w-[90%] lg:ml-[20%] ml-[15px] lg:mr-10px mr-1px border rounded-lg shadow-md'
          style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}
        >
          <MainContainer
            responsive
            style={{
              display: 'flex',
              flexDirection: 'row',
              height: '100vh'
            }}
          >
            <Sidebar
              position='left'
              style={{
                flexShrink: 0,
                width: '25%',
                height: '100vh',
                backgroundColor: 'white',
                borderRight: `1px solid #003b6d`
              }}
            >
              <Search
                placeholder='Search...'
                style={{
                  backgroundColor: '#003b6d',
                  color: '#003b6d',
                  border: `1px solid #003b6d`,
                  borderRadius: '8px',
                  padding: '8px'
                }}
                inputStyle={{
                  color: '#003b6d',
                  border: 'none',
                  outline: 'none',
                  backgroundColor: 'white'
                }}
                iconStyle={{
                  color: '#003b6d !default',
                  backgroundColor: '#003b6d'
                }}
              />
              <ConversationList style={{ height: 'calc(100vh - 48px)' }}>
                {/* Add conversations */}
                <Conversation
                  info='Yes, I can do it for you'
                  lastSenderName='Lilly'
                  name='Lilly'
                  style={{ textAlign: 'start' }}
                >
                  <Avatar
                    name='Lilly'
                    src='https://chatscope.io/storybook/react/assets/lilly-aj6lnGPk.svg'
                    style={{ borderColor: '#003b6d' }}
                  />
                </Conversation>
              </ConversationList>
            </Sidebar>

            <ChatContainer style={{ flex: 1, height: '100vh', backgroundColor: 'white' }}>
              <ConversationHeader>
                <ConversationHeader.Back />
                <Avatar
                  name='Zoe'
                  src='https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg'
                  style={{ borderColor: '#003b6d' }}
                />
                <ConversationHeader.Content info='Active 10 mins ago' userName='Zoe' />
                <ConversationHeader.Actions>
                  <VoiceCallButton style={{ color: '#003b6d' }} />
                  <VideoCallButton style={{ color: '#003b6d' }} />
                  <InfoButton style={{ color: '#003b6d' }} />
                </ConversationHeader.Actions>
              </ConversationHeader>

              <MessageList
                typingIndicator={<TypingIndicator content='Zoe is typing' />}
                style={{ height: 'calc(100vh - 128px)' }} // Adjust the height of the message list
              >
                {/* Add messages */}
                <MessageSeparator
                  content='Saturday, 30 November 2024'
                  style={{ color: '#003b6d' }}
                />
                {/* Customize message styles */}
                <Message
                  model={{
                    direction: 'incoming',
                    message: 'Hello John, are you done?',
                    position: 'single',
                    sender: 'Zoe',
                    sentTime: '15 mins ago'
                  }}
                  style={{
                    // backgroundColor: 'white', // Set message background color
                    color: '#003b6d' // Set text color
                  }}
                >
                  <Avatar
                    name='Zoe'
                    src='https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg'
                    style={{ borderColor: '#003b6d' }}
                  />
                </Message>
                <Message
                  model={{
                    direction: 'outgoing',
                    message: 'Not yet, what the deadline?',
                    position: 'normal',
                    sender: 'Patrik',
                    sentTime: '15 mins ago'
                  }}
                />
                <Message
                  model={{
                    direction: 'incoming',
                    message: 'the deadline is friday, 30 November 2024',
                    position: 'last',
                    sender: 'Zoe',
                    sentTime: '15 mins ago'
                  }}
                >
                  <Avatar
                    name='Zoe'
                    src='https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg'
                  />
                </Message>
              </MessageList>

              <MessageInput
                placeholder='Type message here'
                style={{
                  height: '48px',
                  backgroundColor: 'white',
                  color: '#003b6d',
                  borderColor: '#003b6d',
                  textAlign: 'start'
                }}
              />
            </ChatContainer>
          </MainContainer>
        </div>
      </div>
    </div>
  );
}

export default Messages;
