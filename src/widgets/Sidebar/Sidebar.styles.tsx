import Link from 'next/link';
import styled from 'styled-components';

import BurgerIcon from '../../shared/assets/icons/burger-menu.svg';
import LogoIcon from '../../shared/assets/icons/logo.svg';

export const Sidebar = styled.div`
  position: relative;
`;

export const Btn = styled.button`
  position: fixed;
  z-index: 99;
  top: 24px;
  left: 15px;
  width: 30px;
  height: 30px;
  background-image: url(${BurgerIcon?.src});
  background-position: center;
  background-size: cover;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 20px;
  color: white;
  font-weight: 700;
  padding-bottom: 20px;
  padding-left: 30px;
  position: relative;

  &::before {
    content: '';
    height: 25px;
    width: 25px;
    position: absolute;
    left: -5px;
    top: 3px;
    background-image: url(${LogoIcon?.src});
    background-position: center;
    background-size: cover;
  }
`;

export const SidebarLink = styled(Link)`
  color: white;
  transition: 0.1s;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    color: #3434ff;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;
