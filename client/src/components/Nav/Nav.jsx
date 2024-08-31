import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div
      style={{ display: "inline-flex", flexDirection: "row", columnGap: "3px" }}
    >
      <Button
        style={{
          display: "flex",
          alignItems: "center",
          color: "#ffffff",
          backgroundColor: "#d97271",
          border: "solid white",
          borderRadius: "8px",
          height: "7vh"
        }}
        as={Link} to='/project1'
      >
        <p>PROJ 1 🧁</p>
      </Button>

      <Button
        style={{
          display: "flex",
          alignItems: "center",
          color: "#ffffff",
          backgroundColor: "#d97271",
          border: "solid white",
          borderRadius: "8px",
          height: "7vh"
        }}
        as={Link} to='/project2'
      >
        <p>PROJ 2 🌸</p>
      </Button>

      <Button
        style={{
          display: "flex",
          alignItems: "center",
          color: "#ffffff",
          backgroundColor: "#d97271",
          border: "solid white",
          borderRadius: "8px",
          height: "7vh"
        }}
        as={Link} to='/project3'
      >
        <p>PROJ 3 🍉</p>
      </Button>

      <Button
        style={{
          display: "flex",
          alignItems: "center",
          color: "#ffffff",
          backgroundColor: "#d97271",
          border: "solid white",
          borderRadius: "8px",
          height: "7vh"
        }}
        as={Link} to='/project4'
      >
        <p>PROJ 4 🎈</p>
      </Button>

      <Button
        style={{
          display: "flex",
          alignItems: "center",
          color: "#ffffff",
          backgroundColor: "#d97271",
          border: "solid white",
          borderRadius: "8px",
          height: "7vh"
        }}
        as={Link} to='/project5'
      >
        <p>PROJ 5 🎀</p>
      </Button>
    </div>
  );
}
