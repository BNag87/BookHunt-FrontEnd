import {Link} from 'react-router-dom';


var navBarStyle = {
    div:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        background: "rgba(0,100,0,0.5)",
        color: "white",
        width: "15%",
        height: "100vh",
        padding: "1px",
        
        borderStyle: "none double none none",
    }
    ,
    h1:{
        color: "grey",
        width: "90%",
    }
}

var customButtonStyle = {
    div:{
        background: "#dedede",
        borderRadius: "10px",
        border: "outset black 2px",
        width: "90%",
        margin: "10px",
        '&::hover': {
            background: "#ffffff",

        },
    },

    

    h3:{
        color: "rgba(10,10,10,0.75)",
        textShadow: "1px 2px 1px #ffffff",
        margin: "2px",
        fontVariant: "small-caps",
        
    },
}

const Navbar  = () => {

    return(
        <div style={navBarStyle.div}>
            <h1>Links</h1>
        
        <Link to="/components/Homepage">
            <div className = "customButton" style = {customButtonStyle.div}><h3 style = {customButtonStyle.h3}>Home</h3></div> 
        </Link>

        
        <div className = "customButton" style = {customButtonStyle.div}><h3 style = {customButtonStyle.h3}>Collection</h3></div> 
        
        <Link to="/components/FAQ">
            <div className = "customButton" style = {customButtonStyle.div}><h3 style = {customButtonStyle.h3}>FAQ</h3></div> 
        </Link>

        <Link to="/components/About">
            <div className = "customButton" style = {customButtonStyle.div}><h3 style = {customButtonStyle.h3}>About Us</h3></div> 
        </Link>

        </div>

    )

}

export default Navbar;