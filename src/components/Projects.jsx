import { ProjectData } from "../data/ProjectsData";
import ProjectCard from "./ProjectCard";
import Container from "./Ui/Container";
const Projects = () => {
    return (
        <section id="projects" className="pt-20 bg-[#212428]">
            <Container>
            <div className="">
                <h1 className="text-4xl text-center font-semibold text-white">My Project</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-16">
                    {
                        ProjectData.map((project)=>(<ProjectCard key={project.id} project={project}></ProjectCard>))
                    }
                </div>
            </div>
        </Container>
        </section>
    );
};

export default Projects;