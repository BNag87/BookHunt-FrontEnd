 //import an image for bg use
import background from "../images/pageBG2.png";



var homepageWindowStyle = {
    div:{
        // set a background image for the div that contains the page content
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        color: "black",
        margin: "5px",
        padding: "5px",
    
    },

    //style all h1 elements **in this component**
      h1:{
        color: "grey"
    },

}

const Homepage  = () => {

    return(
        <div style={homepageWindowStyle.div}>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>

    )

}

export default Homepage;