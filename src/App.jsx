import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import DetailsBusinessPage from "./pages/DetailsBusinessPage";
import CreateBusiness from "./components/CreateBusiness";
import CreateEvents from "./components/CreateEvents";
import DetailsEventsPage from "./pages/DetailsEventsPage";
import DeleteBusiness from "./components/DeleteBusiness";
import FilterBusiness from "./components/FilterBusinesses";
import FilterEvent from "./components/FilterEvents";
import Title from "./components/Title";

function App() {
  return (
    <>
      <Title />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/businesses" element={<CreateBusiness />} />
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
    </>
  );
}

export default App;
