import "./index.css";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import AllBusinesses from "./components/AllBusinesses";
import AllEvents from "./components/AllEvents";
import DetailsBusinessPage from "./pages/DetailsBusinessPage";
import CreateBusiness from "./components/CreateBusiness";
import CreateEvent from "./components/CreateEvent";
import DetailsEventsPage from "./pages/DetailsEventsPage";
import DeleteBusiness from "./components/DeleteBusiness";
import FilterBusiness from "./components/FilterBusinesses";
import FilterEvent from "./components/FilterEvents";
import Title from "./components/Title";
import Layout from "./components/Layout";
import { APP_ROUTES } from "./core/constants";
import Store from "./context/Store";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Title />
      <Store>
        <Layout>
          <Routes>
            <Route path={APP_ROUTES.ROOT} element={<HomePage />} />

            <Route path={APP_ROUTES.BUSINESSES} element={<AllBusinesses />} />
            <Route path={APP_ROUTES.EVENTS} element={<AllEvents />} />

            <Route
              path={APP_ROUTES.BUSINESS_BY_ID}
              element={<DetailsBusinessPage />}
            />
            <Route
              path={APP_ROUTES.EVENT_BY_ID}
              element={<DetailsEventsPage />}
            />

            <Route
              path={APP_ROUTES.NEW_BUSINESS}
              element={<CreateBusiness />}
            />
            <Route path={APP_ROUTES.NEW_EVENT} element={<CreateEvent />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Store>
    </>
  );
}

export default App;
