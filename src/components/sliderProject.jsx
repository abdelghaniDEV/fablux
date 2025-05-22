import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useSelector } from "react-redux";
import Autoplay from "embla-carousel-autoplay"

export default function SliderProject() {
  const projects = useSelector((state) => state.projects);

  return (
    <div className="py-10">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      >
        <CarouselContent>
          {projects.map((project) => {
            return (
              <CarouselItem>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-[22px] font-[700] text-main-primary">
                      Latest Works
                    </h3>
                    <h1 className="text-[25px] font-[700]">
                      {project.name} - {project.type}
                    </h1>
                    <p className="font-outfit text-[#CFCFCF] line-clamp-3 md:line-clamp-6">{project.description}</p>
                  </div>
                  <div className="w-full h-[200px] md:h-[300px] border-[2px] border-primary rounded-[10px]">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-[200px] rounded-[10px] object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
