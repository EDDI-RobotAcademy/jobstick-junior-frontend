import React, { useState } from "react";
import InterviewChecklist from "./components/InterviewChecklist.tsx";
import styled from "styled-components";

export interface Selections {
    company: string;
    academic: string;
    career: string;
    project: string;
    keyword: string;
    skills: string[];
}

const Main = styled.main`
    font-family: 'Roboto', sans-serif;
    width: 100%;
    margin: 0 auto;         
    padding: 0 24px;        
    display: flex;
    flex-direction: column;
    justify-content: center;  // 수직 중앙 배치
`;

const InterviewReadyPage = () => {
    const [selections, setSelections] = useState<Selections>({
        company: "",
        academic: "",
        career: "",
        project: "",
        keyword: "",
        skills: [],
    });

    return (
        <Main>
            <InterviewChecklist selections={selections} setSelections={setSelections} />
        </Main>
    );
};

export default InterviewReadyPage;
