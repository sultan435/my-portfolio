import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
    const [details, setDetails] = useState(false)
    const navigate = useNavigate()
    return (
        <div className="bg-[#212428] shadow-md border h-fit border-[#ff014f] p-4 rounded-lg text-[#c4cfde]">
            <img className="rounded-lg" src={project.img} alt="" />
            <h1 className="text-xl font-medium text-center pt-8">{project.name}</h1>
            {details && (
                <>
                    <div className="px-4 pt-4">
                        <p className="text-sm font-bold">Technology: {" "} <span className="text-xs font-normal">{project.technology}</span></p>
                        <p className="font-bold text-sm pt-2">Features:</p>
                        <p className="whitespace-pre-line font-semibold text-xs text-slate-500">
                            {project.features}
                        </p>
                    </div>
                    <div className="pt-4 flex items-center justify-center gap-4">
                       {project.liveSite && (
                         <a href={project.liveSite} target="_blank" className="px-2 py-1 bg-[#ff014f] text-white rounded-lg text-sm">Visit Site</a>
                       )}
                       {project.clientCode && (
                         <a href={project.clientCode} target="_blank" className="px-2 py-1 bg-[#ff014f] text-white rounded-lg text-sm">Client Site Code</a>
                       )}
                       {project.serverCode && (
                         <a href={project.serverCode} target="_blank" className="px-2 py-1 bg-[#ff014f] text-white rounded-lg text-sm">Server Site Code</a>
                       )}
                    </div>
                </>
            )}
            <div className="flex justify-center items-center gap-5 pt-3">
                <button
                    onClick={() => setDetails(!details)}
                    className={`bg-[#ff014f] text-white px-4 py-2 rounded-lg font-semibold ${details ? "bg-[#ff014f]" : "bg-[#ff014f]"}`}>{details ? "See Less" : "See More"}</button>
                <button onClick={()=>navigate(`project/${project.id}`)} className="bg-[#ff014f] text-white px-4 py-2 rounded-lg font-semibold">Details</button>
            </div>
        </div>
    );
};

export default ProjectCard;