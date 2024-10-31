import { PdfPage } from "@/components/pdfPage";

export const metadata = {
  title: "Cookies - Rise",
  description: "Conoce más sobre nuestra politica de cookies"
}

export default function Cookies() {
  return (
    <PdfPage title="Cookies" file="/assets/cookies.pdf" />
  );
}
