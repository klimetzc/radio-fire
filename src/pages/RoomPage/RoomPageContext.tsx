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
  {
    content: 'Hello',
    timestamp: 'Wed Jan 11 2023 14:12:43 GMT+0300 (Москва, стандартное время)',
  },
  {
    content: 'Hello 2',
    timestamp: 'Wed Jan 11 2023 14:21:43 GMT+0300 (Москва, стандартное время)',
  },
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
