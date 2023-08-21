import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { Container } from "react-bootstrap";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Leetcode from "./Leetcode";
import Github from "./Github";

const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });
    return (
        <>
            <div className="container skills-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Skills".split("")}
                        idx={15}
                    />
                </h1>
                <div>
                    <Container fluid className="about-section">
                        <h2 className="project-heading">
                            Professional <strong className="yellow">Skillset </strong>
                        </h2>
                        <Techstack />

                        <h2 className="project-heading">
                            <strong className="yellow">Tools</strong> I use
                        </h2>
                        <Toolstack />

                        <Leetcode />
                        <Github />
                    </Container>
                </div>

                
            </div>
            <Loader type="pacman" />
        </>

    )
}

export default Skills