import ThemedHeader from "./Welcome/ThemedHeader";
import Intro from "./Welcome/Intro";
import Footer from "./Footer/Footer";

export default function Welcome() {
  return (
    <div>
      <div style={{
        display: "inline-flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "screen"
      }}>
        <div style={{display: "flex"}}>
        <ThemedHeader />
        </div>

        <div style={{display: "flex"}}>
        <Intro />
        </div>

        <div style={{display: "flex"}}>
          <Footer />
        </div>
        </div>
    </div>
  );
}
