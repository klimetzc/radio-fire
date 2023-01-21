import React from 'react';
import * as S from './LikeButton.styles';

export interface ButtonProps {
  isLiked?: boolean;
  size?: string;
}

// TODO: Реализовать у кнопки лайка активное состояние, эффекты наведения.

export const LikeButton: React.FC<ButtonProps> = ({ isLiked, size }) => {
  return (
    <S.LikeButton aria-label="кнопка лайка" isLiked={isLiked} size={size} />
  );
};
