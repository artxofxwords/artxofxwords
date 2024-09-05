/* eslint-disable no-unused-vars */
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Button } from "semantic-ui-react";
import { useState, useEffect } from "react";
import themeIcon from "../../assets/bulletIcon.png";
import ModalExampleDimmer from "./NameModal";

export default function Intro() {
  //responsive design using react-responsive
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  // const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  const [mobileHello, setMobileHello] = useState(false);

  useEffect(() => {
    if (mobileHello) {
      setTimeout(() => setMobileHello(false), 2000);
    }
  }, [mobileHello]);

  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        width: "100vw",
        height: "35vh",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex-block", width: "70vw", marginTop: "3vh" }}>
        <p style={{ fontSize: "1.2em" }}>
          <img src={themeIcon} width="25px" height="25px" /> I am{" "}
          <span style={{ color: "#d97271" }}>artxofxwords</span>
        </p>
        <p style={{ fontSize: "1.2em" }}>
          <img src={themeIcon} width="15px" height="15px" /> You have landed on
          my work-in-progress portfolio!
        </p>

        {(isDesktopOrLaptop || isBigScreen) && <ModalExampleDimmer />}
        {(isTabletOrMobile || isPortrait) && (
          <Button
            icon="like"
            onClick={() => setMobileHello(true)}
            style={{ backgroundColor: "transparent" }}
          />
        )}

        {mobileHello && <p>Hi 😎</p>}
      </div>
    </div>
  );
}
