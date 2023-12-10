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
import Login from "./components/Login";
import Store from "./context/Store";

function App() {
  return (
    <>
      <Title />
      <Store>
        <Layout>
          <Routes>
            <Route path={APP_ROUTES.ROOT} element={<HomePage />} />
            <Route path={APP_ROUTES.LOGIN} element={<Login />} />
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
