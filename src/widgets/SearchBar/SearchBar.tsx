'use client';

import React from 'react';
import * as S from './SearchBar.styles';

const SearchBar = () => {
  return (
    <S.SearchBarContainer>
      <S.SearchBar
        type="text"
        placeholder="Найти что-то"
        onKeyDown={(e) => {
          e.stopPropagation();
        }}
      />
    </S.SearchBarContainer>
  );
};

export default SearchBar;
