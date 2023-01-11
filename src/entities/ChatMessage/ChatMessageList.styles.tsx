'use client';

import styled from 'styled-components';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 600px) {
    align-items: stretch;
    width: 100%;
  }
`;
