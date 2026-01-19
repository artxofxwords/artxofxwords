// import {useState} from "react";
import ThemedHeader from "../Welcome/ThemedHeader";
import BootcampCertModal from "./BootcampCertModal";
import Badges from "./Badges";
import Footer from "../Footer/Footer";

export default function Project5() {
  return (
    <>
      <ThemedHeader />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "screen",
          height: "auto",
          marginTop: "3vh",
          marginBottom: "3vh",
        }}
      >
        <div
          style={{
            width: "75vw",
            height: "auto",
            border: "1px dotted #d97271",
            padding: "20px",
          }}
        >
          <h1>Curriculum Vitae</h1>
          <h2>
            Skills
          </h2>
          <p>
            <ul>
              <li>Languages:  HTML/CSS, JavaScript</li>
              <li>Frontend:  Single Page Applications, React Vite</li>
              <li>Backend:  Express, Node, Mongo DB</li>
              <li>Frameworks:  Tailwind, Semantic UI, BootStrap, Contentful, SpringBoot</li>
              <li>Hosting:  Netlify, Render, CloudFlare</li>
            </ul>
          </p>

          <h2>
            Degrees & Certifications
          </h2>
          
          <p>International Studies, BA, Aug 2019</p>
          <p>World Arts, minor, Aug 2019</p>
          <p>Jr Software Engineer, Sept 2024</p>
          <div
            style={{
              display: "inline-flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", width: "2vw" }}>
              <BootcampCertModal />
            </div>
            <div style={{ display: "flex" }}>
              Certificate - <b>Software Development Bootcamp</b> - Upright
              Education / Gordon State College
            </div>
          </div>

          <h1></h1>
          <p>
          </p>
          <ul>
          </ul>

          <p style={{ color: "gray", textAlign: "right", fontSize: "0.7em" }}>
            <i>Updated 01/2026</i>
          </p>
        </div>
      </div>

      <Badges />
      
      <Footer />
    </>
  );
}
