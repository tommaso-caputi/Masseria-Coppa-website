import Link from "next/link";

export function Header() {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center">
            <Link href="#" className="flex items-center justify-center" prefetch={false}>
                <MountainIcon className="h-6 w-6" />
                <span className="sr-only">Acme Dairy Farm</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Info
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Prodotti
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Contatti
                </Link>
            </nav>
        </header>

    );
}

function MountainIcon({ props }: any) {
    /* return (
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
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    ) */
    return (
        <svg {...props} fill="#000000" height="24" width="24" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 486.809 486.809"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M486.804,260.418L382.855,70.512L243.404,0L103.953,70.512L0.005,260.418l26.316,14.404l22.143-40.453v252.439h389.881 V234.37l22.143,40.453L486.804,260.418z M221.948,373.059l-64.545,63.106V309.952L221.948,373.059z M243.404,394.037l64.203,62.772 H179.201L243.404,394.037z M264.861,373.059l64.545-63.106v126.213L264.861,373.059z M243.404,352.081l-64.203-62.772h128.407 L243.404,352.081z M408.345,456.809h-48.938v-197.5H127.402v197.5H78.464V179.562l47.335-86.478l117.605-59.466L361.01,93.083 l47.335,86.478V456.809z"></path> <path d="M193.404,219.309h100v-100h-100V219.309z M223.404,149.309h40v40h-40V149.309z"></path> </g> </g></svg>
    )
}