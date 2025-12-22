import '../Rae/Rae.css';

export default function Rae () {


    return (
        <div>
            <header>
                <div className='knight'>
                    Put on the armor of God
                <br />
                    &
                <br />
                    Enter His rest
                </div>
                
                <p className='knight'>
                </p>

                <div className='lilies' 
                style={{
                    width: "100vw",
                    height: "30vh"
                    }}>
                    <p>
                        Lilies
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
                            <p className='lily'>
                                Lily
                            </p>
                        </div>

                </div>
                <div className='verse'>
                    &apos;&apos; Consider the lilies of the field, how they grow; 
                    they toil not, neither do they spin: And yet I say unto you, 
                    That even Solomon in all his glory was not arrayed like one of these. &apos;&apos;
                </div>
                
            </header>
        </div>
    );

}