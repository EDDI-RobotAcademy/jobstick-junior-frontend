import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import InterviewReadyPage from "./interview/ready/InterviewReadyPage.tsx";
import InterviewTestPage from "./interview/start/InterviewTestPage.tsx";

const App = () => (
    <BrowserRouter>
        <Routes>
            {/* /ai-interview → /ai-interview/ready로 이동 */}
            <Route path="/" element={<Navigate to="/ai-interview/ready" replace />} />

            {/* 인터뷰 준비 체크리스트 페이지 */}
            <Route path="/ai-interview/ready" element={<InterviewReadyPage />} />

            {/* 면접 페이지 */}
            <Route  path="/ai-test" element={<InterviewTestPage />} />

            {/* 모든 나머지 경로는 /ai-interview/ready로 이동 */}
            <Route path="*" element={<Navigate to="/ai-interview/ready" replace />} />
        </Routes>
    </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);

export default App;