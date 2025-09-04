import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
const ProjectCard = ({ projects }) => {
  return (
    <Carousel className="w-full max-w-xl mx-auto">
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem key={project.id} className="p-4">
            <Card className="relative group overflow-hidden">
              <a href={project.projLink} className="block w-full h-full">
                <img
                  className="w-full h-64 object-contain"
                  src={project.imgSrc}
                  alt={project.projName}
                />
                <div className="card-content">
                  <p className="text-center px-4">{project.projDesc}</p>
                </div>
              </a>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-black" />
      <CarouselNext className="text-black" />
    </Carousel>
  );
};
export default ProjectCard;
