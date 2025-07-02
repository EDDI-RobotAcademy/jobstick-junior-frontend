
import * as S from "../styles/InterviewNotice.styles.ts";

interface InterviewNoticeProps {
    onSubmit: () => void;
}

const InterviewNotice: React.FC<InterviewNoticeProps> = ({ onSubmit }) => {
    return (
        <S.Container>
            <S.Title>안녕하십니까? AI 모의 면접 서비스입니다.</S.Title>
            <S.NoticeBox>
                <S.NoticeTitle>사전 공지</S.NoticeTitle>
                <S.NoticeList>
                    <p>• 본 면접은 특정 기업 및 직무에 맞추어진 <strong>TECH-INTERVIEW </strong>입니다.</p>
                    <p>• 모의면접에는 <strong>마이크, 카메라</strong>의 사용이 필요합니다.</p>
                </S.NoticeList>
            </S.NoticeBox>

            <S.Description>
                시작에 앞서 체크리스트를 작성하여 주십시오.
            </S.Description>

            <S.SubmitButton onClick={onSubmit}>
                제출하기
            </S.SubmitButton>
        </S.Container>
    );
};

export default InterviewNotice;
