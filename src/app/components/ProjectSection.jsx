'use client';
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectData = [
    {
        id: 1,
        title: "React Portfolio Website",
        description: "Showcase mobile responsive site built with NextJs, React/ReactHooks, TailwindCSS, AI-Generated images, Custom stylings and fonts",
        image: "/images/projects/1.jpg",
        tag: ['All', "Web", "Mobile"],
        gitUrl:"https://github.com/daniel-mar/portfolio-website",
        previewUrl:"/",
    },
    {
        id: 2,
        title: "Recipe Please",
        description: "Full Stack CRUD application to Create, Read, Update, Delete recipes built with Java Springboot, SQL",
        image: "/images/projects/2.jpg",
        tag: ["All", "Web"],
        gitUrl:"/",
        previewUrl:"/",
    },
    {
        id: 3,
        title: "Web Scraping web-app",
        description: "Automated scraping of sports site's data based off of json response. Targeted styling with Silenium, Pandas to collect data. Built Python Flask web server, cleaned the collected data, pushed to .CSV file and created a model to repurpose it on my front-end using Jinja2 and BootstrapJs.",
        image: "/images/projects/2.jpg",
        tag: ["All", "Web"],
        gitUrl:"/",
        previewUrl:"/",
    },
]

const ProjectSection = () => {

    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectData.filter((project)=> project?.tag?.includes(tag)
    );

  return (
        <>
            <h2 className='text-center text-4xl font-bold text-white mt-4'>
                My Projects
            </h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="All" 
                    isSelected={tag === "All"}
                />
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="Web" 
                    isSelected={tag === "Web"}
                />
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="Mobile" 
                    isSelected={tag === "Mobile"}
                />
            </div>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {
                    filteredProjects.map((project)=>
                    (
                    <ProjectCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description} imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                    />
                    ))
                }
            </div>
        </>
    )
}

export default ProjectSection;