import ThemedHeader from "../Welcome/ThemedHeader";

export default function Project3 () {

    return (
        <>
        <ThemedHeader />
        <div style={{
        backgroundColor:"#f4d2c8",
        paddingBottom: "20vh"
      }}>
        <h1
          style={{
            color: "#d97271",
            fontSize: "3em",
            textAlign:"center",
            textShadow: "1px 1px 2px #ccf0f0",
            padding: "20px"
          }}>Web Development</h1>
          <div style={{
            marginLeft: "20vw"
          }}>
          <h2>Client #1 - Private Counseling Practice</h2>
          <p>Need: Website to promote & eventually book counseling sessions.</p>
          <p>Deliverables: 
            <ul>
                <li>Single Page Application</li>
                <li>Landing page</li>
                <li>Instagram feed page</li>
                <li>Blog page</li>
                <li>Contact page</li>
                <li>Responsive design</li>
                <li><i>Additional packages: </i>Domain registration; Logo design</li>
            </ul>
          </p>
          <p>Product: <a href="selah611.com">Selah 611</a></p>
          <p>Stack: HTML/CSS, JavaScript, Node, React Vite, Netlify, Contentful, Curator IO</p>

          <h2>Client #2 - Vocational Educator</h2>
          <p>Need: Website to promote & host capstone project submissions by local businesses.</p>
          <p>Deliverables: 
            <ul>
                <li>Single Page Application</li>
                <li>Landing page</li>
                <li>Role-based access</li>
                <li>Admin dashboard with CRUD functionality (users, submissions)</li>
                <li>User dashboard</li>
                <li>Submission form with email campaign & database</li>
            </ul>
          </p>
          <p>Product: <a href="https://cosmic-choux-faf80b.netlify.app/">Upright Capstone</a></p>
          <p>Stack: HTML/CSS, JavaScript, Node, MongoDB, Express, React Vite, NodeMailer, Tailwind, Netlify, Render</p>
          </div>
        </div>
        </>
    )
}