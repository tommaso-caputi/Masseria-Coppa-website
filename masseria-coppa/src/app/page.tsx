import { Header } from "@/components/Header";
import { ProductSection } from "@/components/ProductSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-[100dvh]">
        <Header />
        <main className="flex-1">
          <section className="w-full py-8 md:py-10 lg:py-4 p-5">
            <div className="grid gap-20 lg:grid-cols-[1fr_400px] lg:gap-6 xl:grid-cols-[1fr_600px]">
              <Image
                src="/farm.jpeg"
                width={550}
                height={550}
                alt="Farm"
                className="mx-auto aspect-square overflow-hidden rounded-lg object-cover sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Benvenuti a <br />Masseria Coppa
                  </h1>
                  <p className="max-w-[750px] text-muted-foreground md:text-xl">
                    Immersa nel cuore della campagna, Masseria Coppa fornisce prodotti lattiero-caseari di alta qualità
                    prodotti alla nostra comunità da oltre 50 anni. La nostra azienda agricola a conduzione familiare è impegnata nella sostenibilità e
                    pratiche agricole etiche, garantendo che ogni prodotto che offriamo sia fresco, nutriente e delizioso.                  </p>
                </div>
              </div>
            </div>
          </section>

          <ProductSection />

        </main>
      </div >
    </>
  );
}
