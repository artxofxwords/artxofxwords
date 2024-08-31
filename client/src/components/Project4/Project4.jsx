import ThemedHeader from "../Welcome/ThemedHeader";

export default function Project4 () {

    return (
        <>
        <ThemedHeader />
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "screen",
            height: "auto",
            marginTop: "3vh"
        }}>
            <div style={{
                width: "75vw",
                height: "75vh",
                border: "1px dotted #d97271",
                padding: "20px"
            }}>
            <h1>
                This will host project 4
            </h1>
            </div>
        </div>
        </>
    )
}