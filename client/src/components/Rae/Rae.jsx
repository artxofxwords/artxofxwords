import '../Rae/Rae.css';


export default function Rae () {


    return (
        <div>
            <header>
                <div className='knight'>
                    Put on the armor of God & Enter His rest
                
                <p style={{
                    fontFamily: "OldeEnglish",
                    fontSize: "2rem",
                    color: "#b98389",
                    textAlign: "right",
                    marginRight: "20px",
                    marginTop: "15px",
                    textDecoration: "bold"
                }}>
                    Ephesians 6
                </p>
                </div>
                <div style={{
                    marginTop: "22vh",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "row",
                    columnGap: "52px",
                    position: "absolute",
                    zIndex: "2",
                    backgroundColor: "transparent"
                }}>
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
                    <a href='/contact'><button style={{
                        fontFamily: "KnightsQuest",
                        fontSize: "2.5em"
                    }}>
                        Contact
                    </button></a>

                </div>
                
                <p className='knight'>
                </p>

                <div className='solo' 
                style={{
                    width: "100vw",
                    height: "30vh"
                    }}>
                    <p>
                        
                    </p>

                </div>

                <div style={{
                    height: "90vh"
                }}>
                    <image>
                    Knight
                    </image>
                </div>

                

                
            </header>
        </div>
    );

}