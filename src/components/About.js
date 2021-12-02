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
        padding: "10px 10px",
        display: "flex",
        flexDirection: "column",
        gap: "10px"
     },
  }
 
//css style for a text box containing faq text
 var textBoxStyle = {
    div:{
        border: "outset black 1.5px",
        borderRadius: "8px",
        background: "rgba(150,150,150,1)",
        boxShadow: "3px 3px 5px rgb(100,100,100)",
        margin: "8px",
        padding: "2px",
        color: "white",
        textAlign: "center",
        fontSize: "medium",
        fontFamily: "sans-serif",
    },
    h3:{
        color: "khaki",
    },

 }

//css style to use an image in a div
 var CompanyImage = {
    div:{
        backgroundImage: `url(${companyImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        textAlign: "center",
        margin: "5px",
        padding: "5px",
        // width: "50%",
        height: "200px"
    },
    
    h1:{}
 }

 const AboutUs  = () => {
 
     return(
    <div className = "wrapper">
    {/* <div style={aboutUsStyle.div}> */}
        <div style = {CompanyImage.div}>
        </div>
    {/* </div> */}

        <div style={aboutUsStyle.div}>
            <div style = {textBoxStyle.div}>
                <h3 style = {textBoxStyle.h3}>Want something to stimulate the brain? So do we!</h3>
                <p>Here at Book Hunt, we want to help you shrug off any boredom and dive in to a new story that will ignite your imagination.</p>
                <p>We are constantly looking for new books and have made a collection you can browse.</p>
                <p>You can search by genres, review scores or even the year of a books release to help narrow your search!</p>
                <p>We have been based remotely around Manchester for six thousand years. We also have a major influence in Parliament.</p>
            </div>
            
            <div style = {textBoxStyle.div}>
            <h3 style = {textBoxStyle.h3}>Book Hunts History</h3>
                <p>At the dawn of time, we fabricated Excalibur from toothpicks.</p>
                <p>During the Crimean war, we invented the internet.</p>
                <p>Our team met Napoleon Bonaparte and played hopscotch with him!</p>
                <p>Her Majesty, the Queen, once gave us a like on a Facebook post we made</p>
            </div>

            <div style = {textBoxStyle.div}>
            <h3 style = {textBoxStyle.h3}>The future of Book Hunt</h3>
                <p>We aim to colonise the sun with a few months.</p>
                <p>After we have achieved this, we will be constructing a paper mache Eifel Tower, then we will burn it.</p>
                <p>Once the magnetic poles have reversed, we will go sunbathing.</p>
                <p>Finally, once we have a nice tan, we will roast parsnips underwater.</p>
            </div>
        </div>
    </div>
    )
 
 }
 
 export default AboutUs;