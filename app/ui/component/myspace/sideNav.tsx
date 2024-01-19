import NavLinks from "./navLink";


const SideNav = () => {
    return (
        <div className="justify-between min-h-screen">
            <div>
                <p className="text-lg font-semibold p-5 ">menu</p>
                <NavLinks />
            </div>
            
        </div>
    )
}

export default SideNav;