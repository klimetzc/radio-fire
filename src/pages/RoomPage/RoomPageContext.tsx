'use client';

import React, { createContext, PropsWithChildren, useState } from 'react';

interface Message {
  content: string;
  timestamp: string;
}

export const ChatContext = createContext<
  [Message[], React.Dispatch<React.SetStateAction<Message[]>>] | []
>([]);

const mockData = [
  { content: 'Hello', timestamp: '1234' },
  { content: 'Hello 2', timestamp: '1230' },
];

const RoomPageContext = ({ children }: PropsWithChildren) => {
  const [messages, setMessages] = useState<Message[]>(mockData);

  return (
    <ChatContext.Provider value={[messages, setMessages]}>
      {children}
    </ChatContext.Provider>
  );
};

export default RoomPageContext;
