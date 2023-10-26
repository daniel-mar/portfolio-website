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
                <li><span className='border-b border-orange-400'>ReactJs,</span> ExpressJs MongoDB NodeJs</li>
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
                <li>Coding Dojo</li>
                <li>Hackbright Academy</li>
                <li>A.A.s in Information Technology</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>Google Professional Data Analytics</li>
                <li>DOL Apprenticeship at Microsoft</li>
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
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image className='mb-4' src="/images/about-computer.jpg" alt='cartoon-computer' width={300} height={300} />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-start'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                    I enjoy learning new things and have grasped onto that ideal as I career change as a software engineer. I believe my frontend is stronger than my backend, which is why a backend role is a need for me.
                </p>
                <br />
                <p>
                    Check out my social media to connect and continue below to learn more about my background and view my projects on Github.
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
}

export default AboutSection