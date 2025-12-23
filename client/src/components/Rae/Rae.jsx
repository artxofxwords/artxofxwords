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
                    color: "#5e855f",
                    textAlign: "right",
                    marginRight: "20px",
                    marginTop: "15px",
                    textDecoration: "bold"
                }}>
                    Ephesians 6
                </p>
                </div>
                <div style={{
                    marginTop: "25vh",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "row",
                    columnGap: "20px",
                    position: "absolute",
                    zIndex: "2"
                }}>
                    <button style={{
                        fontFamily: "KnightsQuest",
                        fontSize: "2.5em"
                    }}>
                        Art
                    </button>
                    <button style={{
                        fontFamily: "KnightsQuest",
                        fontSize: "2.5em"
                    }}>
                        Blog
                    </button>
                    <button style={{
                        fontFamily: "KnightsQuest",
                        fontSize: "2.5em"
                    }}>
                        Contact
                    </button>

                </div>
                
                <p className='knight'>
                </p>

                <div className='solid' 
                style={{
                    width: "100vw",
                    height: "30vh"
                    }}>
                    <p>
                        
                    </p>

                </div>

                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "90vh"
                }}>
                    <image>
                    Knight
                    </image>

                        <div className='palette'>
                            Palette
                        </div>

                </div>
                <div className='verse'>
                    &apos;&apos; Consider the lilies of the field, how they grow; 
                    they toil not, neither do they spin: And yet I say unto you, 
                    That even Solomon in all his glory was not arrayed like one of these. &apos;&apos;
                    <p className='lily'>
                        Lily
                    </p>
                </div>

                
            </header>
        </div>
    );

}