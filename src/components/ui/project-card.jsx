import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PixelTransition from "../PixelTransition";
import { useIsMobile } from "@/lib/hooks/use-mobile";
const ProjectCard = ({ projects }) => {
  const isMobile = useIsMobile(768);
  return (
    <Carousel className="w-full max-w-xl mx-auto ">
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem
            key={project.id}
            className="flex flex-col justify-center items-center"
          >
            <a
              href={project.projLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline mt-2"
            >
              {isMobile ? (
                <div className="flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-70 p-4">
                  <img
                    className="w-full object-fill"
                    src={project.imgSrc}
                    alt={project.projName}
                  />
                  <p className="text-center text-white">{project.projDesc}</p>
                </div>
              ) : (
                <PixelTransition
                  firstContent={
                    <img
                      className="w-full object-fill"
                      src={project.imgSrc}
                      alt={project.projName}
                    />
                  }
                  secondContent={
                    <div className="flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-70 p-4">
                      <p className="text-center text-white">
                        {project.projDesc}
                      </p>
                    </div>
                  }
                  gridSize={12}
                  pixelColor="#ffffff"
                  animationStepDuration={0.4}
                />
              )}
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
