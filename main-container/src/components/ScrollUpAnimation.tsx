import React from 'react';
import styled from 'styled-components';

type ScrollUpProps = {
  onClick?: () => void;
};

const ScrollUpLink = styled.a`
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  font-size: 2vh;
  padding: 8vh 1vh 6vh 5vh;

  &::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-left: 1.4vh solid transparent;
    border-right: 1.4vh solid transparent;
    border-bottom: 2vh solid #000;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const ScrollUpAnimation: React.FC<ScrollUpProps> = ({ onClick }) => (
  <ScrollUpLink
    href="#"
    onClick={(e) => {
      e.preventDefault();
      onClick && onClick();
    }}
  >
    Go Top
  </ScrollUpLink>
);

export default ScrollUpAnimation;
