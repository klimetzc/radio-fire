import styled, { css } from 'styled-components';

import CloseIcon from '../../../shared/assets/icons/close-rounded.svg';

interface IDrawer {
  opened: boolean;
}

export const Drawer = styled.div<IDrawer>`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  transition: 0.2s;
  background-color: #202020;
  transition-timing-function: ease-in-out;
  z-index: 100;
  padding: 85px 0 0;
  overflow: hidden;
  ${(props) => {
    switch (props.opened) {
      case true:
        return css`
          visibility: visible;
          /* transform: translateX(0); */
          width: 300px;
        `;
      default:
        return css`
          visibility: hidden;
          /* transform: translateX(-100%); */
          width: 0;
        `;
    }
  }}
`;

export const Close = styled.button`
  position: absolute;
  top: 24px;
  left: 15px;
  width: 30px;
  height: 30px;
  background-image: url(${CloseIcon?.src});
  background-position: center;
  background-size: cover;
`;
