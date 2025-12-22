import "./SecretSanta.css";
import ChristmasBackground from "../../assets/david-trinks-christmas-unsplash.jpg";

export default function Project1() {

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "screen",
          height: "auto",
          marginTop: "none",
          //overflow:"hidden",
          backgroundImage: `url(${ChristmasBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div
          style={{
            width: "75vw",
            height: "auto",
            marginTop: "3vh",
            marginBottom: "3vh",
            padding: "20px 20px 90px 20px",
            overflow:"scroll"
          }}
        >
            <h1 className="christmasFont">
                Hi Santa! Who will you be giving the gift of gifts to this 2025 Christmas season??  
            </h1>
            <h4 style={{
              fontSize: "3rem",
              color: "white",
              textAlign: "center"
            }}>
                Let&#39;s find out!
            </h4>
            <h5>
                <span style={{
              fontSize: "3rem",
              textAlign: "center",
              textEmphasis: "ButtonText",
              color: "#d97271"}}>
                Select a box below</span>
            </h5>
        <div style={{
            borderTop: "1px dotted #d97271",
            marginBottom: "2vh"
        }}></div>
        <div style={{

        }}>

        </div>
        </div>
      </div>
    </>
  );
}
