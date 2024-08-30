import { Button } from "semantic-ui-react";

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
          height: "7vh",
          cursor: "pointer"
        }}
      >
        <p style={{ fontFamily: "cursive" }}>PROJECT 1 🧁</p>
      </Button>

      <Button
        style={{
          display: "flex",
          alignItems: "center",
          color: "#ffffff",
          backgroundColor: "#d97271",
          border: "solid white",
          borderRadius: "8px",
          height: "7vh",
          cursor: "pointer"
        }}
      >
        <p style={{ fontFamily: "cursive" }}>PROJECT 2 🌸</p>
      </Button>

      <Button
        style={{
          display: "flex",
          alignItems: "center",
          color: "#ffffff",
          backgroundColor: "#d97271",
          border: "solid white",
          borderRadius: "8px",
          height: "7vh",
          cursor: "pointer"
        }}
      >
        <p style={{ fontFamily: "cursive" }}>PROJECT 3 🍉</p>
      </Button>

      <Button
        style={{
          display: "flex",
          alignItems: "center",
          color: "#ffffff",
          backgroundColor: "#d97271",
          border: "solid white",
          borderRadius: "8px",
          height: "7vh",
          cursor: "pointer"
        }}
      >
        <p style={{ fontFamily: "cursive" }}>PROJECT 4 🎈</p>
      </Button>
    </div>
  );
}
