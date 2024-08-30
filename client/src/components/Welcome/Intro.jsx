import themeIcon from "../../assets/bulletIcon.png";
import ModalExampleDimmer from "./NameModal";
import { Button } from "semantic-ui-react";

export default function Intro () {

    return (
        <div style={{display: "inline-flex", flexDirection: "column", width: "98vw", alignItems: "center"}}>
        <div style={{display: "flex-block", width: "70vw"}}>
            <p style={{fontSize: "1.2em"}}><img src={themeIcon} width="25px" height="25px" />I am <span style={{color: "#d97271"}}>artxofxwords</span></p>
            <p style={{fontSize: "1.2em"}}><img src={themeIcon} width="15px" height="15px" />You have landed on my work-in-progress portfolio!</p>
            <Button icon="like pink" />

            <ModalExampleDimmer />
        </div>
        </div>
    )
}