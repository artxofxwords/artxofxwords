import headerBackground from "../../assets/sunriseSkyHeader.png";
import SunrisePalette from "../../assets/SunriseSkyScheme.png";
import ThemeRound from "../../../favicon.ico";
import editIcon from "../../assets/editIcon.png";
import Nav from "../Nav/Nav";
import { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

export default function ThemedHeader() {
  const navigate = useNavigate();

  const [guestName, setGuestName] = useState();
  const [nameForm, setNameForm] = useState(false);
  const [editButton, setEditButton] = useState(true);

  useEffect(() => {
    if (nameForm === false) {
      setEditButton(true);
    } else {
      setEditButton(false);
      setTimeout(() => setNameForm(false), 5000);
    }
  }, [nameForm]);

  return (
    <div style={{ display: "inline-flex", flexDirection: "column" }}>
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
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#ccf0f0",
          padding: "15px",
        }}
      >
        <h1
          style={{
            display: "flex",
            width: "85vw",
            color: "white",
            fontSize: "2.3em",
            textShadow: "1px 1px 2px #f4d2c8"
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
                  marginLeft: "10px"
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
        <img src={ThemeRound} style={{ width: "100px", height: "100px" }} onClick={() => {navigate("/")}}></img>
      </div>
    </div>
  );
}
