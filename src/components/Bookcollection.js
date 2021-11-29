import background from "../images/pageBG2.png"; //import an image for bg use


var collectionWindowStyle = {
    div:{
        
        
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        
        backgroundColor: 'rgba(0,0,0,0.8)',

        color: "white",
        margin: "5px",
        padding: "5px",
    }
    ,
    h1:{
        color: "grey"
    },

}

const Bookcollection  = () => {

    return(
        <div style={collectionWindowStyle.div}>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>

    )

}

export default Bookcollection;