import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';
import hwImg from '../../assets/images/fixed/hw.png';
import choiImg from '../../assets/images/fixed/choi.jpg';
import yangImg from '../../assets/images/fixed/yang.jpg';
import minImg from '../../assets/images/fixed/min.jpg';
import wangImg from'../../assets/images/fixed/wang.jpg';
const HomeSecondWrapper = styled.div`
  width: 100%;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 80px 0 100px;
`;

const Body = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 4vh;
  font-weight: bold;
`;

const ContentArea = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const ContentTitle = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5%;
  p {
    color: #ffffff;
    font-size: 2.5vh;
    font-weight: bold;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ImageCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

const FlipWrapper = styled.div`
  width: 180px;
  height: 240px;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  @media screen and (max-width: 1280px) {
    width: 28%;
    height: 220px;
  }
  @media screen and (max-width: 900px) {
    width: 40%;
    height: 200px;
  }
  @media screen and (max-width: 600px) {
    width: 80%;
    min-height: 220px;
  }
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s ease;
  transform-style: preserve-3d;
  border-radius: 25px;
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  top: 0;
  left: 0;
  border-radius: 25px;
`;

const CardFront = styled(CardFace)`
  overflow: hidden;
`;

const CardBack = styled(CardFace)`
  transform: rotateY(180deg);
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const TextCard = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  p {
    margin: 4px 0;
  }
  a {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    max-width: 100%;
    font-size: 0.9rem;
    text-decoration: none;
    color: blue;
    font-weight: bold;
  }
`;

const TitleSpan = styled.span`
  color: rgb(38, 38, 231);
`;

interface Member {
    name: string;
    role?: string;
    img: string;
    github: string;
}

const members: Member[] = [
    { name: '김현우', img: hwImg, github: 'https://github.com/kimhyeonu4586' },
    { name: '최병준', img: choiImg, github: 'https://github.com/ChoiByuengJun' },
    { name: '양의정', role: '팀장', img: yangImg, github: 'https://github.com/UiJungYang' },
    { name: '오민수', img:minImg , github: 'https://github.com/yooodleee' },
    { name: '왕환민', img: wangImg, github: 'https://github.com/minleewang' },
];

const HomeSecond: React.FC = () => {
    const [flipped, setFlipped] = useState<boolean[]>(Array(members.length).fill(false));

    const toggleFlip = (index: number) => {
        setFlipped(prev => prev.map((f, i) => (i === index ? !f : f)));
    };

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <HomeSecondWrapper>
            <Body>
                <TitleContainer>
                    <p>
                        <TitleSpan>JOBSTICK</TitleSpan> | 기업 핵심 정보 분석 및 AI 모의면접
                    </p>
                </TitleContainer>
                <ContentArea>
                    <ContentContainer>
                        <ContentTitle data-aos="fade-up" data-aos-offset="400">
                            <p><TitleSpan>JOBSTICK</TitleSpan></p>
                            <p style={{ color: 'black' }}>팀원을 소개합니다.</p>
                        </ContentTitle>
                        <ImageContainer>
                            <ImageCardContainer>
                                {members.map((m, idx) => (
                                    <FlipWrapper key={idx} data-aos="fade-up" data-aos-delay={`${(idx+1)*100}`}>
                                        <CardInner style={{ transform: flipped[idx] ? 'rotateY(180deg)' : 'none' }}>
                                            <CardFront>
                                                <StyledImg src={m.img} alt={m.name} />
                                            </CardFront>
                                            <CardBack>
                                                <TextCard>
                                                    <p>
                                                        이름: {m.role ? (<><span style={{ color: 'red' }}>[{m.role}]</span> {m.name}</>) : m.name}
                                                    </p>
                                                    <p>GitHub: <a href={m.github} target="_blank" rel="noopener noreferrer">@{m.github.split('github.com/')[1]}</a></p>
                                                </TextCard>
                                            </CardBack>
                                        </CardInner>
                                        <div onClick={() => toggleFlip(idx)} style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, cursor: 'pointer' }} />
                                    </FlipWrapper>
                                ))}
                            </ImageCardContainer>
                        </ImageContainer>
                    </ContentContainer>
                </ContentArea>
            </Body>
        </HomeSecondWrapper>
    );
};

export default HomeSecond;
