import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

const totalImages = 3;
const images = Array.from({ length: totalImages }, (_, i) => ({
    src: `/photos/${i + 1}.jpeg`,
    alt: `Image ${i + 1}`,
}));

export function ImageCarousel() {
    return (
        <Carousel opts={{ align: "start" }} orientation="horizontal" className="w-full max-w-4xl">
            <CarouselContent>
                {images.map((image, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1 flex justify-center">
                            <img
                                src={image.src}
                                width={800}
                                height={600}
                                alt={image.alt}
                                className="aspect-video object-cover rounded-lg overflow-hidden"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="max-[600px]:hidden" />
            <CarouselNext className="max-[600px]:hidden" />
        </Carousel>
    );
}