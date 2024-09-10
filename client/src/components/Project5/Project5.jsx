// import {useState} from "react";
import ThemedHeader from "../Welcome/ThemedHeader";
import BootcampCertModal from "./BootcampCertModal";
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
          <p>
            <a href="https://www.uprighted.com/">Upright Education</a> -{" "}
            <b>Capstone Portal</b> - Single Page Application, Role-Based Access,
            Database
          </p>
          <p>
            <ul>
              <li>
                Markets capstone sponsorship program for various tech bootcamps
              </li>
              <li>
                User registration to submit proposals for sponsorship projects
              </li>
              <li>User login to view proposal submission status</li>
              <li>
                Admin control panel with full CRUD functionality of users &
                proposals
              </li>
              <li>
                MERN (Mongo DB, Express, React, Node), NodeMailer,
                Render/Netlify hosting
              </li>
            </ul>
          </p>
          <p>
            <a href="https://www.kilwaadventures.com">
              Kilwa Adventures & Watersports
            </a>{" "}
            - Multi-Page Website, Inquiries, Bookings, Contact
          </p>
          <ul>
            <li>Original design logo & theme with Adobe Photoshop</li>
            <li>Features tourism for community development emphasis</li>
            <li>
              Company owner login and edit pages to update pricing & specials
            </li>
            <li>
              Booking form using Google Forms, populates Microsoft Excel sheet,
              notifies company Gmail
            </li>
            <li>
              SSL with CloudFlare, donation page with DonorBox (PayPal enabled)
            </li>
          </ul>

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

          <h1>Resume</h1>
          <p>
            Oct 2023 - Present: Remote After Hours Supervisor for Private Senior
            Care Company -{" "}
            <a href="https://www.homeinstead.com/location/589/">Home Instead</a>
          </p>
          <ul>
            <li>
              On call evenings, weekends, holidays when home office is closed
            </li>
            <li>
              Tracks calls & incidents using Microsoft Excel, Teams, Outlook,
              and Google Voice
            </li>
            <li>
              Manages caregiver & client schedules using WellSky Personal Care
              software
            </li>
          </ul>

          <p style={{ color: "gray", textAlign: "right", fontSize: "0.7em" }}>
            <i>Updated 09/2024</i>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
