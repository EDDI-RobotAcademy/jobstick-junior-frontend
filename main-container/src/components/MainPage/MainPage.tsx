
// src/pages/MainPage.tsx

import React from 'react';
import styled from 'styled-components';
import HomeOne from '../MainPage/HomeOne.tsx';
// import HomeSecond from '../components/MainPage/HomeSecond';
// 다른 섹션 컴포넌트 임포트...

// Section styled-component
const Section = styled.section<{ gray?: boolean }>`
  width: 100%;
  padding: 80px 16px;
  background: ${props => (props.gray ? '#f5f5f5' : '#ffffff')};
`;

const MainPage: React.FC = () => {
    const handleScrollToSecond = () => {
        document.getElementById('HomeSecond')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            {/* 첫 번째 섹션: HomeOne */}
            <Section>
                <HomeOne onScrollToSecond={handleScrollToSecond} />
            </Section>

            {/* 두 번째 섹션: 회색 배경 */}
            <Section gray>
                {/*<HomeSecond />*/}
            </Section>

            {/* 이후 섹션들... */}
        </>
    );
};

export default MainPage;
