import { DesktopNavbar } from "./DesktopNavbar"
import { MobileNavbar } from "./MobileNavbar"

export const Navbar = () => {
    return (
        <>
            <div className="inset-x-0 top-0 z-40 md:hidden">
                <MobileNavbar />
            </div>
            <div className="inset-x-0 top-0 z-40 md:block hidden">
                <DesktopNavbar />
            </div>
        </>
    )
}

