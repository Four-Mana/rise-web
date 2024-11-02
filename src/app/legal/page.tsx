import { PdfPage } from "@/components/pdfPage";
import {ClipLoaderComponent } from '@/components';

export const metadata = {
  title: "Aviso legal - Rise",
  description: "El aviso legal de nuestra web"
}

export default function Legal() {
  return (
    <ClipLoaderComponent>
    <PdfPage title="Aviso Legal" file="/assets/avisolegal.pdf" />
    </ClipLoaderComponent>
  );
}
