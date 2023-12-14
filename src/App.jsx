import "./index.css";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import AllBusinesses from "./components/AllBusinesses";
import AllEvents from "./components/AllEvents";
import DetailsBusinessPage from "./pages/DetailsBusinessPage";
import BusinessForm from "./components/BusinessForm";
import CreateEvent from "./components/EventForm";
import DetailsEventsPage from "./pages/DetailsEventsPage";
import Title from "./components/Layout/Title";
import Layout from "./components/Layout/Layout";
import { APP_ROUTES } from "./core/constants";
import Store from "./context/Store";
import NotFoundPage from "./pages/NotFoundPage";
import EditBusinessPage from "./pages/EditBusinessPage";
import EditEventPage from "./pages/EditEventPage";
import IsPrivate from "./components/IsPrivate";
import AboutPage from "./pages/AboutPage";

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
              element={
                <IsPrivate>
                  <DetailsBusinessPage />
                </IsPrivate>
              }
            />
            <Route
              path={APP_ROUTES.EVENT_BY_ID}
              element={
                <IsPrivate>
                  <DetailsEventsPage />
                </IsPrivate>
              }
            />

            <Route
              path={APP_ROUTES.NEW_BUSINESS}
              element={
                <IsPrivate>
                  <BusinessForm />
                </IsPrivate>
              }
            />
            <Route
              path={APP_ROUTES.NEW_EVENT}
              element={
                <IsPrivate>
                  <CreateEvent />
                </IsPrivate>
              }
            />

            <Route
              path={APP_ROUTES.EDIT_BUSINESS}
              element={
                <IsPrivate>
                  <EditBusinessPage />
                </IsPrivate>
              }
            />

            <Route
              path={APP_ROUTES.EDIT_EVENT}
              element={
                <IsPrivate>
                  <EditEventPage />
                </IsPrivate>
              }
            />

            <Route path={APP_ROUTES.ABOUT} element={<AboutPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Store>
    </>
  );
}

export default App;
