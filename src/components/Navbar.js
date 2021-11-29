var navBarStyle = {
    div:{
        background: "red",
        color: "white",
        width: "15%",
        height: "100vh",
        padding: "1px",
        
    }
    ,
    h1:{
        color: "grey"
    }
}

const Navbar  = () => {

    return(
        <div style={navBarStyle.div}>
            <h1>I am a H1!</h1>
            <p>I live in the sidebar</p>
        </div>

    )

}

export default Navbar;