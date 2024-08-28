import { DesktopNavbar } from "./DesktopNavbar"
import { MobileNavbar } from "./MobileNavbar"

export const Navbar = () => {
    return (
        <>
            <div className="inset-x-0 top-0  md:hidden" data-testid='mobile-navbar'>
                <MobileNavbar />
            </div>
            <div className="inset-x-0 top-0  md:block hidden" data-testid='desktop-navbar'>
                <DesktopNavbar />
            </div>
        </>
    )
}

