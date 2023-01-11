'use client';

import styled from 'styled-components';

export const Message = styled.div`
  position: relative;
  width: 500px;
  padding: 8px;
  background-color: #1a5afe;
  border-radius: 6px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  padding-bottom: 25px;

  @media screen and (max-width: 600px) {
    width: auto;
  }
`;

export const Time = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;
  color: #abc3ff;
  font-size: 12px;
`;
