'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";

const projectData = [
    {
        id: 1,
        title: "React Portfolio Website",
        description: "You are viewing said website, showcasing mobile responsive site built with NextJs, React/ReactHooks, TailwindCSS, AI-Generated images, Custom stylings and fonts",
        image: "/images/projects/1.png",
        tag: ['All', "Web", "Mobile"],
        gitUrl:"https://github.com/daniel-mar/portfolio-website",
        previewUrl:"https://github.com/daniel-mar/portfolio-website/blob/main/README.md",
    },
    {
        id: 2,
        title: "Recipe Please",
        description: "Full Stack CRUD Login/Reg application to Create, Update, Delete your own recipes and Reading and liking others' recipes on the dashboard built with Python.",
        image: "/images/projects/2.png",
        tag: ["All", "Web", "Crud"],
        gitUrl:"https://github.com/daniel-mar/python-recipes",
        previewUrl:"https://github.com/daniel-mar/python-recipes/blob/main/README.md",
    },
    {
        id: 3,
        title: "Web Scraping web-app",
        description: "Automated scraping of sports site's data based off of json response. Targeted styling with Requests, BeautifulSoup(BS4) to collect data. Built Python Flask web server, cleaned the collected data, pushed to .CSV file and created a model to repurpose it on my front-end using Jinja2 and BootstrapJs.",
        image: "/images/projects/3.png",
        tag: ["All", "Web", "Scraper"],
        gitUrl:"https://github.com/daniel-mar/full_stack_scrape",
        previewUrl:"https://github.com/daniel-mar/full_stack_scrape/blob/main/README.md",
    },
    {
        id: 4,
        title: "MusicShare",
        description: "Full Stack app built with C# .NET MySQL BootStrapJs EFCore. Login/Registration, hashing pw and validatons. Users can post songs and like / dislike each other's posts via dynamic buttons.",
        image: "/images/projects/4.png",
        tag: ["All", "Web", "Crud"],
        gitUrl: "https://github.com/daniel-mar/musicShare",
        previewUrl: "https://github.com/daniel-mar/musicShare/blob/main/README.md",
    },
]

const ProjectSection = () => {

    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectData.filter((project)=> project?.tag?.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0},
        animate: { y: 0, opacity: 1},
    };

  return (
        <section id='projects'>
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
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="Scraper" 
                    isSelected={tag === "Scraper"}
                />
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="Crud" 
                    isSelected={tag === "Crud"}
                />
            </div>
            <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {
                    filteredProjects.map((project, index)=>
                    (
                    <motion.li 
                        key={index}
                        variants={cardVariants} 
                        initial="initial" 
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.2 }}
                    >
                            <ProjectCard 
                                key={project.id} 
                                title={project.title} 
                                description={project.description} imgUrl={project.image}
                                gitUrl={project.gitUrl}
                                previewUrl={project.previewUrl}
                                />
                    </motion.li>
                    ))
                }
            </ul>
        </section>
    );
};

export default ProjectSection;