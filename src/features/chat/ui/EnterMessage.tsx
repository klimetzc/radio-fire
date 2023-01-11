'use client';

import React, { createElement, useContext, useRef } from 'react';
import { ChatContext } from 'src/pages/RoomPage/RoomPageContext';
import * as S from './EnterMessage.styles';

interface KeydownEvent extends Event {
  code: number | string;
}

const EnterMessage = () => {
  const [messages, setMessages] = useContext(ChatContext);
  const MessageBox = useRef<HTMLDivElement>(null);

  const handleKeydown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (event.code === 'Enter' && event.shiftKey) {
      // pass
    } else if (event.code === 'Enter') {
      event.preventDefault();
      if (event.currentTarget.textContent) {
        setMessages!([
          ...messages!,
          {
            content: event.currentTarget.textContent!,
            timestamp: `${new Date()}`,
          },
        ]);
      }
      event.currentTarget.innerHTML = '';
    }
  };

  return (
    <S.InputMessage
      contentEditable
      tabIndex={-1}
      onKeyDown={handleKeydown}
      ref={MessageBox}
      placeholder="Enter message"
    ></S.InputMessage>
  );
};

export default EnterMessage;
