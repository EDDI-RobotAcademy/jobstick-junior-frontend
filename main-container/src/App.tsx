import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import { CircularProgress } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage.tsx";
const JobPostingsApp = lazy(() => import("jobPostingsApp/App"));
const MyPageApp = lazy(() => import("myPageApp/App"));

const App = () => {

    return (
        <BrowserRouter>
            <Suspense fallback={<CircularProgress />}>
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/job-postings" element={<JobPostingsApp />} />
                    <Route path="/mypage" element={<MyPageApp />} />
<<<<<<< Updated upstream
                    {/*<Route path={"/"}*/}
=======
>>>>>>> Stashed changes
                </Routes>
            </Suspense>
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