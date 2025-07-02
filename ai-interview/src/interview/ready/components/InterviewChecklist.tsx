import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import * as S from "../styles/InterviewChecklist.styles.ts";
import InterviewNotice from "./InterviewNotice.tsx";

const tabs = ["회사", "직무", "전공 여부", "경력" ,"프로젝트 경험", "Tech Skills"];
const InterviewChecklist = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("회사"); // 상단 버튼 탭의 움직임?
    const [selectedCompany, setSelectedCompany] = useState(""); // 회사
    const [selectedAcademic, setSelectedAcademic] = useState(""); // 전공 여부
    const [selectedCareer, setSelectedCareer] = useState(""); // 경력
    const [selectedProject, setSelectedProject] = useState(""); // 프로젝트 경험
    const [selectedKeyword, setSelectedKeyword] = useState(""); // 직무
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]); // TECH SKILLS => 이건 중복 설정이 가능해서 배열 형태일듯

    // 상단 탭의 내용
    const companies = ["당근마켓", "Toss", "SK-encore", "KT M mobile"];
    const academics = ["전공자", "비전공자"];
    const careers = ["신입", "3년 이하", "5년 이하", "10년 이하", "10년 이상"];
    const projects = ["있음", "없음"];
    const keywords = ["Backend", "Frontend", "App·Web", "AI", "Embeddeed", "DevOps"];
    const skills = [
        "풀스택", "백엔드/서버개발", "프론트엔드", "웹개발", "Flutter", "Java",
        "JavaScript", "Python", "Vue.js", "API", "MYSQL", "AWS", "ReactJS", "ASP",
        "Angular", "Bootstrap", "Node.js", "jQuery", "PHP", "JSP", "GraphQL", "HTML5"
    ];
    // 현재 활성 탭을 다음 탭으로 이동시키는 함수
    const moveToNextTab = () => {
        const currentIndex = tabs.indexOf(activeTab);
        if (currentIndex < tabs.length - 1) setActiveTab(tabs[currentIndex+1]);
    };
    // 선택한 항목의 상태를 업데이트, 다음 탭으로 이동시키는 함수
    const handleSelect = (type: string, value: string) => {
        switch (type) {
            case "회사": setSelectedCompany(value); break;
            case "전공 여부": setSelectedAcademic(value); break;
            case "경력": setSelectedCareer(value); break;
            case "프로젝트 경험": setSelectedProject(value); break;
            case "직무": setSelectedKeyword(value); break;
            default: break;
        }
        moveToNextTab();
    }
    //
    const handleSkillToggle = (skill: string) => {
        setSelectedSkills((prev) =>
            prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
        );
    };
    //
    const startInterview = async () => {
        if (
            !selectedCompany || !selectedAcademic || !selectedCareer ||
            !selectedProject || !selectedKeyword || selectedSkills.length === 0
        ){
            alert("모든 항목을 선택해주세요.");
            return;
        }

        const message =
            `선택한 회사: ${selectedCompany}
            전공 여부: ${selectedAcademic}
            경력: ${selectedCareer}
            프로젝트 경험: ${selectedProject}
            직무: ${selectedKeyword}
            기술스택: ${selectedSkills.join(", ")}`;

        if (!window.confirm(message)) return;

        const interviewData = {
            company: selectedCompany,
            academic: selectedAcademic,
            career: selectedCareer,
            project: selectedProject,
            keyword: selectedKeyword,
            skills: selectedSkills,
        };

        try {


            // 아래 코드는 백엔드 연결되면 풀기
            // const response =
            //     await axios.post("/api/interview/start", interviewData); // "/api/interview/start" 는 임시 경로
            // console.log("서버 응답:", response.data);

            // 서버 전송 성공 시 인터뷰 정보도 로컬에 저장(필요하다면)
            localStorage.setItem("interviewInfo", JSON.stringify(interviewData));
            navigate("/ai-interview/ai-test");
        } catch (error){
            console.error(error);
            alert("인터뷰 정보 전송 중 오류가 발생했습니다.");
        }
    };

    useEffect(() => {
        let userToken = localStorage.getItem("userToken");
        // const userToken = localStorage.getItem("userToken");

        // 임시 테스트용: userToken이 없으면 자동으로 더미 토큰 생성 => 나중에 삭제
        if (!userToken) {
            console.warn("로그인 토큰 없음 → 개발모드로 더미 토큰 발급");
            userToken = "dev-dummy-token";
            localStorage.setItem("userToken", userToken);
        }
        // 연결하면 주석 풀어야 함
        // if (!userToken) {
        //     alert("로그인이 필요합니다. 로그인 페이지로 이동합니다.");
        //     navigate("/account/login") // 로그인 페이지 가는 경로
        //     return;
        // }
        // 안내문 재생 코드
        const message =`안녕하십니까? AI 모의 면접 서비스입니다. 
                        본 면접은 특정 기업 및 직무에 맞추어진 TECH-INTERVIEW입니다. 
                        모의면접에는 마이크와 카메라의 사용이 필요합니다. 
                        시작에 앞서 체크리스트를 작성하여 주십시오.`;
        const utterance = new SpeechSynthesisUtterance(message);
        utterance.lang = "ko-KR";
        utterance.rate = 1;
        utterance.pitch = 1;

        window.speechSynthesis.cancel(); // 재생중인 음성 취소
        window.speechSynthesis.speak(utterance);

        // 페이지 이탈 시 정보 삭제, 음성 중단
        const handleBeforeUnload = () => {
            if (window.speechSynthesis.speaking) window.speechSynthesis.cancel();
        };

        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => {
            if (window.speechSynthesis.speaking) window.speechSynthesis.cancel();
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [navigate]);

    return (
        <main>
            <S.ControlMargin>
                <S.TabContainer>
                    {tabs.map((tab) => (
                        <S.TabButton
                            key= {tab}
                            active={activeTab === tab}
                            onClick={()=> setActiveTab(tab)}
                        >
                            {tab}
                        </S.TabButton>
                    ))}
                </S.TabContainer>

                {activeTab === "회사" && (
                    <S.ChipContainer>
                        {companies.map((c) => (
                        <S.ChipButton
                            key={c}
                            selected={selectedCompany === c}
                            onClick={() => handleSelect("회사", c)}
                        >
                            {c}
                        </S.ChipButton>
                    ))}
                    </S.ChipContainer>
                )}
                {activeTab === "전공 여부" && (
                    <S.ChipContainer>
                        {academics.map((a) => (
                            <S.ChipButton
                                key={a}
                                selected={selectedAcademic === a}
                                onClick={() => handleSelect("전공 여부", a)}
                            >
                                {a}
                            </S.ChipButton>
                        ))}
                    </S.ChipContainer>
                )}

                {activeTab === "경력" && (
                    <S.ChipContainer>
                        {careers.map((c) => (
                            <S.ChipButton
                                key={c}
                                selected={selectedCareer === c}
                                onClick={() => handleSelect("경력", c)}
                            >
                                {c}
                            </S.ChipButton>
                        ))}
                    </S.ChipContainer>
                )}

                {activeTab === "프로젝트 경험" && (
                    <S.ChipContainer>
                        {projects.map((p) => (
                            <S.ChipButton
                                key={p}
                                selected={selectedProject === p}
                                onClick={() => handleSelect("프로젝트 경험", p)}
                            >
                                {p}
                            </S.ChipButton>
                        ))}
                    </S.ChipContainer>
                )}

                {activeTab === "직무" && (
                    <S.ChipContainer>
                        {keywords.map((k) => (
                            <S.ChipButton
                                key={k}
                                selected={selectedKeyword === k}
                                onClick={() => handleSelect("직무", k)}
                            >
                                {k}
                            </S.ChipButton>
                        ))}
                    </S.ChipContainer>
                )}

                {activeTab === "Tech Skills" && (
                    <S.ChipContainer>
                        {skills.map((s) => (
                            <S.ChipButton
                                key={s}
                                selected={selectedSkills.includes(s)}
                                onClick={() => handleSkillToggle(s)}
                            >
                                {s}
                            </S.ChipButton>
                        ))}
                    </S.ChipContainer>
                )}
                <InterviewNotice onSubmit={startInterview} />
            </S.ControlMargin>
        </main>
    );

};

export default InterviewChecklist;