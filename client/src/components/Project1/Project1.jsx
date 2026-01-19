import ThemedHeader from "../Welcome/ThemedHeader";
import { Image } from "semantic-ui-react";

import catStudio from "../../assets/photography/CatStudio.jpg";
import cattyRiver from "../../assets/photography/CattyRiver.jpg";
import coconutTrees from "../../assets/photography/CoconutTrees.jpg";
import cowPark from "../../assets/photography/CowPark.png";
import crepeMyrtle from "../../assets/photography/CrepeMyrtle.jpg";
import fern from "../../assets/photography/Fern.jpg";
import fogRoof from "../../assets/photography/FogRoof.jpg";
import fogTrees from "../../assets/photography/FogTrees.jpg";
import gerberaDaisies from "../../assets/photography/GerberaDaisies.jpg";
import mrBagheera from "../../assets/photography/MrBagheera.jpg";
import peaceLilies from "../../assets/photography/PeaceLilies.jpg";
import pinkSky from "../../assets/photography/PinkSky.jpg";
import pnwMountain from "../../assets/photography/PNWMountain.png";
import pnwTrees from "../../assets/photography/PNWTrees.png";
import stairsStudio from "../../assets/photography/StairsStudio.jpg";
import texasLake from "../../assets/photography/TexasLake.png";
import texasSky from "../../assets/photography/TexasSky.png";
import thailand from "../../assets/photography/Thailand.png";
import windowStudio from "../../assets/photography/WindowStudio.jpg";
import yellowField from "../../assets/photography/YellowField.jpg";

export default function Project1() {

  return (
    <>
      <ThemedHeader />
      <div style={{
        textAlign:"center",
        backgroundColor:"#000000"
      }}>
        <h1
          style={{
            color: "#d97271",
            fontSize: "3em",
            textShadow: "1px 1px 2px #ccf0f0",
            padding: "20px"
          }}>Photography</h1>
        <div className="ui medium images">
          <Image src={catStudio} size="medium" alt="Cat Studio" wrapped/>
          <Image src={crepeMyrtle} size="medium" alt="Crepe Myrtle" wrapped/>
          <Image src={fogRoof} size="medium" alt="Fog Roof" wrapped/>
          <Image src={fogTrees} size="medium" alt="Fog Trees" wrapped/>
          <Image src={gerberaDaisies} size="medium" alt="Gerbera Daisies" wrapped/>
          <Image src={mrBagheera} size="medium" alt="Bagheera the cat" wrapped/>
          <Image src={peaceLilies} size="medium" alt="Peace Lilies" wrapped/>
          <Image src={pinkSky} size="medium" alt="Pink Sky" wrapped/>
          <Image src={stairsStudio} size="medium" alt="Stairs Studio" wrapped/>
          <Image src={windowStudio} size="medium" alt="Window Studio" wrapped/>
          <Image src={yellowField} size="medium" alt="Yellow Field" wrapped/>
          <Image src={cattyRiver} size="medium" alt="Catasauqua River" wrapped/>
          <Image src={coconutTrees} size="medium" alt="Coconut Trees" wrapped/>
          <Image src={pnwMountain} size="medium" alt="PNW Mountain" wrapped/>
          <Image src={cowPark} size="medium" alt="Cow Park" wrapped/>
          <Image src={pnwTrees} size="medium" alt="PNW Trees" wrapped/>
          <Image src={texasLake} size="medium" alt="Texas Lake" wrapped/>
          <Image src={texasSky} size="medium" alt="Texas Sky" wrapped/>
          <Image src={fern} size="medium" alt="Fern" wrapped/>
          <Image src={thailand} size="medium" alt="Thailand" wrapped/>
        </div>
      </div>
    </>
  );
}
