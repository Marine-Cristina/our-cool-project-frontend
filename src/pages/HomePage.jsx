import { Flex } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../core/constants";
import Header from "/headerimage.png";
import MainFilters from "../components/Filters/MainFilters";

function HomePage() {
  const navigate = useNavigate();

  const handleSearch = (filters) => {
    const countryCode = filters.country.iso2;
    const stateCode = filters.state.state_code;
    const friendlyValue = filters.friendlyList.join(",");

    navigate(
      `${APP_ROUTES.BUSINESSES}/?country=${countryCode}&city=${stateCode}&friendly=${friendlyValue}`
    );
  };

  return (
    <>
      <Flex
        gap={90}
        justify="center"
        align="center"
        className="homepage-header"
        style={{ width: "100%", margin: "10px" }}
      >
        <Flex vertical="true" align="center" gap={1}>
          <h1>Connecting Compassionate Spaces.</h1>
          <h3 className="slogan">
            Your Guide to Pet-Friendly, Child-Friendly, Eco-Friendly,
            Vegan-Friendly, and Accessible Businesses & Events.
          </h3>
        </Flex>
        <NavLink to={`${APP_ROUTES.ABOUT}`}>
          <img src={Header} alt="Spherendly header image" />
        </NavLink>
      </Flex>

      <MainFilters onSearch={handleSearch} />
    </>
  );
}

export default HomePage;
