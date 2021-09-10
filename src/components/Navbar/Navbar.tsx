import "./navbar.css"
import "../galaxy_background.css"
import Logo from "../Logo/Logo";
import NavbarItemDropDown from "./NavbarItem/DropDown/NavbarItemDropDown";
import NavbarItems from "./NavbarItem/NavbarItems";

const Navbar = (props: any) => {
    return (
        <div className="navbar">
            <div className="flex space-b full-height" id="navbar_internal_container">
                <div className="flex space-e">
                    <NavbarItemDropDown refs={props.refs}/>
                    <NavbarItems items={["About", "Quotes", "Projects", "Connect"]} proj={props.proj} refs={props.refs}/>
                </div>
                <div className="flex" id="logo_container" style={{justifyContent: "flex-end"}}>
                    <Logo/>
                </div>

            </div>
        </div>
    )
}
export default Navbar