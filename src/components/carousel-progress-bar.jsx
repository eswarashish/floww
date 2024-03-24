"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
 
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const slides = [
    {
      title: "🔗 Effortlessly Create Flowcharts with Floww",
      imageUrl: "/images/hero-banner-1.jpg",
    },
    {
      title: "🔄 Streamline Workflows with Floww's Intuitive Tools",
      imageUrl: "/images/hero-banner-2.jpg",
    },
    {
      title: "🛠️ Optimize Processes with Floww's Onboarding Flows",
      imageUrl: "/images/hero-banner-3.jpg",
    },
    {
      title: "🔍 Enhance Projects with Floww's Searchbar References",
      imageUrl: "/images/hero-banner-4.jpg",
    }
  ];
  

const BlockInfos = () => (
  <div className="absolute top-8 flex flex-col mx-auto max-w-[355px] items-center justify-center gap-10 md:max-w-fit md:gap-7 md:px-6 ">
    <p className="max-w-[480px] px-4 text-balance text-center font-normal text-lg md:text-xl md:px-0 md:max-w-[550px]">
      <span className="hidden md:inline text-6xl">
       <img className=" w-56 h-auto" src="/FLOWW-removebg-preview.png" alt="" />
       
      </span>
      <span className="inline md:hidden  text-6xl ">
      <img className=" w-32 h-auto" src="/FLOWW-removebg-preview.png" alt="" />
 
      </span>
    </p>
    <div className="flex gap-4 md:pt-4 sm:top-2 sm:pt-8 pt-5 ">
      <Button variant="default" size="lg">
        <Link href="/board">Try Flow Free</Link>
      </Button>
      <Button variant="outline" size="lg">
        <Link href="https://docs.google.com/document/d/1dQJLU529rLmAP3t5zKDVAU-2PXNvN5bJS-vlwMCzRgE/edit?usp=sharing">Learn more</Link>
      </Button>
    </div>
  </div>
);

const intervalAutoplay = 4000;

export function CarouselProgressBar() {
  // const mounted = useMounted();
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(slides.length);
  // FIX: Why slides.length ? The first dot don't show the animation progress bar if its 0. And current is set in useEffect after initial render

  const goToIndex = (index) => {
    if (!api) {
      return;
    }
    setCurrent(index);
    api?.scrollTo(index, true);
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);



  return (
   
      <Carousel
        className="relative h-full"
        opts={{
          loop: false,
          inViewThreshold: 1,
          dragFree: false,
          skipSnaps: true,
        }}
        plugins={[
          Autoplay({
            delay: intervalAutoplay,
            stopOnInteraction: false,
          }),
          ClassNames(),
        ]}
        setApi={setApi}
      >
        <CarouselContent
          className={cn("fade__container", !!api ? "fade__is-ready" : "")}
        >
          {slides.map((item) => (
            <CarouselItem key={item.title} className="fade__slide lg:p-52 p-40 sm:p-28 ">
              <div className=" flex flex-col items-center justify-between pb-6 md:pt-16 min-[0px]:justify-items-end">
                <Image
                  className="p-2 rounded-md absolute top-0 sm:w-auto sm:h-full h-full w-full md:block object-cover sm:block lg:block lg:h-full lg:w-auto xl:block xl:h-full xl:w-auto min-[0px]:hidden"
                  src={item.imageUrl}
                  alt={item.title}
                  width={2000}
                  height={480}
                  priority
                />
                <div className="flex max-w-[355px] text-center items-center justify-center md:max-w-fit md:px-6">
                  <h1 className="px-2 md:px-0 md:py-4 text-heading-xl sm:hidden min-[0px]:text-xl  min-[0px]:px-0 min-[0px]:pt-40">{item.title}</h1>
                </div>
              </div>
            </CarouselItem>
          ))}
          
        </CarouselContent>

        <div className="absolute z-0  h-full inset-0 flex items-center justify-center">
          <BlockInfos />
        </div>

        <div className="absolute z-0 bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="flex gap-3">
            {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToIndex(index)}
                  className="relative h-[3px] w-12 overflow-hidden rounded-full"
                >
                  <div className="w-full h-full bg-muted-foreground/30 dark:bg-muted-foreground/70 absolute"></div>
                  <div
                    className={cn(
                      "h-full bg-primary relative w-0 z-10",
                      current === index ? "animation-progress-bar w-full" : ""
                    )}
                    style={
                      current === index
                        ? {
                            transitionDuration: `${intervalAutoplay}ms`,
                            animationDuration: `${intervalAutoplay}ms`,
                          }
                        : {}
                    }
                  />
                </button>
              ))}
          </div>
        </div>
      </Carousel>
    
  );
}