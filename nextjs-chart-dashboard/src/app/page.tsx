import Card from "@/components/Card";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Header />
      text
      <Card
        cpf="123.456.789-10"
        email="z0j9S@example.com"
        title="Cartão de Credito"
        date={new Date()}
      />
    </main>
  );
}
