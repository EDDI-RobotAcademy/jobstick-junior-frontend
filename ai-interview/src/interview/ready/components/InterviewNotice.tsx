import "../styles/InterviewNotice.css";

interface InterviewNoticeProps {
    onSubmit: () => void;
}

const InterviewNotice: React.FC<InterviewNoticeProps> = ({ onSubmit }) => {
    return (
        <section className="interviewNotice__container">
            <h2 className="interviewNotice__title">안녕하십니까? AI 모의 면접 서비스입니다.</h2>
            <div className="interviewNotice__notice-box">
                <p className="interviewNotice__notice-title">사전 공지</p>
                <div className="interviewNotice__notice-list">
                    <p>• 본 면접은 특정 기업 및 직무에 맞추어진 <strong>TECH-INTERVIEW</strong>입니다.</p>
                    <p>• 모의면접에는 <strong>마이크, 카메라</strong>의 사용이 필요합니다.</p>
                </div>
            </div>

            <p className="interviewNotice__description">
                시작에 앞서 체크리스트를 작성하여 주십시오.
            </p>

            <button className="interviewNotice__submit-button" onClick={onSubmit}>
                제출하기
            </button>
        </section>
    );
};

export default InterviewNotice;
