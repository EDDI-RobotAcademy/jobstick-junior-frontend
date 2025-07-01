import React, { useState } from "react";
import InterviewChecklist from "./components/InterviewChecklist.tsx";

export interface Selections {
    company: string;
    academic: string;
    career: string;
    project: string;
    keyword: string;
    skills: string[];
}

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
        <main>
            <InterviewChecklist selections={selections} setSelections={setSelections} />
        </main>
    );
};

export default InterviewReadyPage;
