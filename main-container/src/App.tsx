import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import { CircularProgress } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage.tsx";
import {NavBar} from "./components/NavigationBar";
import {Footer} from "./components/Footer";
const JobPostingsApp = lazy(() => import("jobPostingsApp/App"));

const App = () => {

    return (
        <BrowserRouter>
            <NavBar />
            <Suspense fallback={<CircularProgress />}>
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/job-postings" element={<JobPostingsApp />} />
                    {/*<Route path={"/"}*/}
                </Routes>
            </Suspense>
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