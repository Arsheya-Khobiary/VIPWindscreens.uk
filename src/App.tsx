import React from "react";
import { Phone, MessageCircle, Shield, Wrench, Car, Sparkles, MapPin, Star, Truck } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import logo from "./assets/47fda1cbbff3306c90c9b372b4f864bb80063190.png";

// Gallery Images
import galleryImage1 from "./assets/a5b4b247-4d23-4445-ad8d-fc55bcb185c4.JPG";
import galleryImage2 from "./assets/IMG_1769.JPG";
import galleryImage3 from "./assets/Screenshot 2025-10-18 at 15.06.16.png";
import galleryImage4 from "./assets/Screenshot 2025-10-18 at 15.06.28.png";
import galleryImage5 from "./assets/4da68cbd-63ae-44f9-a451-1b9980923d2a.JPG";
import galleryImage6 from "./assets/6bef978d-aed9-4ed9-bb51-2fea08a03e1e.JPG";
import galleryImage7 from "./assets/7491152a-d95d-4b01-89db-11f1e72d76f8.JPG";
import galleryImage8 from "./assets/b2d2f5ef-7499-42dd-bc4d-528d68dffee1.JPG";
import galleryImage9 from "./assets/bd62cc76-cdf1-4f24-bcfe-3c435f573c6b.JPG";
import galleryImage10 from "./assets/d9ca2014-e1b7-4a7a-af49-eda3157ceb6b.JPG";
import galleryImage11 from "./assets/f4d9256f-588e-4a51-aa33-1beb426e26f9.JPG";
import galleryImage12 from "./assets/ff18e3a9-93ff-44ee-8e2a-3c7456adfe65.JPG";

export default function App() {
  const phoneNumber = "+447464356487";
  const whatsappNumber = "447464356487";

  const services = [
    {
      icon: Shield,
      title: "Chipped Glass",
      description: "Quick repair for small chips before they spread",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3aW5kc2hpZWxkJTIwY2hpcHxlbnwxfHx8fDE3NjA0NjczNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Wrench,
      title: "Cracked Windshields",
      description: "Expert repair of cracks of all sizes",
      image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFja2VkJTIwd2luZHNoaWVsZCUyMGNsb3NlfGVufDF8fHx8MTc2MDQ2NzM3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Car,
      title: "Full Glass Replacement",
      description: "Complete windshield replacement service",
      image: "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBnbGFzcyUyMHJlcGxhY2VtZW50fGVufDF8fHx8MTc2MDQ2NzM3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Sparkles,
      title: "All Vehicle Types",
      description: "From supercars to vans — we handle them all",
      image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW1ib3JnaGluaSUyMGx1eHVyeSUyMGNhcnxlbnwxfHx8fDE3NjA0NjczNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const vehicleTypes = [
    "Lamborghini",
    "G-Wagon",
    "Porsche",
    "Range Rover",
    "Bentley",
    "Rolls Royce",
    "Ferrari",
    "Small Cars",
    "Family Cars",
    "Vans",
    "Commercial Vehicles",
  ];

  const galleryImages = [
    {
      url: galleryImage1,
      alt: "Luxury car service",
    },
    {
      url: galleryImage2,
      alt: "Premium vehicle repair",
    },
    {
      url: galleryImage3,
      alt: "Expert windshield service",
    },
    {
      url: galleryImage4,
      alt: "Professional car maintenance",
    },
    {
      url: galleryImage5,
      alt: "Windshield repair work",
    },
    {
      url: galleryImage6,
      alt: "Vehicle glass service",
    },
    {
      url: galleryImage7,
      alt: "Mobile repair service",
    },
    {
      url: galleryImage8,
      alt: "Expert glass replacement",
    },
    {
      url: galleryImage9,
      alt: "Professional windshield repair",
    },
    {
      url: galleryImage10,
      alt: "Luxury car maintenance",
    },
    {
      url: galleryImage11,
      alt: "Premium repair service",
    },
    {
      url: galleryImage12,
      alt: "Expert vehicle service",
    },
  ];


  const testimonials = [
    {
      quote: "Top-tier service. VIP Windscreens came to my office in Mayfair and had my cracked windshield fixed within 30 minutes. Super professional, on time, and knew exactly what they were doing. Wouldn't trust anyone else with my Porsche.",
      author: "James R.",
      location: "London",
    },
    {
      quote: "I was stranded near Birmingham with a smashed screen. One call and VIP Windscreens was on the way. They arrived fast, were super friendly, and had the tools ready to go. You can tell they know luxury vehicles — they treated my Range Rover like gold.",
      author: "Amina K.",
      location: "Birmingham",
    },
    {
      quote: "Service doesn't get better than this. VIP Windscreens fixed my Mercedes AMG windshield outside my house in Shoreditch. Clean, efficient, and left everything spotless. Felt like a dealership service but at my doorstep.",
      author: "Daniel P.",
      location: "East London",
    },
    {
      quote: "Called VIP Windscreens on WhatsApp after a stone cracked my windshield on the M1. They answered right away, came to my house the same day, and sorted it. Professional, polite, and 100% reliable.",
      author: "Sophie L.",
      location: "Watford",
    },
    {
      quote: "Five stars isn't enough. VIP Windscreens knows their craft. I was worried about finding someone who could handle my Bentley properly — but they showed up with the right parts, handled it like a pro, and now it's flawless.",
      author: "Kareem M.",
      location: "Kensington",
    },
  ];

  const coverage = [
    "London Central",
    "Shoreditch",
    "Soho",
    "Chelsea",
    "Camden",
    "Mayfair",
    "Canary Wharf",
    "Birmingham",
    "Surrounding Cities",
  ];

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 md:bottom-8 md:right-8">
        <Button
          onClick={handleWhatsApp}
          size="lg"
          className="group h-16 w-16 rounded-full bg-[#25D366] p-0 shadow-2xl transition-all hover:scale-110 hover:bg-[#20ba5a] md:h-20 md:w-20"
        >
          <div className="flex flex-col items-center gap-0.5">
            <MessageCircle className="h-7 w-7 md:h-9 md:w-9" />
            <span className="text-[8px] md:text-[9px] uppercase tracking-wider">WhatsApp</span>
          </div>
          <span className="sr-only">WhatsApp VIP Windscreens</span>
        </Button>
        <Button
          onClick={handleCall}
          size="lg"
          className="h-16 w-16 rounded-full bg-primary p-0 text-black shadow-2xl transition-all hover:scale-110 md:h-20 md:w-20"
        >
          <div className="flex flex-col items-center gap-0.5">
            <Phone className="h-7 w-7 md:h-9 md:w-9" />
            <span className="text-[8px] md:text-[9px] uppercase tracking-wider">Call</span>
          </div>
          <span className="sr-only">Call VIP Windscreens</span>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1662203530667-6d398dbaffa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBibGFjayUyMHJhbmdlJTIwcm92ZXIlMjBsb25kb258ZW58MXx8fHwxNzYwNDY2MzU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury car in London"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex justify-center">
              <img 
                src={logo} 
                alt="VIP Windscreens" 
                className="h-42 w-auto md:h-2 lg:h-40 animate-in fade-in zoom-in duration-500" 
              />
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight">
                <span className="block bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text text-transparent">
                  Cracked Windshield?
                </span>
                <span className="block mt-2 bg-gradient-to-r from-[#D4AF37] via-[#F4E6C3] to-[#D4AF37] bg-clip-text text-transparent">
                  We've Got You Covered.
                </span>
              </h1>
              <p className="mx-auto max-w-3xl text-lg sm:text-xl md:text-2xl text-gray-300">
                VIP Windscreen Repair — Wherever You Are. Fast, Reliable, Premium Service.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Button
                onClick={handleCall}
                size="lg"
                className="group relative overflow-hidden bg-primary text-primary-foreground px-8 py-6 text-lg shadow-2xl transition-all hover:scale-105 hover:shadow-primary/50"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#F4E6C3] to-[#D4AF37] opacity-0 transition-opacity group-hover:opacity-100" />
              </Button>
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="bg-[#25D366] px-8 py-6 text-lg shadow-2xl transition-all hover:scale-105 hover:bg-[#20ba5a]"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
            </div>

            {/* Phone Number */}
            <div className="mt-6">
              <a
                href={`tel:${phoneNumber}`}
                className="text-xl md:text-2xl text-primary hover:text-[#F4E6C3] transition-colors"
              >
                {phoneNumber}
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
          <div className="h-12 w-8 rounded-full border-2 border-primary/30">
            <div className="mx-auto mt-2 h-2 w-2 rounded-full bg-primary/60" />
          </div>
        </div>
      </section>

      {/* Vehicle Types Banner */}
      <section className="relative border-y border-primary/20 bg-gradient-to-r from-black via-primary/5 to-black py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3">
              <span className="bg-gradient-to-r from-primary via-[#F4E6C3] to-primary bg-clip-text text-transparent">
                We Service All Vehicles
              </span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl">
              From Lamborghinis to G-Wagons, Small Cars to Vans — We Handle Them All
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {vehicleTypes.map((vehicle, index) => (
              <div
                key={index}
                className="rounded-full border border-primary/30 bg-black/40 px-4 py-2 backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10 md:px-6 md:py-3"
              >
                <span className="text-sm md:text-base text-gray-300">{vehicle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="absolute top-10 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text text-transparent">
                What We Fix
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed">
              No garage needed. We come to your home, office, or roadside — wherever you are.
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm transition-all hover:scale-105 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover opacity-20 transition-all duration-700 group-hover:scale-110 group-hover:opacity-30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
                </div>

                <div className="relative z-10 p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative space-y-6">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-black group-hover:scale-110 group-hover:shadow-lg">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  
                  {/* Decorative element */}
                  <div className="absolute top-4 right-4 w-6 h-6 border border-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-primary/5" />
        <div className="absolute top-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text text-transparent">
                Luxury Cars. Expert Repairs.
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              From Lamborghini to Mercedes G-Wagon — Trusted by owners of the world's finest vehicles
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              dragFree: false,
              containScroll: "trimSnaps",
              watchDrag: false,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="mx-auto max-w-6xl"
          >
            <CarouselContent>
              {/* A35 Before */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="group relative overflow-hidden rounded-2xl shadow-2xl border border-white/10 hover:border-primary/30 transition-all p-2">
                  <div className="aspect-[3/2] overflow-hidden h-64">
                    <ImageWithFallback
                      src="/src/assets/before_after/a35before.JPG"
                      alt="Mercedes A35 before repair"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-white text-sm font-medium">Mercedes A35 - Before</p>
                    </div>
                    {/* Decorative corner element */}
                    <div className="absolute top-4 right-4 w-8 h-8 border-2 border-primary/40 rounded-full opacity-0 transition-opacity group-hover:opacity-100 group-hover:border-primary"></div>
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                    {/* Floating badge */}
                    <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                      <div className="bg-primary/90 text-black px-3 py-1 rounded-full text-xs font-semibold">
                        Premium Service
                      </div>
                    </div>
                  </div>
                </CarouselItem>

              {/* Audi Before */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="group relative overflow-hidden rounded-2xl shadow-2xl border border-white/10 hover:border-primary/30 transition-all p-2">
                  <div className="aspect-[3/2] overflow-hidden h-64">
                    <ImageWithFallback
                      src="/src/assets/before_after/audiibefore.JPG"
                      alt="Audi before repair"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
        </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-white text-sm font-medium">Audi - Before</p>
                  </div>
                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-2 border-primary/40 rounded-full opacity-0 transition-opacity group-hover:opacity-100 group-hover:border-primary"></div>
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  {/* Floating badge */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-primary/90 text-black px-3 py-1 rounded-full text-xs font-semibold">
                      Premium Service
                    </div>
                  </div>
                </div>
              </CarouselItem>

              {/* C300 Before */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="group relative overflow-hidden rounded-2xl shadow-2xl border border-white/10 hover:border-primary/30 transition-all p-2">
                  <div className="aspect-[3/2] overflow-hidden h-64">
                    <ImageWithFallback
                      src="/src/assets/before_after/c300before.JPG"
                      alt="Mercedes C300 before repair"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-white text-sm font-medium">Mercedes C300 - Before</p>
                  </div>
                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-2 border-primary/40 rounded-full opacity-0 transition-opacity group-hover:opacity-100 group-hover:border-primary"></div>
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  {/* Floating badge */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-primary/90 text-black px-3 py-1 rounded-full text-xs font-semibold">
                      Premium Service
                    </div>
                  </div>
                </div>
              </CarouselItem>

              {/* Defender Before */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="group relative overflow-hidden rounded-2xl shadow-2xl border border-white/10 hover:border-primary/30 transition-all p-2">
                  <div className="aspect-[3/2] overflow-hidden h-64">
                    <ImageWithFallback
                      src="/src/assets/before_after/defenderbefore.JPG"
                      alt="Defender before repair"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
        </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-white text-sm font-medium">Defender - Before</p>
                  </div>
                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-2 border-primary/40 rounded-full opacity-0 transition-opacity group-hover:opacity-100 group-hover:border-primary"></div>
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  {/* Floating badge */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-primary/90 text-black px-3 py-1 rounded-full text-xs font-semibold">
                      Premium Service
                    </div>
                  </div>
                </div>
              </CarouselItem>

              {/* Jaguar Before */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="group relative overflow-hidden rounded-2xl shadow-2xl border border-white/10 hover:border-primary/30 transition-all p-2">
                  <div className="aspect-[3/2] overflow-hidden h-64">
                    <ImageWithFallback
                      src="/src/assets/before_after/jagbefore.JPG"
                      alt="Jaguar before repair"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-white text-sm font-medium">Jaguar - Before</p>
                  </div>
                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-2 border-primary/40 rounded-full opacity-0 transition-opacity group-hover:opacity-100 group-hover:border-primary"></div>
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  {/* Floating badge */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-primary/90 text-black px-3 py-1 rounded-full text-xs font-semibold">
                      Premium Service
                    </div>
                  </div>
                </div>
              </CarouselItem>

              {/* Tesla Before */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="group relative overflow-hidden rounded-2xl shadow-2xl border border-white/10 hover:border-primary/30 transition-all p-2">
                  <div className="aspect-[3/2] overflow-hidden h-64">
                    <ImageWithFallback
                      src="/src/assets/before_after/teslabefore.JPG"
                      alt="Tesla before repair"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
            </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-white text-sm font-medium">Tesla - Before</p>
              </div>
                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-2 border-primary/40 rounded-full opacity-0 transition-opacity group-hover:opacity-100 group-hover:border-primary"></div>
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  {/* Floating badge */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-primary/90 text-black px-3 py-1 rounded-full text-xs font-semibold">
                      Premium Service
            </div>
          </div>
                </div>
              </CarouselItem>

              {/* Range Rover Before */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="group relative overflow-hidden rounded-2xl shadow-2xl border border-white/10 hover:border-primary/30 transition-all p-2">
                  <div className="aspect-[3/2] overflow-hidden h-64">
                    <ImageWithFallback
                      src="/src/assets/before_after/rangebefore.JPG"
                      alt="Range Rover before repair"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-white text-sm font-medium">Range Rover - Before</p>
                  </div>
                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-2 border-primary/40 rounded-full opacity-0 transition-opacity group-hover:opacity-100 group-hover:border-primary"></div>
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  {/* Floating badge */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-primary/90 text-black px-3 py-1 rounded-full text-xs font-semibold">
                      Premium Service
                    </div>
                  </div>
                </div>
              </CarouselItem>

              {/* BMW X5 Before */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="group relative overflow-hidden rounded-2xl shadow-2xl border border-white/10 hover:border-primary/30 transition-all p-2">
                  <div className="aspect-[3/2] overflow-hidden h-64">
                    <ImageWithFallback
                      src="/src/assets/before_after/x5before.JPG"
                      alt="BMW X5 before repair"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-white text-sm font-medium">BMW X5 - Before</p>
                  </div>
                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-2 border-primary/40 rounded-full opacity-0 transition-opacity group-hover:opacity-100 group-hover:border-primary"></div>
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  {/* Floating badge */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-primary/90 text-black px-3 py-1 rounded-full text-xs font-semibold">
                      Premium Service
                    </div>
                  </div>
                </div>
              </CarouselItem>

              {/* Gallery images moved to end of website */}
            </CarouselContent>
          </Carousel>

          {/* Second Row of Images */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              dragFree: false,
              containScroll: "trimSnaps",
              watchDrag: false,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="mx-auto max-w-6xl mt-8"
          >
            <CarouselContent>
              {/* A35 After */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="group relative overflow-hidden rounded-2xl shadow-2xl border border-white/10 hover:border-primary/30 transition-all p-2">
                  <div className="aspect-[3/2] overflow-hidden h-64">
                    <ImageWithFallback
                      src="/src/assets/before_after/a35after.JPG"
                      alt="Mercedes A35 after repair"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                      </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-white text-sm font-medium">Mercedes A35 - After</p>
                            </div>
                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-2 border-primary/40 rounded-full opacity-0 transition-opacity group-hover:opacity-100 group-hover:border-primary"></div>
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  {/* Floating badge */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-primary/90 text-black px-3 py-1 rounded-full text-xs font-semibold">
                      Premium Service
                          </div>
                  </div>
                </div>
              </CarouselItem>

              {/* Audi After */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="group relative overflow-hidden rounded-2xl shadow-2xl border border-white/10 hover:border-primary/30 transition-all p-2">
                  <div className="aspect-[3/2] overflow-hidden h-64">
                            <ImageWithFallback
                      src="/src/assets/before_after/audiiafter.JPG"
                      alt="Audi after repair"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                          </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-white text-sm font-medium">Audi - After</p>
                        </div>
                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-2 border-primary/40 rounded-full opacity-0 transition-opacity group-hover:opacity-100 group-hover:border-primary"></div>
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  {/* Floating badge */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-primary/90 text-black px-3 py-1 rounded-full text-xs font-semibold">
                      Premium Service
                    </div>
                  </div>
                </div>
              </CarouselItem>

              {/* C300 After */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="group relative overflow-hidden rounded-2xl shadow-2xl border border-white/10 hover:border-primary/30 transition-all p-2">
                  <div className="aspect-[3/2] overflow-hidden h-64">
                    <ImageWithFallback
                      src="/src/assets/before_after/c300after.JPG"
                      alt="Mercedes C300 after repair"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                            </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-white text-sm font-medium">Mercedes C300 - After</p>
                          </div>
                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-2 border-primary/40 rounded-full opacity-0 transition-opacity group-hover:opacity-100 group-hover:border-primary"></div>
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  {/* Floating badge */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-primary/90 text-black px-3 py-1 rounded-full text-xs font-semibold">
                      Premium Service
                    </div>
                  </div>
                </div>
              </CarouselItem>

              {/* Defender After */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="group relative overflow-hidden rounded-2xl shadow-2xl border border-white/10 hover:border-primary/30 transition-all p-2">
                  <div className="aspect-[3/2] overflow-hidden h-64">
                            <ImageWithFallback
                      src="/src/assets/before_after/defenderafter.JPG"
                      alt="Defender after repair"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                          </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-white text-sm font-medium">Defender - After</p>
                        </div>
                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-2 border-primary/40 rounded-full opacity-0 transition-opacity group-hover:opacity-100 group-hover:border-primary"></div>
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  {/* Floating badge */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-primary/90 text-black px-3 py-1 rounded-full text-xs font-semibold">
                      Premium Service
                      </div>
                  </div>
                </div>
              </CarouselItem>

              {/* Jaguar After */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="group relative overflow-hidden rounded-2xl shadow-2xl border border-white/10 hover:border-primary/30 transition-all p-2">
                  <div className="aspect-[3/2] overflow-hidden h-64">
                    <ImageWithFallback
                      src="/src/assets/before_after/jagafter.JPG"
                      alt="Jaguar after repair"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                            </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-white text-sm font-medium">Jaguar - After</p>
                          </div>
                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-2 border-primary/40 rounded-full opacity-0 transition-opacity group-hover:opacity-100 group-hover:border-primary"></div>
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  {/* Floating badge */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-primary/90 text-black px-3 py-1 rounded-full text-xs font-semibold">
                      Premium Service
                        </div>
                      </div>
                </div>
              </CarouselItem>

              {/* Tesla After */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="group relative overflow-hidden rounded-2xl shadow-2xl border border-white/10 hover:border-primary/30 transition-all p-2">
                  <div className="aspect-[3/2] overflow-hidden h-64">
                    <ImageWithFallback
                      src="/src/assets/before_after/teslaafter.JPG"
                      alt="Tesla after repair"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                        </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-white text-sm font-medium">Tesla - After</p>
                      </div>
                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-2 border-primary/40 rounded-full opacity-0 transition-opacity group-hover:opacity-100 group-hover:border-primary"></div>
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  {/* Floating badge */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-primary/90 text-black px-3 py-1 rounded-full text-xs font-semibold">
                      Premium Service
                    </div>
                  </div>
                </div>
              </CarouselItem>

              {/* Range Rover After */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="group relative overflow-hidden rounded-2xl shadow-2xl border border-white/10 hover:border-primary/30 transition-all p-2">
                  <div className="aspect-[3/2] overflow-hidden h-64">
                    <ImageWithFallback
                      src="/src/assets/before_after/rangeafter.JPG"
                      alt="Range Rover after repair"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-white text-sm font-medium">Range Rover - After</p>
                  </div>
                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-2 border-primary/40 rounded-full opacity-0 transition-opacity group-hover:opacity-100 group-hover:border-primary"></div>
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  {/* Floating badge */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-primary/90 text-black px-3 py-1 rounded-full text-xs font-semibold">
                      Premium Service
                    </div>
                  </div>
                </div>
                </CarouselItem>

              {/* BMW X5 After */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="group relative overflow-hidden rounded-2xl shadow-2xl border border-white/10 hover:border-primary/30 transition-all p-2">
                  <div className="aspect-[3/2] overflow-hidden h-64">
                    <ImageWithFallback
                      src="/src/assets/before_after/x5after.JPG"
                      alt="BMW X5 after repair"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
              </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-white text-sm font-medium">BMW X5 - After</p>
                </div>
                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-2 border-primary/40 rounded-full opacity-0 transition-opacity group-hover:opacity-100 group-hover:border-primary"></div>
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  {/* Floating badge */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-primary/90 text-black px-3 py-1 rounded-full text-xs font-semibold">
                      Premium Service
            </div>
          </div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      

      {/* Coverage Section */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Available Across London, Birmingham & Beyond
            </h2>
            <p className="text-lg md:text-xl text-gray-400">
              From Soho to Shoreditch, Chelsea to Camden — we cover it all.
            </p>
          </div>

          <div className="relative">
            {/* Map Background */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 backdrop-blur-sm md:p-12">
              <div className="absolute inset-0 opacity-10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1546355577-505da46d09db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25kb24lMjBjaXR5c2NhcGUlMjBuaWdodHxlbnwxfHx8fDE3NjA0NjYzNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="London skyline"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="relative grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {coverage.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-xl bg-black/40 p-4 backdrop-blur-md transition-all hover:bg-black/60"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-lg">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-primary/5" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </h2>
            <div className="flex justify-center mt-6">
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 hover:scale-105 hover:-translate-y-2"
              >
                <div className="space-y-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary transition-all duration-300 group-hover:text-yellow-400 group-hover:scale-110" />
                    ))}
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed relative">
                    <span className="text-4xl text-primary/30 absolute -top-2 -left-2">"</span>
                    {testimonial.quote}
                    <span className="text-4xl text-primary/30 absolute -bottom-4 -right-2">"</span>
                  </p>
                  <div className="border-t border-white/20 pt-4">
                    <p className="font-semibold text-white group-hover:text-primary transition-colors">{testimonial.author}</p>
                    <p className="text-sm text-gray-400 flex items-center gap-2 group-hover:text-gray-300 transition-colors">
                      <MapPin className="h-4 w-4" />
                      {testimonial.location}
                    </p>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-6 h-6 border border-primary/30 rounded-full opacity-0 transition-opacity group-hover:opacity-100"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Gallery Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-primary/5" />
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text text-transparent">
                Our Work Gallery
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed">
              A showcase of our premium windshield repair and replacement work
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-2xl border border-white/10 hover:border-primary/30 transition-all hover:scale-105 hover:-translate-y-2"
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
                {/* Decorative corner element */}
                <div className="absolute top-4 right-4 w-8 h-8 border-2 border-primary/40 rounded-full opacity-0 transition-opacity group-hover:opacity-100 group-hover:border-primary"></div>
                {/* Floating badge */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-primary/90 text-black px-3 py-1 rounded-full text-xs font-semibold">
                    Expert Work
                  </div>
                </div>
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                {/* Decorative bottom element */}
                <div className="absolute bottom-4 right-4 w-4 h-4 bg-primary/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/src/assets/7491152a-d95d-4b01-89db-11f1e72d76f8.JPG"
            alt="Professional service"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text text-transparent">
                Contact Us Now and Get Back on the Road — Fast.
              </span>
            </h2>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Button
                onClick={handleCall}
                size="lg"
                className="group relative overflow-hidden bg-primary text-primary-foreground px-8 py-6 text-lg shadow-2xl transition-all hover:scale-105 hover:shadow-primary/50"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call: {phoneNumber}
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#F4E6C3] to-[#D4AF37] opacity-0 transition-opacity group-hover:opacity-100" />
              </Button>
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="bg-[#25D366] px-8 py-6 text-lg shadow-2xl transition-all hover:scale-105 hover:bg-[#20ba5a]"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
            </div>

            
            


                {/* Decorative elements */}
                <div className="flex justify-center gap-2 mt-4">
                  <div className="w-2 h-2 bg-primary/60 rounded-full"></div>
                  <div className="w-2 h-2 bg-primary/40 rounded-full"></div>
                  <div className="w-2 h-2 bg-primary/60 rounded-full"></div>
                </div>
              
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4">
            <img src={logo} alt="VIP Windscreens" className="h-16 w-auto" />
            <div className="text-center text-sm text-gray-500">
              <p>© 2025 VIP WINDSCREENS. All rights reserved.</p>
              <p className="mt-2">Premium Mobile Windscreen Repair Service</p>
              <p className="mt-1">Lamborghini • G-Wagon • All Vehicles • Small Cars to Vans</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
