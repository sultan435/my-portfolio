import { useParams } from "react-router-dom";
import { ProjectData } from "../data/ProjectsData";
import Container from "./Ui/Container";
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";


const ProjectDetails = () => {

    const { id } = useParams();
    const singleProject = ProjectData.find(project => project.id === +id)
    return (
        <section className="bg-[#212428]  pt-40 pb-16 text-[#c4cfde]">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                        <div>
                            <ImageGallery items={singleProject.images} />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-2xl font-semibold text-[#ff014f]">{singleProject.name} <span className="text-xl font-medium text-white">({singleProject.subtitle})</span></h1>
                        <div>
                            <p className="text-2xl font-semibold text-[#ff014f]">Technology usages:</p>
                            <p>{singleProject.technology}</p>

                        </div>
                        <div>
                            <p className="text-2xl font-semibold text-[#ff014f]">Features:</p>
                            <p className="whitespace-pre-line">{singleProject.features}</p>

                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ProjectDetails;