import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-36">
        <Services />
      </main>
      <Footer />
    </>
  );
}
