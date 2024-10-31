import { PdfPage } from "@/components/pdfPage";

export const metadata = {
  title: "Terminos y condiciones - Rise",
  description: "El aviso sobre Terminos y condiciones de nuestra web"
}

export default function Terms() {
  return (
    <PdfPage title="Términos & Condiciones" file="/assets/terms&conditions.pdf" />
  );
}
