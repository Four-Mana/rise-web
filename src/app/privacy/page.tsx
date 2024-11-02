import { PdfPage } from "@/components/pdfPage";
import {ClipLoaderComponent } from '@/components';

export const metadata = {
  title: "Privacidad - Rise",
  description: "El aviso sobre Privacidad de nuestra web"
}

export default function Privacy() {
  return (
    <ClipLoaderComponent>
    <PdfPage title="Privacidad" file="/assets/privacy.pdf" />
    </ClipLoaderComponent>
  );
}
