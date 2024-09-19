import ThemedHeader from "../Welcome/ThemedHeader";
import AboutMe from "./AboutMe";

export default function Project1() {
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
          overflow:"hidden"
        }}
      >
        <div
          style={{
            width: "75vw",
            height: "auto",
            border: "1px dotted #d97271",
            padding: "20px 20px 90px 20px",
            overflow:"scroll"
          }}
        >
            <h2>
                This project was my very first ever creating <i>something from nothing</i> with HTML & CSS. I used <a target="_blank" href="https://codepen.io/artxofxwords/pen/OJGMWov">CodePen</a> and I was so proud of it! 
            </h2>
            <h4>
                Apologies to mobile users, this page is rough! I was far from responsive design at this point! Lots of margins and padding by pixels! 😅
            </h4>
            <h5>
                Deliverables: A bio page in html, answering questions about myself and my likes. A CSS file to style my page.
            </h5>
        <div style={{
            borderTop: "1px dotted #d97271",
            marginBottom: "2vh"
        }}></div>

          <AboutMe />
        </div>
      </div>
    </>
  );
}
