import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Tailwind가 포함된 CSS

const App = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-6 bg-white min-h-screen">
            {/*네비바 자리*/}
            //네비자리

            {/* 정렬 바 */}
            <nav className="flex justify-center gap-4 mb-6">
                <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">최신순</button>
                <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">별점순</button>
                <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">댓글순</button>
            </nav>

            {/* 아코디언 바 */}
            <section className="mb-6">
                <details className="bg-gray-100 rounded-md p-4">
                    <summary className="cursor-pointer font-semibold">카테고리 선택</summary>
                    <ul className="ml-4 mt-2 list-disc text-gray-700">
                        <li>전체</li>
                        <li>회사</li>
                        <li>AI면접</li>
                        <li>기타</li>
                    </ul>
                </details>
            </section>

            {/* 리뷰 카드 */}
            <main>
                <h2 className="text-xl font-semibold mb-4">📝 리뷰 목록</h2>

                <section className="bg-gray-50 p-4 rounded-md shadow mb-6">
                    <h3 className="text-lg font-bold text-blue-700 mb-1">[회사] 만족스러운 경험이었어요!</h3>
                    <p className="text-sm text-gray-500 mb-1">작성자: 홍길동 | 작성일: 2025-07-01</p>
                    <p className="mb-2 text-yellow-500">⭐️⭐️⭐️⭐️☆</p>
                    <p className="mb-3">이 회사에 지원하며 많은 도움을 받았어요.</p>
                    <div className="flex gap-2">
                        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">수정</button>
                        <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">삭제</button>
                    </div>
                </section>

                <section className="bg-gray-50 p-4 rounded-md shadow mb-6">
                    <h3 className="text-lg font-bold text-blue-700 mb-1">[AI면접] 조금 어려웠지만 유익했어요</h3>
                    <p className="text-sm text-gray-500 mb-1">작성자: 임꺽정 | 작성일: 2025-06-30</p>
                    <p className="mb-2 text-yellow-500">⭐️⭐️⭐️☆☆</p>
                    <p className="mb-3">AI 질문이 다양해서 당황했지만 좋은 경험이었습니다.</p>
                    <div className="flex gap-2">
                        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">수정</button>
                        <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">삭제</button>
                    </div>
                </section>
            </main>

            {/* 페이지네이션 */}
            <footer className="text-center mt-8 space-x-2">
                <span className="cursor-pointer hover:underline">[1]</span>
                <span className="cursor-pointer hover:underline">[2]</span>
                <span className="cursor-pointer hover:underline">[3]</span>
                <span>...</span>
                <span className="cursor-pointer hover:underline">[10]</span>
            </footer>
        </div>
    );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App/>);
