import { useState } from "react";
import "./index.css";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import AllBusinesses from "./components/AllBusinesses";
import DetailsBusinessPage from "./pages/DetailsBusinessPage";
import CreateBusiness from "./components/CreateBusiness";
import CreateEvents from "./components/CreateEvents";
import DetailsEventsPage from "./pages/DetailsEventsPage";
import DeleteBusiness from "./components/DeleteBusiness";
import FilterBusiness from "./components/FilterBusinesses";
import FilterEvent from "./components/FilterEvents";
import Title from "./components/Title";
import Layout from "./components/Layout";
import { APP_ROUTES } from "./core/constants";
import LoginPage from "./pages/LoginPage";
import Store from "./context/Store";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <>
      <Title />
      <Store>
        <Layout>
          <Routes>
            <Route path={APP_ROUTES.ROOT} element={<HomePage />} />
            <Route path={APP_ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={APP_ROUTES.SIGN_UP} element={<SignUpPage />} />

            <Route path={APP_ROUTES.BUSINESSES} element={<AllBusinesses />} />
            <Route path="/events" element={<CreateEvents />} />
            <Route
              path="/businesses/:businessId"
              element={<DetailsBusinessPage />}
            />
            <Route path="/events/:eventId" element={<DetailsEventsPage />} />
            <Route path="/deletebusiness" element={<DeleteBusiness />} />
            <Route path="/filterevent" element={<FilterEvent />} />
            <Route path="/filterbusiness" element={<FilterBusiness />} />
          </Routes>
        </Layout>
      </Store>
    </>
  );
}

export default App;
