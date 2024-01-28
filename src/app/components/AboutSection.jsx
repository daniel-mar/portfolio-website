'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li><span className='border-b border-orange-400'>ReactJs,</span> ExpressJs, MongoDB, NodeJs</li>
                <li><span className='border-b border-orange-400'>Python,</span> Flask, SQL, Jinja</li>
                <li><span className='border-b border-orange-400'>C#,</span> ASP.NET, SQL, Entity framework core</li>
                <li><span className='border-b border-orange-400'>Java,</span> Spring boot, SQL</li>
            </ul>            
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>A.A.s in Information Technology</li>
                <li>Hackbright Academy SWE DevOps Boot Camp</li>
                <li>Coding Dojo SWE Boot Camp</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>Google: Professional Data Analytics with Coursera</li>
                <li>Department of Labor: Software Engineer Apprenticeship</li>
            </ul>
        )
    },
]

const AboutSection = () => {

    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

  return (
    <section className='text-white' id='about'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image className='mb-4' src="/images/about-computer.jpg" alt='cartoon-computer' width={300} height={300} />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-start'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                    I enjoy learning new things, it is like a superpower to continue growth as a person and a software engineer. 
                </p>
                <br />
                <p>
                    Most recent work experience with Actalent was contract work at Microsoft where I had the opportunity to work with TypeScript, React and FluentUI. While learning about KnockoutJs, Azure Resource Manager template and Azure Resource Graphs. 
                </p> 
                <br/>
                <p>
                    Where I worked with my team and mentors to translate Knockout components into React components, their APIs, and testing from Enzyme to React Testing Library. Creating User Stories with tasks and informed team on any bugs or blocks for the project and their feature flags.
                    </p>
                <br />
                <p>
                    While completing my A.A.S, I interned at a hedge fund working with the senior software engineer at Jana Partners LLC overviewing and updating propreitary software based in Java. Also translated documents for data analysis of incoming money managers.    
                </p> 

                <div className='flex flex-row mt-8'>
                    <TabButton 
                        selectTab={() => handleTabChange("skills")} 
                        active={tab === "skills"}>
                        {" "}
                        Skills{" "}
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange("education")} 
                        active={tab === "education"}>
                        {" "}
                        Education{" "}
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange("certifications")} 
                        active={tab === "certifications"}>
                        {" "}
                        Certifications{" "}
                    </TabButton>
                </div>
                <div className='mt-8'>
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  )
};

export default AboutSection;