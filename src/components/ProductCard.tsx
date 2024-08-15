import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

interface ProductCardContent {
    nome: string
    descrizione: string
}

export function ProductCard({ nome, descrizione }: ProductCardContent) {
    return (
        <Card className="flex flex-col items-center justify-between">
            <CardHeader>
                <Image
                    src="/placeholder.svg"
                    width="200"
                    height="200"
                    alt="Milk"
                    className="aspect-square overflow-hidden rounded-xl object-cover"
                />
            </CardHeader>
            <CardContent className="text-center">
                <CardTitle>{nome}</CardTitle>
                <CardDescription>
                    {descrizione}
                </CardDescription>
                {/* <div className="font-bold text-lg">$3.99</div> */}
            </CardContent>
        </Card>
    );
}