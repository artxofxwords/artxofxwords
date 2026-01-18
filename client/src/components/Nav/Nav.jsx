/* eslint-disable no-unused-vars */
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Nav() {
  //responsive design using react-responsive
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  // const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "row",
        columnGap: "3px",
        flexWrap: "wrap",
      }}
    >
      {(isDesktopOrLaptop || isBigScreen) && (
        <>
          <Button
            style={{
              display: "flex",
              alignItems: "center",
              color: "#ffffff",
              backgroundColor: "#d97271",
              border: "solid white",
              borderRadius: "8px",
              height: "5vh",
            }}
            as={Link}
            to="/project1"
          >
            <p>Photography 🧁</p>
          </Button>

          <Button
            style={{
              display: "flex",
              alignItems: "center",
              color: "#ffffff",
              backgroundColor: "#d97271",
              border: "solid white",
              borderRadius: "8px",
              height: "5vh",
            }}
            as={Link}
            to="/project2"
          >
            <p>Graphic Design 🌸</p>
          </Button>

          <Button
            style={{
              display: "flex",
              alignItems: "center",
              color: "#ffffff",
              backgroundColor: "#d97271",
              border: "solid white",
              borderRadius: "8px",
              height: "5vh",
            }}
            as={Link}
            to="/project3"
          >
            <p>Web Development 🍉</p>
          </Button>

          <Button
            style={{
              display: "flex",
              alignItems: "center",
              color: "#ffffff",
              backgroundColor: "#d97271",
              border: "solid white",
              borderRadius: "8px",
              height: "5vh",
            }}
            as={Link}
            to="/project4"
          >
            <p>Digital Products 🎈</p>
          </Button>

          <Button
            style={{
              display: "flex",
              alignItems: "center",
              color: "#ffffff",
              backgroundColor: "#d97271",
              border: "solid white",
              borderRadius: "8px",
              height: "5vh",
            }}
            as={Link}
            to="/project5"
          >
            <p>CV | RESUME 🎀</p>
          </Button>
        </>
      )}

      {(isTabletOrMobile || isPortrait) && (
        <>
          <Button
            style={{
              display: "flex",
              alignItems: "center",
              color: "#ffffff",
              backgroundColor: "#d97271",
              border: "solid white",
              borderRadius: "8px",
              height: "3vh",
            }}
            as={Link}
            to="/project1"
          >
            <p style={{ fontSize: "0.5em" }}>Photography 🧁</p>
          </Button>

          <Button
            style={{
              display: "flex",
              alignItems: "center",
              color: "#ffffff",
              backgroundColor: "#d97271",
              border: "solid white",
              borderRadius: "8px",
              height: "3vh",
            }}
            as={Link}
            to="/project2"
          >
            <p style={{ fontSize: "0.5em" }}>Graphic Design 🌸</p>
          </Button>

          <Button
            style={{
              display: "flex",
              alignItems: "center",
              color: "#ffffff",
              backgroundColor: "#d97271",
              border: "solid white",
              borderRadius: "8px",
              height: "3vh",
            }}
            as={Link}
            to="/project3"
          >
            <p style={{ fontSize: "0.5em" }}>Web Development 🍉</p>
          </Button>

          <Button
            style={{
              display: "flex",
              alignItems: "center",
              color: "#ffffff",
              backgroundColor: "#d97271",
              border: "solid white",
              borderRadius: "8px",
              height: "3vh",
            }}
            as={Link}
            to="/project4"
          >
            <p style={{ fontSize: "0.5em" }}>Digital Products 🎈</p>
          </Button>

          <Button
            style={{
              display: "flex",
              alignItems: "center",
              color: "#ffffff",
              backgroundColor: "#d97271",
              border: "solid white",
              borderRadius: "8px",
              height: "3vh",
            }}
            as={Link}
            to="/project5"
          >
            <p style={{ fontSize: "0.5em" }}>CV | RESUME 🎀</p>
          </Button>
        </>
      )}
    </div>
  );
}
