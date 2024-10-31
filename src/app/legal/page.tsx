import { PdfPage } from "@/components/pdfPage";

export const metadata = {
  title: "Aviso legal - Rise",
  description: "El aviso legal de nuestra web"
}

export default function Legal() {
  return (
    <PdfPage title="Aviso Legal" file="/assets/avisolegal.pdf" />
  );
}
