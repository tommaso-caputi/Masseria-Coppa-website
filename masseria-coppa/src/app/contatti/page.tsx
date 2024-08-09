"use client"

import { Header } from "@/components/Header"
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps"
import Link from "next/link"

export default function contatti() {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-dvh space-y-8 px-4 md:px-6">
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Get in Touch</h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                        We'd love to hear from you. Here's how you can reach us.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-2 text-center items-center flex flex-col">
                        <PhoneIcon className="h-8 w-8 mx-auto" />
                        <div>
                            <p className="font-medium">Phone</p>
                            <p className="text-muted-foreground">
                                +1 (555) 555-5555
                                <br />
                                +1 (555) 555-5556
                            </p>
                        </div>
                    </div>
                    <div className="space-y-2 text-center items-center flex flex-col">
                        <MailOpenIcon className="h-8 w-8 mx-auto" />
                        <div>
                            <p className="font-medium">Email</p>
                            <p className="text-muted-foreground">contact@acme.com</p>
                        </div>
                    </div>
                    <div className="space-y-2 text-center items-center flex flex-col">
                        <InstagramIcon className="h-8 w-8 mx-auto" />
                        <div>
                            <p className="font-medium">Instagram</p>
                            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                                @acme
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-4xl">
                    <div />
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