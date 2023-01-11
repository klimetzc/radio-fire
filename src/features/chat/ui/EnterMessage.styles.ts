'use client';

import styled from 'styled-components';

export const InputMessage = styled.div`
  width: calc(100% - 40px);
  box-sizing: border-box;
  padding: 10px;
  position: sticky;
  bottom: 10px;
  border: 2px solid #282828;
  border-radius: 10px;
  background-color: #161616;
  margin: 10px;
  margin-top: auto;
  color: white;
  max-height: 10rem;
  overflow-y: auto;

  &:focus {
    outline: none;
    border-color: #1c4cc7;
  }

  &:hover:not(:focus) {
    border-color: #4d4d4d;
  }

  &[placeholder]:empty::before {
    content: attr(placeholder);
    color: #5b5b5b;
  }

  &[placeholder]:empty:focus::before {
    content: '';
  }
`;
