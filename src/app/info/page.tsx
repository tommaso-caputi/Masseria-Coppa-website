import Footer from "@/components/Footer"
import { Header } from "@/components/Header"
import { ImageCarousel } from "@/components/ImagesCarousel"

export default function info() {
    return (
        <>
            <Header />
            <div className="flex flex-col min-h-dvh">
                <section className="w-full pt-10 pb-5 flex justify-center">
                    <ImageCarousel />
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
                            <div>
                                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Come lavoriamo</div>
                                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                    Il nostro approccio al lavoro
                                </h2>
                                <div className="grid gap-4 text-muted-foreground">
                                    <div>
                                        <h3 className="text-xl font-semibold">Collaborazione</h3>
                                        <p>
                                            Crediamo nella collaborazione come chiave per il successo. Lavoriamo fianco a fianco con i nostri
                                            clienti per comprendere le loro esigenze e fornire soluzioni su misura.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">Innovazione</h3>
                                        <p>
                                            Siamo sempre alla ricerca di nuovi modi per migliorare i nostri servizi e offrire soluzioni
                                            innovative ai nostri clienti.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">Qualità</h3>
                                        <p>
                                            La qualità è al centro di tutto ciò che facciamo. Ci impegniamo a fornire risultati eccellenti e a
                                            superare le aspettative dei nostri clienti.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">La nostra storia</div>
                                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                    Un viaggio di successo
                                </h2>
                                <div className="grid gap-4 text-muted-foreground">
                                    <div>
                                        <h3 className="text-xl font-semibold">Origini</h3>
                                        <p>
                                            La nostra azienda è stata fondata nel 2010 con l&#39; obiettivo di offrire servizi di alta qualità ai
                                            nostri clienti.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">Crescita</h3>
                                        <p>
                                            Nel corso degli anni, siamo cresciuti costantemente, espandendo il nostro team e la nostra portata
                                            geografica.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">Successo</h3>
                                        <p>
                                            Oggi, siamo orgogliosi di essere riconosciuti come leader del settore, grazie all&#39; impegno e alla
                                            dedizione del nostro team.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
            <Footer />
        </>
    )
}
