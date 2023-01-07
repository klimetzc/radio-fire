import React from 'react';
import * as S from './Drawer.styles';
interface IDrawer {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

const Drawer: React.FC<IDrawer> = ({ children, onClose, isOpen }) => {
  return (
    <S.Drawer opened={isOpen}>
      <S.Close
        onClick={() => {
          onClose();
        }}
      />
      {children}
    </S.Drawer>
  );
};

export default Drawer;
