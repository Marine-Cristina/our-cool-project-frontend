import React from "react";
import { Button, List } from "antd";
import { useNavigate } from "react-router-dom";
import accessibility from "/accessibility.png";
import child from "/child.png";
import eco from "/eco.png";
import pet from "/pet.png";
import vegan from "/vegan.png";
import Header from "/headerimage.png";
import OrgLogo from "/orglogo.png";

function AboutPage() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(-1);
  };

  const featureList = [
    {
      title: "Pet-Friendly",
      image: pet,
      description:
        "Unleash joy with businesses that roll out the welcome mat for your furry friends. From cozy cafes to adventurous destinations, find spots where pets are not just allowed but celebrated!",
    },
    // Add more features as needed
  ];

  return (
    <>
      <List itemLayout="vertical" size="large">
        <List.Item>
          <List.Item.Meta
            title={
              <div>
                <img width={200} alt="Sphierndly title image" src={Header} />
                <h3>ABOUT SPHIERNDLY</h3>{" "}
              </div>
            }
          />
          <p>
            Welcome to Sphierndly! Where businesses come to shine with unique
            charm! Discover a world of businesses that embrace diversity and
            cater to everyone's needs. Whether you're a pet lover, a parent
            seeking family-friendly spaces, an eco-warrior, a vegan enthusiast,
            or someone with accessibility needs, Sphierndly is your go-to
            platform!"
          </p>
        </List.Item>

        <List.Item>
          <List.Item.Meta
            title={
              <div
                style={{
                  display: "flex",

                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <img width={50} alt="logo" src={pet} />
                <h3>Pet-Friendly</h3>{" "}
              </div>
            }
          />
          <p>
            Welcome to Sphierndly! Where businesses come to shine with unique
            charm! Discover a world of businesses that embrace diversity and
            cater to everyone's needs. Whether you're a pet lover, a parent
            seeking family-friendly spaces, an eco-warrior, a vegan enthusiast,
            or someone with accessibility needs, Sphierndly is your go-to
            platform!
          </p>
        </List.Item>
        <List.Item>
          <List.Item.Meta
            title={
              <div
                style={{
                  display: "flex",

                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <img width={50} alt="logo" src={child} />
                <h3>Child-Friendly</h3>{" "}
              </div>
            }
          />
          <p>
            Create lasting memories with family-friendly businesses that
            understand the art of entertaining little ones. Sphierndly is the
            perfect guide for parents seeking safe, exciting, and engaging
            places for family fun.
          </p>
        </List.Item>
        <List.Item>
          <List.Item.Meta
            title={
              <div
                style={{
                  display: "flex",

                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <img width={50} alt="logo" src={eco} />
                <h3>Eco-Friendly</h3>{" "}
              </div>
            }
          />
          <p>
            Join the green movement! Explore businesses that prioritize
            sustainability, eco-conscious practices, and a commitment to
            preserving our planet. Sphierndly connects you with businesses that
            share your love for Mother Earth.
          </p>
        </List.Item>
        <List.Item>
          <List.Item.Meta
            title={
              <div
                style={{
                  display: "flex",

                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <img width={50} alt="logo" src={vegan} />
                <h3>Vegan-Friendly</h3>{" "}
              </div>
            }
          />
          <p>
            Savor the flavor of compassion! Discover a delectable array of
            vegan-friendly businesses that cater to your plant-based
            preferences. From delightful restaurants to trendy boutiques, find
            vegan options that tantalize your taste buds.
          </p>
        </List.Item>
        <List.Item>
          <List.Item.Meta
            title={
              <div
                style={{
                  display: "flex",

                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <img width={50} alt="logo" src={accessibility} />
                <h3>Accessibility-Friendly</h3>{" "}
              </div>
            }
          />
          <p>
            Inclusivity matters! Sphierndly ensures that everyone feels welcome.
            Explore businesses that go the extra mile to provide accessibility
            features, making spaces welcoming for individuals with diverse
            abilities.
          </p>
        </List.Item>
        <List.Item>
          <List.Item.Meta
            title={
              <div>
                <img
                  width={200}
                  alt="Marine and Cristina Organisation Logo"
                  src={OrgLogo}
                />
                <h3>Created by: Marine & Cristina</h3>{" "}
              </div>
            }
          />
          <p>
            We have successfully collaborated on this project for one week,
            demonstrating effective teamwork and delivering quality outcomes.
            Feel free to explore our LinkedIn profiles for a more in-depth look
            at our professional backgrounds:
          </p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <a href="https://www.linkedin.com/in/marine-rossi-00b933a5/">
              Marine's LinkedIn Profile
            </a>
            <a href="https://www.linkedin.com/in/cristinaramospascual">
              Cristina's LinkedIn Profile
            </a>
          </div>
        </List.Item>
      </List>

      <Button onClick={handleOnClick} style={{ margin: "20px" }}>
        Back
      </Button>
    </>
  );
}

export default AboutPage;
