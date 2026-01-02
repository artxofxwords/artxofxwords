import "../Art/Art.css";

export default function Art() {
  return (
    <div>
      <div className="verse">
        &apos;&apos; Consider the lilies of the field, how they grow; they toil
        not, neither do they spin: And yet I say unto you, That even Solomon in
        all his glory was not arrayed like one of these. &apos;&apos;
      </div>

      <div style={{
                    marginTop: "-6vh",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "row",
                    columnGap: "52px",
                    position: "absolute",
                    zIndex: "2",
                    backgroundColor: "transparent"
                }}>
                    <a href='/rae'><button style={{
                        fontFamily: "KnightsQuest",
                        fontSize: "2.5em"
                    }}>
                        Home
                    </button></a>
                    <a href='/blog'><button style={{
                        fontFamily: "KnightsQuest",
                        fontSize: "2.5em"
                    }}>
                        Blog
                    </button></a>
                    <a href='/contact'><button style={{
                        fontFamily: "KnightsQuest",
                        fontSize: "2.5em"
                    }}>
                        Contact
                    </button></a>

                </div>

    <div style={{
        position: "static",
        zIndex: "2",
        width: "90vw",
        justifySelf: "center"
    }}>
      <iframe
      src='/curatorio.html'
      title="Instagram Feed"
      width="100%"
      height="1500px"
    />
    </div>

    <p className="lily">Lily</p>

      </div>
  );
}
