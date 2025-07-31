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
    {
        id: 5,
        title: "BOOKIES",
        description: "Backend app using JavaScript, Sequelize (local db) with seeding for book/user data. This project began with my creating the backend, db and seeding functionality, as well as start unit testing. After adding the foundation of the project, tasks for divided amongst the team and I helped pair programming with the team. Practicing with Github for their Task boards.",
        image: "/images/projects/5.png",
        tag: ["All", "Web", "Crud"],
        gitUrl: "https://github.com/RLD-TEAM/RLD-bookies",
        previewUrl: "https://github.com/RLD-TEAM/RLD-bookies/blob/main/README.md",
    },
    {
        id: 6,
        title: "Inventree",
        description: "Full Stack app built in React with bootstrap for front-end, Sequelize (local db) with seed inventory data to render on list components. Focused on the funko-pop fad, the team wanted to create a shopping center just for our product to specialize in. Creating the wireframes, repository and contents of the project together.",
        image: "/images/projects/6.png",
        tag: ["All", "Web", "Crud"],
        gitUrl: "https://github.com/team3-connect/inventree",
        previewUrl: "https://github.com/team3-connect/inventree/blob/main/README.md",
    },
    {
        id: 7,
        title: "Disney API",
        description: "Full Stack app built in Angular & Material UI for front-end, rendering API data on list components. Worked with Justin Berg using a tech stack but it was a learning experience and I enjoyed our time working on front-end together.",
        image: "/images/projects/7.png",
        tag: ["All", "Web", "Crud"],
        gitUrl: "https://github.com/justin-daniel-api/disney-api",
        previewUrl: "https://github.com/justin-daniel-api/disney-api/blob/main/README.md",
    },
    {
        id: 8,
        title: "Coffee Bean Dream",
        description: "Full Stack app built by Justin Berg in Angular, Sequelize, Cors, JS. I assisted in the migration to Docker, swapping to MySQL and updating file configurations to be able to view locally and deploy with Docker. Assured that the container images are up and ready prior to automating connectivity and seeding the database. Added Github actions for CI/CD pipeline coverage to add Unit Testing coverage.",
        image: "/images/projects/8.png",
        tag: ["All", "Web", "Crud"],
        gitUrl: "https://github.com/justinberg97/coffee-bean-dream",
        previewUrl: "https://github.com/justinberg97/coffee-bean-dream/blob/main/README.md",
    },
    {
        id: 9,
        title: "Daily Yee",
        description: "Angular, Local storage & Mock Data. This was one of my first projects done using Angular. Where I was started to learn Angular 19 signals and HTTP.",
        image: "/images/projects/9.png",
        tag: ["All", "Web", "Crud"],
        gitUrl: "https://github.com/DannyPaiz/angular-app",
        previewUrl: "https://github.com/DannyPaiz/angular-app/blob/main/README.md",
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