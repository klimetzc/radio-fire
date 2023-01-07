import React from 'react';
import ChatMessageList from 'src/entities/ChatMessage/ChatMessageList';

const mockData = [
  { content: 'Hello', timestamp: 1234 },
  { content: 'Hello 2', timestamp: 1230 },
];

const RoomPage = () => {
  return (
    <div className="flex flex-col items-center w-full p-6">
      <ChatMessageList messages={mockData} />
    </div>
  );
};

export default RoomPage;
