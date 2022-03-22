import Nav from "./Nav";
import Search from "./Search";


function Header(props){
    return (
        <div className="header">
        <img src={props.icon} className="logo"/>
        <Nav/>
        <Search/>
    </div>
    )
}

export default Header;