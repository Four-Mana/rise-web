import { PdfPage } from "@/components/pdfPage";
import {ClipLoaderComponent } from '@/components';

export const metadata = {
  title: "Cookies - Rise",
  description: "Conoce más sobre nuestra politica de cookies"
}

export default function Cookies() {
  return (
    <ClipLoaderComponent>
    <PdfPage title="Cookies" file="/assets/cookies.pdf" />
    </ClipLoaderComponent>
  );
}
