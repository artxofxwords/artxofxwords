import BadgeFullStack from "../../assets/badgefullstack.png";
import BadgeBackend from "../../assets/badgebackend.png";
import BadgeFrontend from "../../assets/badgefrontend.png";
import BadgeJavaScript from "../../assets/badgejavascript.png";

export default function Badges () {


    return (
        <>
        <div style={{
            display:"inline-flex",
            flexDirection:"row",
            justifyContent: "center",
            alignContent: "center"
        }}>
        <a target="_blank" href="https://www.credly.com/badges/7c363d0a-a77d-4346-9b0c-4325bc720a03/public_url"><img src={BadgeFullStack} width="80px" height="80px" style={{cursor:"pointer"}} /></a>
        <a target="_blank" href="https://www.credly.com/badges/6ae5b90c-c36b-41e2-93c9-d4841de3ffdb/public_url"><img src={BadgeBackend} width="80px" height="80px" /></a>
        <a target="_blank" href="https://www.credly.com/badges/1cb849b5-727c-4269-81f8-5f97623ff280/public_url"><img src={BadgeFrontend} width="80px" height="80px" /></a>
        <a target="_blank" href="https://www.credly.com/badges/ca5a4a30-c4e6-4e76-83fb-e7594229c0ef/public_url"><img src={BadgeJavaScript} width="80px" height="80px" /></a>
        
        </div>
        </>

    )
}