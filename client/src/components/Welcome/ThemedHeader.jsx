/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect, useContext } from "react";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import headerBackground from "../../assets/sunriseSkyHeader.png";
import SunrisePalette from "../../assets/SunriseSkyScheme.png";
import ThemeRound from "../../../favicon.ico";
import HomeButton from "../../assets/circleHomeButton.png";
import editIcon from "../../assets/editIcon.png";
import Nav from "../Nav/Nav";
import CTX from "../Context/Context";

export default function ThemedHeader() {
  const navigate = useNavigate();
  const CONTEXT = useContext(CTX);

  //responsive design using react-responsive
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  // const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  //for welcome by input name
  const [guestName, setGuestName] = useState(localStorage.getItem("guestName"));
  const [nameForm, setNameForm] = useState(false);
  const [editButton, setEditButton] = useState(true);

  useEffect(() => {
    if (nameForm === false) {
      setEditButton(true);
    } else {
      setEditButton(false);
      setTimeout(() => setNameForm(false), 5000);
      stashGuestName();
    }
  }, [nameForm]);

  function stashGuestName() {
    localStorage.removeItem("guestName");

    setTimeout(() => localStorage.setItem("guestName", guestName), 10000);
    setTimeout(() => localStorage.removeItem("guestName"), 300000);
  }

  return (
    <div style={{ display: "inline-flex", flexDirection: "column" }}>
      {(isDesktopOrLaptop || isBigScreen) && (
        <>
          <div
            style={{
              display: "inline-flex",
              flexDirection: "row",
            }}
          >
            <img
              src={headerBackground}
              style={{ display: "flex", width: "45vw", height: "20vh" }}
            />
            <img
              src={SunrisePalette}
              style={{ display: "flex", width: "55vw", height: "20vh" }}
            />
          </div>

          <div
            style={{
              display: "inline-flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#ccf0f0",
              padding: "10px",
            }}
          >
            <h1
              style={{
                display: "flex",
                width: "85vw",
                color: "white",
                fontSize: "3em",
                textShadow: "1px 1px 2px #f4d2c8",
              }}
            >
              HELLO {guestName}{" "}
              {nameForm && (
                <form>
                  <input
                    type="text"
                    id="guestName"
                    placeholder="name"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    style={{
                      width: "13vw",
                      borderRadius: "8px",
                      border: "0px",
                      marginLeft: "10px",
                    }}
                  />
                </form>
              )}{" "}
              {editButton && (
                <Button
                  onClick={() => setNameForm(true)}
                  style={{
                    border: "0px",
                    backgroundColor: "transparent",
                  }}
                >
                  <img src={editIcon} width="15px" height="15px" />
                </Button>
              )}
            </h1>
            <Nav />
            <Button
              onClick={() => {
                navigate("/");
              }}
              style={{
                border: "0px",
                backgroundColor: "transparent",
              }}
            >
              <img
                src={HomeButton}
                style={{ width: "60px", height: "60px" }}
              ></img>
            </Button>
          </div>
        </>
      )}

      {(isTabletOrMobile || isPortrait) && (
        <>
          <div
            style={{
              display: "inline-flex",
              flexDirection: "row",
            }}
          >
            <img
              src={headerBackground}
              style={{ display: "flex", width: "45vw", height: "8vh" }}
            />
            <img
              src={SunrisePalette}
              style={{ display: "flex", width: "55vw", height: "8vh" }}
            />
          </div>

          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              justifyItems: "center",
              backgroundColor: "#ccf0f0",
              padding: "15px",
            }}
          >
            <h1
              style={{
                display: "flex",
                width: "screen",
                color: "white",
                fontSize: "1.2em",
                textShadow: "1px 1px 2px #f4d2c8",
              }}
            >
              HELLO {guestName}{" "}
              {nameForm && (
                <form>
                  <input
                    type="text"
                    id="guestName"
                    placeholder="name"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    style={{
                      width: "15vw",
                      borderRadius: "8px",
                      marginLeft: "10px",
                      backgroundColor: "#ccf0f0",
                    }}
                  />
                </form>
              )}{" "}
              {editButton && (
                <Button
                  onClick={() => setNameForm(true)}
                  style={{
                    display: "flex",
                    border: "0px",
                    backgroundColor: "transparent",
                  }}
                >
                  <img src={editIcon} width="15px" height="15px" />
                </Button>
              )}
            </h1>
            <Nav />
            <Button
              onClick={() => {
                navigate("/");
              }}
              style={{
                border: "0px",
                backgroundColor: "transparent",
              }}
            >
              <img
                src={HomeButton}
                style={{ width: "30px", height: "30px" }}
              ></img>
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
