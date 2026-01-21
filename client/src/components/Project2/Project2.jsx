import ThemedHeader from "../Welcome/ThemedHeader";
import { Image } from "semantic-ui-react";

import kaLogoFull from "../../assets/graphicdesign/FullKAlogocirclewhite.png";
import kaLogoBasic from "../../assets/graphicdesign/BasicKAlogowhite.png";
import kaLogoBasicAqua from "../../assets/graphicdesign/BasicKAlogoaqua.png";
import kaLogoBasicPastel from "../../assets/graphicdesign/BasicKAlogoPASTELwhite.png";
import codebanditsGreen from "../../assets/graphicdesign/CodeBanditsgreen.png";
import codebanditsGrey from "../../assets/graphicdesign/CodeBanditsgrey.png";
import codebanditsOrange from "../../assets/graphicdesign/CodeBanditsorange.png";
import lowandslow from "../../assets/graphicdesign/LowandSlowlogo.png";
import circleknightcolor from "../../assets/graphicdesign/S611circlelogoknightcolorwhite";
import circleskycolor from "../../assets/graphicdesign/S611circlelogoskycolorwhite";
import circleknightwhite from "../../assets/graphicdesign/S611circlelogoknightwhitewhite";

export default function Project2 () {

    return (
        <>
        <ThemedHeader />
        <div style={{
        textAlign:"center",
        backgroundColor:"#ccf0f0"
      }}>
        <h1
          style={{
            color: "#d97271",
            fontSize: "3em",
            textShadow: "1px 1px 2px #ccf0f0",
            padding: "20px"
          }}>Graphic Design</h1>
          <div className="ui small circular images">
          <Image src={kaLogoFull} size="small" alt="Logo" wrapped/>
          <Image src={kaLogoBasic} size="small" alt="Logo" wrapped/>
          <Image src={kaLogoBasicAqua} size="small" alt="Logo" wrapped/>
          <Image src={kaLogoBasicPastel} size="small" alt="Logo" wrapped/>
          </div>
          <div className="ui small circular images">
          <Image src={codebanditsGreen} size="small" alt="Logo" wrapped/>
          <Image src={codebanditsGrey} size="small" alt="Logo" wrapped/>
          <Image src={codebanditsOrange} size="small" alt="Logo" wrapped/>
          </div>
          <div className="ui small circular images">
          <Image src={lowandslow} size="small" alt="Logo" wrapped/>
          </div>
          <div className="ui small circular images">
          <Image src={circleknightcolor} size="small" alt="Logo" wrapped/>
          <Image src={circleskycolor} size="small" alt="Logo" wrapped/>
          <Image src={circleknightwhite} size="small" alt="Logo" wrapped/>
          </div>
        </div>
        </>
    )
}