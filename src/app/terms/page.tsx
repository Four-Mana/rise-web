import { PdfPage } from "@/components/pdfPage";
import {ClipLoaderComponent } from '@/components';
export const metadata = {
  title: "Terminos y condiciones - Rise",
  description: "El aviso sobre Terminos y condiciones de nuestra web"
}

export default function Terms() {
  return (
    <ClipLoaderComponent>
    <PdfPage title="Términos & Condiciones" file="/assets/terms&conditions.pdf" />
    </ClipLoaderComponent>
  );
}
