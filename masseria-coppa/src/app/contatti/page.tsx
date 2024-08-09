"use client"

import { Header } from "@/components/Header"
import Link from "next/link"

export default function contatti() {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-dvh space-y-8 px-4 md:px-6">
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Contattaci</h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                        Hai bisogno di informazioni o vuoi fare un ordine? Scrivici su WhatsApp o chiamaci, saremo felici di assisterti!
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-2 text-center items-center flex flex-col">
                        <PhoneIcon className="h-8 w-8 mx-auto" />
                        <div>
                            <p className="font-medium">Telefono</p>
                            <p className="text-muted-foreground">
                                <Link href="tel:+393476636776" className="text-muted-foreground hover:underline">
                                    +39 3476636776
                                </Link>
                                <br />
                                <Link href="tel:+393479796643" className="text-muted-foreground hover:underline">
                                    +39 3479796643
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="space-y-2 text-center items-center flex flex-col">
                        <MailOpenIcon className="h-8 w-8 mx-auto" />
                        <div>
                            <p className="font-medium">Email</p>
                            <Link href="mailto:" className="text-muted-foreground hover:underline">
                                contact@acme.com
                            </Link>
                        </div>
                    </div>
                    <div className="space-y-2 text-center items-center flex flex-col">
                        <InstagramIcon className="h-8 w-8 mx-auto" />
                        <div>
                            <p className="font-medium">Instagram</p>
                            <Link href="https://www.instagram.com/masseria.coppa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-muted-foreground hover:underline" prefetch={false}>
                                @masseria-coppa
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-3xl relative pt-[55%] lg:pt-[30%]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1762.468663673044!2d16.374833533845365!3d40.99697287200536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13380bd4fcf9b9d1%3A0xe30ed3807020bba!2sTenuta%20COPPA%20di%20Ruvo%20di%20Puglia!5e1!3m2!1sit!2sit!4v1723197969271!5m2!1sit!2sit"
                        className="absolute top-0 left-0 w-full h-full"
                        style={{ border: 0, borderRadius: '12px' }}
                        loading="lazy"
                    />
                </div>
            </div>
        </>
    )
}

function InstagramIcon({ props }: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    )
}

function MailOpenIcon({ props }: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
            <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
        </svg>
    )
}


function PhoneIcon({ props }: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    )
}