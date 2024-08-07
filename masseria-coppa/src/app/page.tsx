import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-[100dvh]">
        <Header />
        <main className="flex-1">
          <section className="w-full py-8 md:py-10 lg:py-4 p-5">
            <div className="container grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <img
                src="/farm.jpeg"
                width="550"
                height="550"
                alt="Farm"
                className="mx-auto aspect-square overflow-hidden rounded-lg object-cover sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Benvenuti a Masseria Coppa
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Immersa nel cuore della campagna, Masseria Coppa fornisce prodotti lattiero-caseari di alta qualità
                    prodotti alla nostra comunità da oltre 50 anni. La nostra azienda agricola a conduzione familiare è impegnata nella sostenibilità e
                    pratiche agricole etiche, garantendo che ogni prodotto che offriamo sia fresco, nutriente e delizioso.                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-5 lg:py-16 bg-muted">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">I nostri prodotti</h2>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Esplora la nostra selezione di latticini freschi e di alta qualità, realizzati con il latte dei nostri bovini.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Latticini</h3>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                    <ProductCard nome="Ricotta" descrizione="descrizione" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Marmellate</h3>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                    <ProductCard nome="Cipolle rosse" descrizione="descrizione" />
                  </div>
                </div>
              </div>
            </div>
          </section>

        </main>
      </div >
    </>
  );
}
