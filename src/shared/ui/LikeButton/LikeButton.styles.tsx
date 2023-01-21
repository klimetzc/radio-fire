'use client';
import styled from 'styled-components';

import likeIcon from '../../assets/icons/like.svg';

export const LikeButton = styled.button<{ isLiked?: boolean; size?: string }>`
  width: ${(props) => props.size || '16'}px;
  height: ${(props) => props.size || '16'}px;
  background-image: url(${likeIcon?.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
