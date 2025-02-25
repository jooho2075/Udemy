import logo from "../assets/logo.png";
import classes from'./Header.module.css';

function Header() {
    return (
        <header>
            <img src={logo} alt="A canvas" />
            <h1>React Art</h1>
            <p className={classes.paragraph}>A community of artists and art-lovers</p>
        </header>
    );
}

export default Header;