'use client';

import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 15px;
  position: sticky;
  top: 0;
  background-color: rgb(22 22 22/ 0.6);
  z-index: 50;
`;

export const SearchBar = styled.input`
  border: 2px solid #272727;
  border-radius: 10px;
  color: white;
  padding: 10px;
  width: 350px;
  background-color: #222222;
  transition: 0.3s;
  outline: 0;

  &::placeholder {
    color: #909090;
  }

  &:focus {
    border-color: #1c4cc7;
  }

  &:hover:not(:focus) {
    border-color: #4d4d4d;
  }
`;
