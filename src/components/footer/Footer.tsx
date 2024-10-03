import Link from 'next/link';
import React from 'react';

export const Footer = () => {
    return (
        <footer className="flex flex-col justify-center gap-4 bg-[#171717] px-6 py-3 text-[10px] uppercase md:flex-row">
            <Link href="/aviso-legal">Aviso Legal</Link>
            <Link href="/cookies">Política de Cookies Web</Link>
            <Link href="/privacidad">Política de Privacidad Web</Link>
            <Link href="/terminos-condiciones">Términos y condiciones Web</Link>
            <Link href="/contacto">Contacto</Link>
        </footer>
    );
};
