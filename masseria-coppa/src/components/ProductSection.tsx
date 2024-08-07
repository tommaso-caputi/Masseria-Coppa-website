import { ProductCard } from "./ProductCard";

export function ProductSection() {

    const products1 = [
        {
            nome: "Mozzarella",
            descrizione: "descrizione mozzarella"
        },
        {
            nome: "Nodino",
            descrizione: "descrizione nodino"
        },
        {
            nome: "Ricotta",
            descrizione: "descrizione ricotta"
        }
    ]
    const products2 = [
        {
            nome: "Cipolle rosse",
            descrizione: "descrizione"
        }
    ]

    return (
        <section className="w-full py-12 md:py-5 lg:py-16 bg-muted">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col space-y-4 py-10">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">I nostri prodotti</h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Esplora la nostra selezione di latticini freschi e di alta qualità, realizzati con il latte dei nostri bovini.
                        </p>
                    </div>
                </div>
                <h3 className="text-2xl font-bold">Latticini</h3>
                <div className="mx-auto grid grid-cols-4 gap-6 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 pb-8 py-2">
                    {products1.map(product => {
                        return (
                            <ProductCard nome={product.nome} descrizione={product.descrizione} />
                        )
                    })}
                </div>
                <h3 className="text-2xl font-bold">Marmellate</h3>
                <div className="mx-auto grid grid-cols-4 gap-6 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 pb-8 py-2">
                    {products2.map(product => {
                        return (
                            <ProductCard nome={product.nome} descrizione={product.descrizione} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}