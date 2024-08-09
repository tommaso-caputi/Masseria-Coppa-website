import { confetture, latticini } from "@/data/data";
import { ProductCard } from "./ProductCard";

export function ProductSection() {
    return (
        <section className="w-full py-12 md:py-5 lg:py-16 bg-muted" id="prodotti">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col space-y-4 py-10">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">I nostri prodotti</h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl lg:text-base xl:text-xl">
                            Esplora la nostra selezione di latticini freschi e di alta qualità, realizzati con il latte dei nostri bovini.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid gap-6 pb-8 py-2 min-[360px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {latticini.map((product, index) => (
                        <ProductCard
                            key={`latticini-${index}`}
                            nome={product.nome}
                            descrizione={product.descrizione}
                        />
                    ))}
                </div>
                <h3 className="text-2xl font-bold">Confetture</h3>
                <div className="mx-auto grid gap-6 pb-8 py-2 min-[360px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {confetture.map((product, index) => (
                        <ProductCard
                            key={`marmellate-${index}`}
                            nome={product.nome}
                            descrizione={product.descrizione}
                        />
                    ))}
                </div>
            </div>
        </section>

    );
}
