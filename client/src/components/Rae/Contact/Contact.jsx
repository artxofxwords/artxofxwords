import "../Contact/Contact.css";

export default function Contact() {
  return (
    <div>
        <div>

                    <div style={{
                    marginTop: "18vh",
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
                    <a href='/art'><button style={{
                        fontFamily: "KnightsQuest",
                        fontSize: "2.5em"
                    }}>
                        Art
                    </button></a>
                    <a href='/blog'><button style={{
                        fontFamily: "KnightsQuest",
                        fontSize: "2.5em"
                    }}>
                        Blog
                    </button></a>

                </div>
</div>

    </div>
  )
}