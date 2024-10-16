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
        height: "auto",
        alignItems: "center",
        backgroundColor: "#f4d2c8",
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

        <div
          style={{
            fontSize: "1.2em",
            textAlign: "justify",
            marginTop: "4vh",
            marginBottom: "8vh"
          }}
        >
          <h2
            style={{
              color: "white",
              textShadow: "1px 1px 2px #5a555e",
            }}
          >
            You&apos;re here to learn about me and see what I can do, so
            I&apos;ll get right into it...
          </h2>

          <p>
            My name is Amanda and I&apos;m a Junior Software Engineer since Sept
            2024. I am currently doing part-time contract work, waiting for the
            right opportunity to break into the tech field as a developer. My
            experience in Software Development extends only to web application
            creation using MERN. Refer to my CV/Resume for details.
          </p>

          <p>
            💪🏻 My Strengths:
            <ul
              style={{
                listStyleType: "none",
              }}
            >
              <li>
                <span
                  style={{
                    fontSize: "1.2em",
                    color: "white",
                    textShadow: "1px 1px 2px #d97271",
                  }}
                >
                  A Quick Study
                </span>
                <br />
                If you are clear and thorough, I can be taught anything. I have
                good problem solving skills and intuition. Employers have been
                pleasantly surprised by how quickly they can release me to work
                solo.
              </li>
              <br />
              <li>
                <span
                  style={{
                    fontSize: "1.2em",
                    color: "white",
                    textShadow: "1px 1px 2px #d97271",
                  }}
                >
                  An Excellent Communicator
                </span>
                <br />I have worked both on-site and remotely. In each role I
                have been thorough in documentation and consistent in
                communication. I wrote documents with recommendations for better
                efficiency, created Excel logs for noticing trends, and
                succeeded as liaison between a call service and the office
                staff.
              </li>
              <br />
              <li>
                <span
                  style={{
                    fontSize: "1.2em",
                    color: "white",
                    textShadow: "1px 1px 2px #d97271",
                  }}
                >
                  Reliable
                </span>
                <br />I have always given advance notice of sick days, lateness,
                and resignation to employers. I do not bring personal business
                into work, and nothing in my personal life has ever impeded my
                ability to fulfill my responsibilities. When I agree to do
                something, I do it. I can be counted on to do mundane,
                repetitive tasks or fast-paced, challenging tasks, as long as I
                am properly briefed on expectations.
              </li>
              <br />
              <li>
                <span
                  style={{
                    fontSize: "1.2em",
                    color: "white",
                    textShadow: "1px 1px 2px #d97271",
                  }}
                >
                  A Team Player
                </span>
                <br />I grew up playing sports, volleyball was my favorite. I
                coached HS girls volleyball for five seasons. I went on group
                work trips, service trips (after Katrina), and community
                development trips (East Africa), and for all of these
                experiences I was flexible and willing to take on what was
                needed for the group to succeed. I do not participate in harmful
                workplace gossip, favoritism, or any kind of dishonesty that
                negatively impacts the team.
              </li>
              <br />
              <li>
                <span
                  style={{
                    fontSize: "1.2em",
                    color: "white",
                    textShadow: "1px 1px 2px #d97271",
                  }}
                >
                  A Well-Rounded Person
                </span>
                <br />I have had such diverse life and work experience, I can be
                valuable to a wide range of employers. I speak English, Swahili,
                and Portuguese and lived more than 3yrs in each country where I
                learned those languages. I have coaching, Early Childhood
                education, audio transcription, website building, senior
                caregiving, and more experience. I&apos;ve worked onsite in a
                school, office, and gym, as well as fully remote contract; my
                shifts varied morning, evening, and overnight.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
