'use client';

import React, { useState } from 'react';
import Drawer from 'src/shared/ui/Drawer/Drawer';
import * as S from './Sidebar.styles';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <S.Btn onClick={handleOpen} />
      <Drawer isOpen={isOpen} onClose={handleClose}>
        <S.Content>
          <S.Title>Патефон</S.Title>
          <S.SidebarLink href="/">Главная</S.SidebarLink>
          <S.SidebarLink href="/promo">Лендинг</S.SidebarLink>
          <S.SidebarLink href="/albums/testAlbum">Альбомы</S.SidebarLink>
          <S.SidebarLink href="/room">Чат</S.SidebarLink>
        </S.Content>
      </Drawer>
    </>
  );
};

export default Sidebar;
