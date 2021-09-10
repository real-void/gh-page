import "./navbar_item.css"

const NavbarItem = (props: any) => {
    return (
        <div className="c-font-default buttons-text-size cursor-p navbar-item"
             onClick={
                 () => {
                     if(props._ref !== undefined)
                         props._ref.current.scrollIntoView({behavior: 'smooth'})
                 }
             }
        >
            {props.children}
        </div>
    )
}
export default NavbarItem