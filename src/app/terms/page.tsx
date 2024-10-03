import { PdfViewer } from "@/components/pdfViewer"; 

export default function LegalPage() {
  const pdfPath = "/assets/terms&conditions.pdf"; 

  return (
    <main className="flex flex-col items-center justify-between mt-10 h-screen bg-black scrollbar=hidden"> 
      <PdfViewer pdfPath={pdfPath} /> 
    </main>
  );
}
