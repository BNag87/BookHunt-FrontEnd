//This is the "About is" section of the app
//its accessed with router/ switch

//import an image to display
import companyImg from "../images/CompanyLogo.png";

//css style for a container div that contains text
var aboutUsStyle = {
    div:{
        border: "solid black 2px",
        background: "rgba(90,90,90,0.5)",
        margin: "5px",
        padding: "5px",
     },
  }
 
//css style for a text box containing about us text
 var textBoxStyle = {
    div:{
        border: "solid black 1px",
        background: "rgba(250,250,250,0.5)",
        margin: "5px",
        padding: "5px",
    }
    
 }

//css style to use an image in a div
 var CompanyImage = {
    div:{
        border: "solid black 1px",
        background: "rgba(60,60,60,0.5)",
        margin: "5px",
        padding: "5px",
    }
    
 }

 const AboutUs  = () => {
 
     return(
    <>
        <div style = "">

        </div>
        <div style={aboutUsStyle.div}>
            <div style = {textBoxStyle.div}>
                <h3>Want something to stimulate the brain? So do we!</h3>
                <p>Here at Book Hunt, we want to help you shrug off any boredom and dive in to a new story that will ignite your imagination.</p>
                <p>We are constanlty looking for new books and have made a collection you can browse.</p>
                <p>You can search by genres, review scores or even the year of a books release to help narrow your search!</p>
                <p>We have been based remotely around Manchester for six thousand years. We also have a major influence in Parliament</p>
            </div>
        </div>
    </>
     )
 
 }
 
 export default AboutUs;