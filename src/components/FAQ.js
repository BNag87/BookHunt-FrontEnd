//import an image to display
import faqImage from "../images/faqImg.png";
import { Style, textBoxStyle }  from "../Style"

//css style for a container div that contains text
// var faqStyle = {
//     div:{
//         display: "flex",
//         gap: "10px",
//         flexDirection: "column",
//         justifyContent: "space-evenly",
//         border: "solid black 2px",
//         background: "rgba(90,90,90,0.5)",
//         margin: "5px",
//         padding: "10px 10px"
//      },
//   }
 
//css style for a text box containing about us text
//  var textBoxStyle = {
//     div:{
//         border: "outset black 1.5px",
//         borderRadius: "8px",
//         background: "rgba(150,150,150,1)",
//         margin: "8px",
//         padding: "2px",
//         color: "white",
//         textAlign: "center",
//         fontSize: "medium",
//         fontFamily: "sans-serif",
//         boxShadow: "3px 3px 5px rgb(100,100,100)"
//     },
//     h3:{
//         color: "khaki",
//     },

//  }

//css style to use an image in a div
 var faqImageStyle = {
    div:{
        backgroundImage: `url(${faqImage})`,
        backgroundPosition: "center top",
        alignSelf: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        textAlign: "center",
        margin: "5px",
        padding: "5px",
        // width: "10%",
        height: "150px"
    },
    
 }

 const Faq  = () => {
 
     return(
    <div className = "wrapper">
        <div style = {faqImageStyle.div}></div>
        
        <div style={Style.div}>
            <div style = {textBoxStyle.div}>
            <h3 style = {textBoxStyle.h3}>What is a book?</h3>
            <p>Seriously? You've made it this far through life without knowing what a book is? Would you like some more glue to sniff?</p>
            </div>

            <div style = {textBoxStyle.div}>
            <h3 style = {textBoxStyle.h3}>What was the first book ever made?</h3>
            <p>The Diamond Sutra. A Buddhist book from China, first printed around 868 A.D. with the block-print method.</p>
            </div>

            <div style = {textBoxStyle.div}>
            <h3 style = {textBoxStyle.h3}>How do I read?</h3>
            <p>Study the alphabet, learn to form words from it and then learn to write the words. Once you can write them, you can read them.</p>
            </div>

            <div style = {textBoxStyle.div}>
            <h3 style = {textBoxStyle.h3}>I have a shelf that is sagging. How to I fix it?</h3>
            <p>Remove any screws and wall plugs. Fill the old holes with polyfila. Drill new holes, angled down slightly. Tap in new wall plugs with a hammer. Screw the shelf in firmly.</p>
            </div>

            <div style = {textBoxStyle.div}>
            <h3 style = {textBoxStyle.h3}>When I buy a bag of coffee, how will I know if I will like it?</h3>
            <p>On most bags of coffee beans, there's a plastic tab on the front that's near the top. Pull that back a little, then sniff it. You'll be able to smell the coffee and that is exactly how it will taste.</p>
            </div>
        </div>

    </div>
    )
 
 }
 
 export default Faq;