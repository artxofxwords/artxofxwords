import ThemedHeader from "../Welcome/ThemedHeader";

export default function Project1() {
  return (
    <>
      <ThemedHeader />
      <div>
        <h1>Photography</h1>
        <div className="ui large images">
          <img className="ui image" src="client/src/assets/photography/CatStudio.jpg" />
          <img className="ui image" src="client/src/assets/photography/CattyRiver.jpg" />
          <img className="ui image" src="client/src/assets/photography/CoconutTrees.jpg" />
          <img className="ui image" src="client/src/assets/photography/CrepeMyrtle.jpg" />
          <img className="ui image" src="client/src/assets/photography/Fern.jpg" />
          <img className="ui image" src="client/src/assets/photography/ForRoof.jpg" />
          <img className="ui image" src="client/src/assets/photography/FogTrees.jpg" />
          <img className="ui image" src="client/src/assets/photography/GerberaDaisies.jpg" />
        </div>
      </div>
    </>
  );
}
