import React from 'react'
import ProjectSlider from './ProjectSlider'
import ProjectCard from '../Projects/ProjectCard'
import AboutSection from '../../Pages/AboutSection'
import TechStackSecction from '../Home/TechStackSection'
import Contact from '../../Pages/Contact'

export default function Home() {
    return (
        <div>
            <ProjectSlider/>
            <ProjectCard />
            <TechStackSecction/>
            <AboutSection/>
            <Contact/>
        </div>
    )
}
