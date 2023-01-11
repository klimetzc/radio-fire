import moment from 'moment';
import React from 'react';
import * as S from './ChatMessage.styles';

interface IChatMessage {
  data: {
    timestamp: number | string;
    content: string;
  };
}

const getMMSSTime = (timestamp: string | number): string => {
  return moment(new Date(timestamp)).format('HH:mm');
};

const ChatMessage: React.FC<IChatMessage> = ({ data }) => {
  return (
    <S.Message>
      {data?.content || 'error message'}
      <S.Time>{getMMSSTime(data?.timestamp) || '00:00'}</S.Time>
    </S.Message>
  );
};

export default ChatMessage;
