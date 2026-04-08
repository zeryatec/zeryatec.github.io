import Hero from "@/components/Hero";
import SuccessCases from "@/components/SuccessCases";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      <SuccessCases />
      <TechStack />
    </main>
  );
}
