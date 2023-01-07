import React from 'react';
import * as S from './ChatMessage.styles';

interface IChatMessage {
  data: {
    timestamp: number;
    content: string;
  };
}

const ChatMessage: React.FC<IChatMessage> = ({ data }) => {
  return (
    <S.Message>
      {data?.content || 'error message'} - {data?.timestamp || 'error time'}
    </S.Message>
  );
};

export default ChatMessage;
