import React from 'react';
import styled, { keyframes } from 'styled-components';

// Bounce animation (6s infinite)
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40%                { transform: translateY(-10px); }
  60%                { transform: translateY(-5px); }
`;

// Styled ScrollLink
const ScrollLink = styled.a`
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  animation: ${bounce} 6s infinite;

  &:hover {
    opacity: 0.8;
  }
`;

// Mouse icon styled component
const MouseIcon = styled.span`
  display: inline-block;
  width: 24px;
  height: 36px;
  border: 2px solid #000;
  border-radius: 14px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 6px;
    left: 50%;
    width: 2px;
    height: 6px;
    background: #000;
    transform: translateX(-50%);
  }
`;

const ScrollAnimation: React.FC = () => (
  <ScrollLink href="#more">
    <MouseIcon />
    Read more
  </ScrollLink>
);

export default ScrollAnimation;
