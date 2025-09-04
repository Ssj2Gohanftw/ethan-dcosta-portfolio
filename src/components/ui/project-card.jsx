import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PixelTransition from "../PixelTransition";
// import { Card } from "@/components/ui/card";
const ProjectCard = ({ projects }) => {
  return (
    <Carousel className="w-full max-w-xl mx-auto ">
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem
            key={project.id}
            className="flex flex-col justify-center items-center"
          >
            {/* <Card className="relative group overflow-hidden"> */}
            <a
              href={project.projLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline mt-2"
            >
              <PixelTransition
                firstContent={
                  <img
                    className="w-full h-64 object-contain"
                    src={project.imgSrc}
                    alt={project.projName}
                  />
                }
                secondContent={
                  <div className="flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-70 p-4">
                    <p className="text-center text-white">{project.projDesc}</p>
                  </div>
                }
                gridSize={12}
                pixelColor="#ffffff"
                animationStepDuration={0.4}
              />
              {/* </Card> */}
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-black" />
      <CarouselNext className="text-black" />
    </Carousel>
  );
};
export default ProjectCard;
