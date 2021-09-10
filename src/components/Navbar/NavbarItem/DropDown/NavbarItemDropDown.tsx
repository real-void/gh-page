import "../navbar_item.css"
import "./navbar_item_drop_down.css"
import NavbarItem from "../NavbarItem";
import NavbarItems from "../NavbarItems";

const NavbarItemDropDown = (props: any) => {
    return (
        <div className="navbar-item-dropdown">
            <NavbarItem>
                ...
            </NavbarItem>
            <NavbarItems items={["About", "Quotes", "Projects", "ConnectBox"]}
                         style={{position: "absolute", flexDirection: "column", marginTop: "2px"}}
                         refs={props.refs}
            />
        </div>
    )
}
export default NavbarItemDropDown