import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

export function ImageCarousel() {
    return (
        <>
            <Carousel opts={{ align: "start" }} orientation="horizontal" className="w-full max-w-4xl">
                <CarouselContent>
                    <CarouselItem>
                        <div className="p-1 flex justify-center">
                            <img
                                src="/placeholder.svg"
                                width={800}
                                height={600}
                                alt="Image 1"
                                className="aspect-video object-cover rounded-lg overflow-hidden"
                            />
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="p-1 flex justify-center">
                            <img
                                src="/placeholder.svg"
                                width={800}
                                height={600}
                                alt="Image 1"
                                className="aspect-video object-cover rounded-lg overflow-hidden"
                            />
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="" />
                <CarouselNext className="" />
            </Carousel>
        </>
    )
}
