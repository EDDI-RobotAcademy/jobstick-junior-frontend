import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import { CircularProgress } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage.tsx";
import {NavBar} from "./components/NavigationBar";
import {Footer} from "./components/Footer";
import styled from "styled-components";
const JobPostingsApp = lazy(() => import("jobPostingsApp/App"));
const MyPageApp = lazy(() => import("myPageApp/App"));
const MemberShipApp = lazy(() => import("membershipApp/App"));

// ① NavBar 높이 상수화
const APP_BAR_HEIGHT = "72px";

// ② 본문을 NavBar 높이만큼 아래로 미는 Wrapper
const MainLayout = styled.div`
  padding-top: ${APP_BAR_HEIGHT};
  min-height: calc(100vh - ${APP_BAR_HEIGHT}); /* Footer 포함 안 하면 calc 필요 없어요 */
  box-sizing: border-box;
`;
const App = () => {

    return (
        <BrowserRouter>
            <NavBar />
            <MainLayout>
                <Suspense fallback={<CircularProgress />}>
                    <Routes>
                        <Route path="/" element={<MainPage/>} />
                        <Route path="/job-postings" element={<JobPostingsApp />} />
                        <Route path="/mypage" element={<MyPageApp />} />
                        <Route path="/membership" element={<MemberShipApp/>}/>
                    </Routes>
                </Suspense>
            </MainLayout>
            <Footer />
        </BrowserRouter>
    );
};

export default App;

const container = document.getElementById("app") as HTMLElement;
if (!container) {
    throw new Error("Root container #app not found");
}

const root = ReactDOM.createRoot(container);
root.render(<App />);