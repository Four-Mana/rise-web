'use client'
import { useHasPastHeight } from "@/hooks";
import Link from "next/link"
import { FaFacebookF, FaYoutube, FaInstagram, FaBandcamp} from "react-icons/fa6";
import { SiYoutubemusic } from "react-icons/si";
export const DesktopNavbar = () => {
    const isPastNavbar = useHasPastHeight(80);

    return (
        <nav className={`w-full px-6 py-2 z-40 fixed top-0 transition-all duration-200 ease-out ${isPastNavbar ? 'bg-black shadow-lg' : ' bg-transparent'}`}>

            <div className="flex justify-between items-center">
                <div>
                    <Link href='/'>
                        🐯
                    </Link>
                </div>
                <div className="flex gap-2">
                    <Link href='/discografia'>
                        Discografia
                    </Link>
                    
                </div>
                
                <div className="flex gap-3">

                    <Link href="https://es-es.facebook.com/RiseOrDieOfficial">
                        <FaFacebookF size={22} />
                    </Link>

                    <Link href="https://instagram.com/rise_metalband/">
                        <FaInstagram size={24}/>
                    </Link>
                    
                    <Link href="https://www.youtube.com/@risebandofficial?si=b2WRmfNVw6B1kK8U">
                        <FaYoutube size={24}/>
                    </Link>
                    
                    <Link href="https://risemetalband.bandcamp.com/album/derange#">
                        <FaBandcamp size={24}/>
                    </Link>
                   
                    <Link href="https://music.youtube.com/channel/UCFl15L655YrI3f4VvB5HLBg?si=aD6q0c5LFQrMjjmn">
                        <SiYoutubemusic size={24}/>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
