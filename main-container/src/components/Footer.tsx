import React from 'react';
import styled from 'styled-components';
import eddi1 from '../assets/images/fixed/eddi1.png';
// Styled Components
const FooterContainer = styled.footer<{ isHome?: boolean }>`
  text-align: center;
  border-top: 1px solid #e0ccff;
  padding: 0;
  ${({ isHome }) => isHome && ` /* 홈 페이지에서 다른 스타일 필요 시 */ `}
`;

const FooterInner = styled.div`
  background-color: #f5f5f5;
  padding: 8px 12px 4px;
`;

const FooterImage = styled.img`
  width: 60px;
  height: 60px;
  margin: 0 auto 2px auto;
  display: block;
`;

const ReservedInfo = styled.p`
  margin: 0 0 2px;
  font-size: 12px;
  color: #111;
`;

interface FooterProps {
    isHome?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isHome = false }) => (
    <FooterContainer isHome={isHome}>
        <FooterInner>
            <FooterImage src={eddi1} alt="위치 아이콘" />
            <ReservedInfo>서울특별시 송파구 새말로8길 26, 3층(문정동)</ReservedInfo>
            <ReservedInfo>Copyright © 2025 에디(EDDI). All rights reserved.</ReservedInfo>
        </FooterInner>
    </FooterContainer>
);
