import FamPic from "../../assets/fampic.jpg";
import "../Project1/AboutMe.css";

export default function AboutMe() {
  return (
    <>
      <div className="classname">
        <div className="header">
          <b>About Me...</b>
        </div>
      </div>
      <div id="idname">&hearts;</div>
      <div className="div">
        <div className="body">
          <p className="p">
            Hi, my name is Amanda and I&apos;m 36 years old. I have homes in two
            time zones: E.S.T.-5 (Georgia) and E.A.T.+3 (Tanzania).
          </p>
          <p className="p">This is me with my boys in Tanzania last month:</p>
          <p className="p">
            <img
            className="img"
              src={FamPic}
              width="350px"
              height="550px"
              style={{ fit: "cover", position: "top center" }}
            />
          </p>
          <p className="p">Here are some websites I visit regularly:</p>
          <p className="p">
            <a className="a" target="_blank" href="https://www.babycenter.com/">BabyCenter</a> - This is where
            I go with all my baby-related questions
          </p>
          <p className="p">
            <a className="a" target="_blank" href="https://www.paramountplus.com/shows/amazing_race/">
              The Amazing Race on Paramount Plus
            </a>{" "}
            - This show is exciting and has 36 seasons
          </p>
          <p className="p">
            <a className="a" target="_blank" href="https://www.kilwaadventures.com/">
              Kilwa Adventures & Watersports
            </a>{" "}
            - I designed the logo and help with the website for this awesome
            company
          </p>
          <p className="p">
            <a className="a" target="_blank" href="https://www.dpbolvw.net/click-100993059-14488293">
              ImPRESS Press-On Nails
            </a>{" "}
            - I use these often and they&apos;re really affordable
          </p>
          <p className="p">
            Several hobbies that I enjoy are gardening, going for walks, art,
            beach days with my fam, and playing volleyball.
          </p>
          <p className="p">
            What I hope to gain with Upright is useful tech skills that help me
            get a stable job that I can do from anywhere in the world.
          </p>
        </div>
      </div><br/>
      <div className="footerblock">
      <div className="footer">...nice to meet you!</div>
      </div>
    </>
  );
}
