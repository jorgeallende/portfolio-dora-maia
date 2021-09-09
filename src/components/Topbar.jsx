import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Topbar( {setMenuOpen, menuOpen} ) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Dora Maia</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>84 98819-5956</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>doramaiaa@hotmail.com</span>
                    </div>
                    <div className="itemContainer">
                        <InstagramIcon className="icon"/>
                        <span>doramaiaa</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
