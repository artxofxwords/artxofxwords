import ThemedHeader from "../Welcome/ThemedHeader";

export default function Project4 () {

    return (
        <>
        <ThemedHeader />
        <div style={{
        backgroundColor:"#d97271",
        paddingBottom: "20vh"
      }}>
        <h1
          style={{
            color: "#5a555e",
            fontSize: "3em",
            textAlign:"center",
            textShadow: "1px 1px 2px #f4d2c8",
            padding: "20px"
          }}>Digital Products</h1>
          <div style={{
            marginLeft: "20vw"
          }}>
          <h2>Low & Slow Health Plan</h2>
          <p>42-page digital PDF download</p>
          <p>Includes:
            <ul>
                <li>Instructions & Insights</li>
                <li>Monthly Goal Sheets</li>
                <li>Monthly Weight Logs</li>
                <li>Monthly Walking Trackers</li>
                <li>Replacement Plans for Recipes, Snacks, Travel Go-To&apos;s</li>
            </ul>
            <p>Product Listing: <a href="https://www.etsy.com/listing/4435134405/low-slow-health-plan-for-overwhelmed">Low & Slow</a></p>
          </p>
          </div>
        </div>
        </>
    )
}