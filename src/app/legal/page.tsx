import { PdfViewer } from "@/components/pdfViewer"; 

export default function LegalPage() {
  const pdfPath = "/assets/avisolegal.pdf"; 

  return (
    <main className="flex flex-col items-center justify-between mt-10 h-screen bg-black"> 
      <PdfViewer pdfPath={pdfPath} /> 
    </main>
  );
}
