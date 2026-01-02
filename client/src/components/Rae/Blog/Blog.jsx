import "../Blog/Blog.css";

export default function Blog() {
  return (
    <div>

                    <div style={{
                    marginTop: "5vh",
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
                    <a href='/contact'><button style={{
                        fontFamily: "KnightsQuest",
                        fontSize: "2.5em"
                    }}>
                        Contact
                    </button></a>

                </div>

                <div className='solid' 
                style={{
                    width: "100vw",
                    height: "100vh"
                    }}>
                    <p>
                    BLOG    
                    </p>

                </div>

    </div>
  )
}