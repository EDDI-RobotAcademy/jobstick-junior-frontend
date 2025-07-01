// src/components/HomeOne.tsx

import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import ph1 from '../../assets/images/fixed/ph1.png';
// import home_icon from '../../assets/icons/fixed/home-icon.svg';

export type HomeOneProps = {
    /** 두 번째 섹션으로 스크롤할 때 호출되는 콜백 */
    onScrollToSecond: () => void;
};

// --- keyframes 정의 ---
const typing = keyframes`
  from { width: 0; }
  to   { width: 100%; }
`;
const blink = keyframes`
  from { border-color: transparent; }
  to   { border-color: white; }
`;
const fadeDown = keyframes`
  from { opacity: 0; transform: translateY(-30px); }
  to   { opacity: 1; transform: translateY(0);    }
`;
const bounce = keyframes`
  0%,20%,50%,80%,100% { transform: translateY(0); }
  40%                  { transform: translateY(-10px); }
  60%                  { transform: translateY(-5px);   }
`;

// --- Styled Components ---
const Container = styled.section`
  width: 100%; height: 100vh;
  display: flex; justify-content: space-between; align-items: center;
  padding: 0 5%; background: #fff; position: relative; overflow: hidden;
+ /* 모바일: 세로 스택으로 전환 */
+ @media screen and (max-width: 768px) {
+   flex-direction: column;
+   justify-content: center;
+   padding: 20px 5%;
+   height: auto;          /* 내용에 맞춰 길이 조정 */
+ }
`;

const TextWrapper = styled.div`
  width: 50%; display: flex; flex-direction: column; justify-content: center;
+ /* 모바일: 전체 너비 사용 */
+ @media screen and (max-width: 768px) {
+   width: 100%;
+   text-align: center;
+ }
`;

const FadeDiv = styled.div<{ delay: number }>`
  opacity: 0;
  animation: ${fadeDown} 0.8s ease-out forwards;
  animation-delay: ${props => props.delay}ms;
`;

const Icon = styled.div`
  width: 80px; height: 80px;
  background-size: contain; margin-bottom: 24px;
`;

const Title = styled.h2`
  display: inline-block; font-size: 48px; font-weight: bold;
  color: black; margin: 0; white-space: nowrap; overflow: hidden;
  border-right: 5px solid white;
  animation: ${typing} 2s steps(30) forwards, ${blink} 0.5s step-end infinite alternate;
`;

const Subtitle = styled.p`
  font-size: 24px; font-weight: bold; color: black;
  margin: 16px 0 24px;
`;

const Button = styled.button`
  padding: 12px 24px; background: #007bff; color: #fff;
  border: none; border-radius: 4px; font-size: 16px; cursor: pointer;
`;

const Description = styled.p`
  font-size: 18px; color: black; line-height: 1.5;
  margin-top: 20px;
`;

const ImageWrapper = styled.div`
  width: 45%; display: flex; justify-content: center;
+ /* 모바일: 전체 너비 + 위쪽 여백 */
+ @media screen and (max-width: 768px) {
+   width: 100%;
+   margin-top: 40px;
+ }
`;

const PhoneImage = styled.img`
  width: 90%; max-width: 400px; transform: rotate(-5deg);
+ /* 모바일: 화면 너비 80% 까지 늘리고 max-width 축소 */
+ @media screen and (max-width: 768px) {
+   width: 80%;
+   max-width: 300px;
+   transform: rotate(0deg); /* 기울임 제거해도 좋음 */
+ }
`;

const ReadMore = styled.div`
  position: absolute; bottom: 8vh; left: 50%;
  transform: translateX(-50%);
  display: inline-flex; align-items: center; gap: 8px;
  color: #007bff; font-weight: bold; cursor: pointer;
  animation: ${bounce} 6s ease infinite 5000ms;
`;

const MouseIcon = styled.span`
  display: inline-block; width: 24px; height: 36px;
  border: 2px solid #000; border-radius: 14px; position: relative;
  &::before {
    content: '';
    position: absolute; top: 6px; left: 50%;
    width: 2px; height: 6px; background: #000;
    transform: translateX(-50%);
  }
`;

// --- Component ---
const HomeOne: React.FC<HomeOneProps> = ({ onScrollToSecond }) => {
    const fullText = 'USE YOUR JOBSTICK!';
    const [typed, setTyped] = useState('');
    const [show, setShow] = useState(false);
    const indexRef = useRef(0);

    useEffect(() => {
        function type() {
            const currentIndex = indexRef.current;
            if (currentIndex < fullText.length) {
                setTyped(t => t + fullText[currentIndex]);
                indexRef.current += 1;
                setTimeout(type, 80);
            } else {
                setShow(true);
            }
        }
        type();
    }, []);

    return (
        <Container>
            <TextWrapper>
                {show && <FadeDiv delay={0}><Icon /></FadeDiv>}
                <Title>{typed}</Title>
                <Subtitle>SINCE 2025</Subtitle>
                {show && <FadeDiv delay={300}><Button onClick={() => window.open('https://forms.gle/...')}>설문조사 하러가기</Button></FadeDiv>}
                {show && <FadeDiv delay={600}><Description>JOBSTICK은 한국 IT 기업 분석 보고서와 AI 모의면접 서비스를 제공하여<br/>보다 많은 사람들에게 양질의 정보를 공유하고 도움을 드릴 수 있도록 최선을 다하겠습니다.</Description></FadeDiv>}
            </TextWrapper>

            {show && <FadeDiv delay={900}><ImageWrapper><PhoneImage src={ph1} alt="iPhone Interview"/></ImageWrapper></FadeDiv>}
            {show && <ReadMore onClick={onScrollToSecond}><MouseIcon />Read more</ReadMore>}

        </Container>
    );
};

export default HomeOne;