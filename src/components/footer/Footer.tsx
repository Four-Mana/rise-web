import Link from 'next/link';
import React from 'react';

export const Footer = () => {
    return (
        <footer className="flex flex-col justify-center gap-4 bg-white/10 px-6 py-3 text-[10px] tracking-wider text-white uppercase md:flex-row">
            <Link href="/legal">Aviso Legal</Link>
            <Link href="/cookies">Política de Cookies Web</Link>
            <Link href="/privacy">Política de Privacidad Web</Link>
            <Link href="/terms">Términos y condiciones Web</Link>
        </footer>
    );
};
