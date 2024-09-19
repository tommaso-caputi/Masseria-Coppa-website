import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-muted-foreground">&copy; 2024 MASSERIA COPPA DI CAPUTI GIOVANNI E VITTORIO SNC
                | P.iva 06765450728 | Numero R.E.A BA-508236 | Indirizzo sede legale Zona rurale 493, Ruvo Di Puglia</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
                        Dati identificativi
                    </Link>
                </nav>
            </footer>
        </>
    )
}