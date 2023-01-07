import React from 'react';
import ChatMessage from './ChatMessage';
import * as S from './ChatMessageList.styles';

type message = { content: string; timestamp: number };

interface IChatMessageList {
  messages: message[];
}

const ChatMessageList: React.FC<IChatMessageList> = ({ messages }) => {
  return (
    <S.List>
      {messages.map((item) => (
        <ChatMessage data={item} key={item.timestamp} />
      ))}
    </S.List>
  );
};

export default ChatMessageList;
