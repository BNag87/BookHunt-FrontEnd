var topNavBarStyle = {
    div:{
        background: "green",
        color: "white",
        width: "100vh%",
        height: "10%",
        padding: "10px",
        
    }
    ,
    h1:{
        color: "grey"
    }
}

const TopNavbar  = () => {

    return(
        <div style={topNavBarStyle.div}>
            <h1>I am a H1!</h1>
            <p>I live in the topbar</p>
        </div>

    )

}

export default TopNavbar;