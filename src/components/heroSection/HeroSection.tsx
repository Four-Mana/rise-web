import Image from "next/image"
import logo from './_assets/logotest2.png'
import background from './_assets/bandatest.jpeg'

export const HeroSection = () => {
    return (
        <section className="relative max-h-screen" data-testid='hero-section'>
            <div className="flex items-end justify-center w-full h-full">
                <Image src={background}
                    alt="Foto"
                    objectFit="cover" />
                <Image className="absolute bottom-8 max-h-" style={{
                    width: '50%',
                    height: 'auto',
                }} src={logo}
                    alt="Logo"
                    objectFit="contain" />
            </div>

        </section>
    )
}