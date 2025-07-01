import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";

// === 스타일 정의 ===

const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 24px 16px;
  background-color: #ffffff;
  min-height: 100vh;
`;

const SortBar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 24px;

  button {
    padding: 8px 16px;
    background-color: #e2e8f0;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background-color: #cbd5e1;
    }
  }
`;

const AccordionSection = styled.section`
  margin-bottom: 24px;

  details {
    background-color: #f1f5f9;
    padding: 16px;
    border-radius: 6px;
    cursor: pointer;

    summary {
      font-weight: bold;
    }

    ul {
      margin-top: 12px;
      margin-left: 20px;
      color: #374151;
      list-style: disc;
    }
  }
`;

const Main = styled.main``;

const ReviewTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const ReviewCard = styled.section`
  background-color: #f9fafb;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  h3 {
    font-size: 18px;
    font-weight: 700;
    color: #1d4ed8;
    margin-bottom: 4px;
  }

  .meta {
    font-size: 14px;
    color: #6b7280;
    margin-bottom: 4px;
  }

  .stars {
    color: #facc15;
    margin-bottom: 8px;
  }

  .buttons {
    margin-top: 12px;
    display: flex;
    gap: 8px;

    button {
      padding: 6px 12px;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;

      &:first-child {
        background-color: #3b82f6;

        &:hover {
          background-color: #2563eb;
        }
      }

      &:last-child {
        background-color: #ef4444;

        &:hover {
          background-color: #dc2626;
        }
      }
    }
  }
`;

const Pagination = styled.footer`
  text-align: center;
  margin-top: 40px;

  span {
    margin: 0 8px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const App = () => {
    return (
        <Container>
//네비바 자리
            <SortBar>{/* 이동 로직구현필요 */}
                <button>최신순</button>
                <button>별점순</button>
                <button>댓글순</button>
            </SortBar>

            <AccordionSection>
                <details>{/* 이동 로직구현필요 */}
                    <summary>카테고리 선택</summary>
                    <ul>
                        <li>전체</li>
                        <li>회사</li>
                        <li>AI면접</li>
                        <li>기타</li>
                    </ul>
                </details>
            </AccordionSection>

            <Main>
                <ReviewTitle>📝 리뷰 목록</ReviewTitle>

                <ReviewCard>
                    <h3>만족스러운 경험이었어요!</h3>
                    <p className="meta">작성자: 홍길동 | 작성일: 2025-07-01</p>
                    <p >카테고리 : 회사 </p>
                    <p className="stars">⭐️⭐️⭐️⭐️☆</p>
                    <p>이 회사에 지원하며 많은 도움을 받았어요.</p>
                    <div className="buttons">{/*클릭시 수정 삭제 구현필요*/}
                        <button>수정</button>
                        <button>삭제</button>
                    </div>
                </ReviewCard>

                <ReviewCard>
                    <h3> 조금 어려웠지만 유익했어요</h3>
                    <p className="meta">작성자: 임꺽정 | 작성일: 2025-06-30</p>
                    <p >카테고리 : AI면접 </p>
                    <p className="stars">⭐️⭐️⭐️☆☆</p>
                    <p>AI 질문이 다양해서 당황했지만 좋은 경험이었습니다.</p>
                    <div className="buttons">{/*클릭시 수정 삭제 구현필요*/}
                        <button>수정</button>
                        <button>삭제</button>
                    </div>
                </ReviewCard>
            </Main>

            <Pagination>
                <span>[1]</span>{/*페이지 이동 로직구현 필요, 유즈네비게이트 형식 이용가능*/}
                <span>[2]</span>
                <span>[3]</span>
                <span>...</span>
                <span>[10]</span>
            </Pagination>
        </Container>
    );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
