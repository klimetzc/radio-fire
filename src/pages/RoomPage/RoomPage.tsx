'use client';

import React, { useContext } from 'react';
import ChatMessageList from 'src/entities/ChatMessage/ChatMessageList';
import EnterMessage from 'src/features/chat/ui/EnterMessage';
import RoomPageContext, { ChatContext } from './RoomPageContext';

const RoomPage = () => {
  const [messages, setMessages] = useContext(ChatContext);

  return (
    <div className="flex flex-col items-center justify-between w-full p-6 pb-0 min-h-[90vh]">
      <ChatMessageList messages={messages!} />
      <EnterMessage />
    </div>
  );
};

const RoomPageWithContext = () => {
  return (
    <RoomPageContext>
      <RoomPage />
    </RoomPageContext>
  );
};

export default RoomPageWithContext;
