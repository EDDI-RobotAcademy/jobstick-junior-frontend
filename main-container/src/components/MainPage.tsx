// src/pages/MainPage.tsx

import React from 'react';
import styled from 'styled-components';
import HomeOne from './MainPage/HomeOne';
import HomeTwo from './MainPage/HomeTwo';
// … 다른 섹션 컴포넌트

// ① 각 Section을 flexbox로 중앙 정렬
const Section = styled.section<{ gray?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;   /* 내부 가로 중앙 정렬 */
  padding: 80px 16px;
  background: ${props => (props.gray ? '#f5f5f5' : '#ffffff')};
  box-sizing: border-box;
`;

// ② 중앙에 고정할 실제 내용 래퍼
const SectionContent = styled.div`
    width: 100%;
    max-width: 1200px;         /* 데스크톱 최대 너비 */
    display: flex;
    flex-direction: column;    /* 필요에 따라 row/column 조절 가능 */
    align-items: center;       /* 내부 요소 중앙 정렬 */
    gap: 40px;                 /* 섹션 내 요소 간격 */
`;

// NavBar 높이만큼 본문 위쪽 여백 줘야 한다면, App.tsx에서 처리한 MainLayout에 이미 있음

const MainPage: React.FC = () => {
    const handleScrollToSecond = () => {
        document
            .getElementById('HomeSecond')
            ?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            {/* 첫 번째 섹션: HomeOne */}
            <Section>
                <SectionContent>
                    <HomeOne onScrollToSecond={handleScrollToSecond} />
                </SectionContent>
            </Section>

            {/* 두 번째 섹션: 회색 배경 */}
            <Section gray>
                <SectionContent>
                    <HomeTwo />
                </SectionContent>
            </Section>

            {/* 이후 섹션들도 동일 구조로 감싸면 중앙 정렬 유지 */}
        </>
    );
};

export default MainPage;
