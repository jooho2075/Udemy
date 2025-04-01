import logo from '../assets/new_logo.png';

function Footer() {
    return(
        <>
            <footer style={{
                backgroundColor: "#000000", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center",
                width: "100%",
                height: 150
            }}>
                <div style={{display: "flex", alignItems: "center"}}>
                    <img src={logo} style={{marginRight: "10px"}}/>
                    <div>
                        <h1 style={{color: "#ffffff", fontSize: "36px", fontWeight: "bold"}}>스마트정보통신공학과</h1>
                        <p style={{color: "#ffffff", fontSize: "20px"}}>박민기 / 박세명 / 박주호 / 장형준</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;