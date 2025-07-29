import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const clients = [
    { name: "Aurum Legacy", logo: "/uploads/aurum-legacy.webp" },
    { name: "Eminence 96", logo: "/uploads/eminence-96.jpg" },
    { name: "Kala Samartheshwar", logo: "/uploads/kala-samartheshwar.png" },
    { name: "Kala Siddhi", logo: "/uploads/kala-siddhi.png" },
    { name: "Shafalya", logo: "/uploads/shafalya.jpg" },
    { name: "The Verity", logo: "/uploads/the-verity.png" },
    { name: "Unicus Shyamal", logo: "/uploads/unicus-shyamal.png" },
    { name: "Veritas", logo: "/uploads/veritas.jpg" },
];

export default () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const autoplay = useCallback(() => {
        if (!emblaApi) return;
        if (emblaApi.canScrollNext()) {
            emblaApi.scrollNext();
        } else {
            emblaApi.scrollTo(0); // go back to start
        }
    }, [emblaApi]);

    useEffect(() => {
        const interval = setInterval(() => {
            autoplay();
        }, 2000); // every 3 seconds

        return () => clearInterval(interval); // cleanup
    }, [autoplay]);

    return (
        <section id="clients" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        Our Esteemed Clients
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We're proud to partner with organizations that trust us to deliver excellence.
                    </p>
                </div>

                {/* Embla Carousel */}
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container">
                        {clients.map((client, index) => (
                            <div className="embla__slide" key={index}>
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    title={client.name}
                                    className="h-20 w-auto mx-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
};