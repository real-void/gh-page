import NavbarItem from "./NavbarItem";

const NavbarItems = (props: any) => {
    let i = 0;
    return (
        <div className="flex navbar-items" style={props.style}>
            {
                props.items.map((each: string) => {
                        return (
                            <NavbarItem key={each} _ref={(props.refs === undefined)? undefined : props.refs[i++]}>
                                {each}
                            </NavbarItem>
                        )
                    }
                )
            }
        </div>
    )
}
export default NavbarItems