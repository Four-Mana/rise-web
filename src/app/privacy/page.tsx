import { PdfPage } from "@/components/pdfPage";

export const metadata = {
  title: "Privacidad - Rise",
  description: "El aviso sobre Privacidad de nuestra web"
}

export default function Privacy() {
  return (
    <PdfPage title="Privacidad" file="/assets/privacy.pdf" />
  );
}
