import React, {useState} from 'react';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import styles from './projects.modules.css';

import leftArrowIcon from '../static/icons/arrow-left.png';
import rightArrowIcon from '../static/icons/arrow-right.png';

import inHarmonyLogo from '../static/in-harmony-logo.png';
import fractalZoneLogo from '../static/fractal-zone-logo.png';
import multiVizLogo from '../static/multi-viz-logo.png';

import inHarmonyScreencap from '../static/in-harmony-screencap.png';
import fractalZoneScreencap from '../static/fractal-zone-screencap.png';
import multiVizScreencap from '../static/multi-viz-screencap.png';

const PROJECTS = [
    {
        name: "In Harmony",
        logo: inHarmonyLogo,
        subhead: "An accessibility forward color palette generator.",
        screencap: inHarmonyScreencap,
        repoLink: "https://github.com/Rizz0S/in-harmony-frontend",
        appLink: "https://www.inharmony.app/",
        description: `In Harmony is a tool to help web developers, designers, creators and whoever may need it create color palettes that are accessible to everyone. The generator can take in an uploaded image, analyze its color data, and produce a palette that represents the image. Individual swatches can also be edited by clicking on them and using the color picker tool. <br/> <br/>
        Contrast ratios are based on WCAG guidelines for text readability. Colorblindness vulernabilities are determined based on a custom method that evaluates hue, contrast, and color distance (based on hue). For color quantization, I'm using the median cut algorithim as a base on the RGB values of the image's pixels. From there, I extract a portion of the colors recieved from median cut to produce the final palette. <br/> <br/>
        I built In Harmony both to gain a better understanding of accessibility and engage with my interest in color theory and quantization.`
    },
    {
        name: "The Fractal Zone",
        logo: fractalZoneLogo,
        subhead: "An interactive fractal machine.",
        screencap: fractalZoneScreencap,
        repoLink: "https://github.com/Rizz0S/Everybody-Loves-Fractals-Frontend",
        appLink: "https://www.thefractal.zone/",
        description: `The Fractal Zone is a pair project I made with <a href="https://github.com/SeanWelshBrown" target="blank">Sean Brown</a> that houses a "Fractal Machine", which draws fractal trees to a canvas based on user parameters. Fractal design patterns can then be persisted to the gallery along with their parameters and a downloadable image. <br/> <br/>
        My primary role in the project was implementing the fractal machine. I'm using L-Systems to calculate the drawing instructions and subsequently draw them to the canvas using JavaScript's implementation of Processing, p5.js. I was also the author of the "About" page, which goes into further detail about how the fractals are drawn. <br/> </br>
        This project was sparked by my interest in the intersection of art and math. Though the two are seemingly opposed, over time I've found them to be 
        kindred disciplines. I hope The Fractal Zone can help lead others to the same conclusion!`
    },
    {
        name: "Multi-Viz",
        logo: multiVizLogo,
        subhead: "An audio visualizer that can handle multiple sound inputs concurrently.",
        screencap: multiVizScreencap,
        repoLink: "https://github.com/Rizz0S/multi-viz",
        appLink: " https://rizz0s.github.io/multi-viz",
        description: `At its core, the Multi-Viz an audio visualizer that uses frequency data derived from audio file input and displays it onto a canvas. Its uniqueness comes from its ability to aggregate the frequency data from multiple sound inputs at once. <br/> <br/>
        I first built the visualizer as a feature of a larger project written in vanilla JS (detailed on my <a href="https://dev.to/rizz0s/creating-an-audio-visualizer-that-can-handle-multiple-audio-sources-dynamically-all-in-vanilla-js-5hfl">blog</a>). The project centered around being able to create a layerable sound-scape, which inspired the need for handling more than one audio file at a time. Aside from React, the standalone version only uses the native Web Audio API and an HTML5 canvas. <br/> <br/>
        I was motivated to write the visualizer by my want to explore data visualization. Working with sound input for the first time was an added benefit. I decided to write this as a standalone app because I wanted to get a better handle on using the React framework (it was my first React project).
        `
    }
]

const Project = (props) => {
    const {name, subhead, logo, screencap, repoLink, appLink, description} = props.project;
    return(
        <>
            <h4 className={styles['project-name']}>
                <img src={logo} className={styles.logo} alt={name + ' logo'}/>
                {name}
            </h4>
            <p className={styles.subhead}>{subhead}</p>
            <div className={styles.links}>
                <a href={repoLink} target="blank">[Source Code]</a>
                <a href={appLink} target="blank">[Live App]</a>
            </div>
            <img src={screencap} className={styles.screencap} alt={name + 'screen capture example'}/>
            <p className={styles.description} dangerouslySetInnerHTML={{__html: description}}/>
        </>
    )
}

export default function Projects (props) {

    const [selectedProjectIdx, setSelectedProjectIdx] = useState(0);

    const handleArrowClick = (direction) => {
        const endIdx = PROJECTS.length - 1;
        if (direction === 'back') {
            selectedProjectIdx === 0 ? setSelectedProjectIdx(endIdx) : setSelectedProjectIdx(selectedProjectIdx - 1);
        } else {
            selectedProjectIdx === (endIdx) ? setSelectedProjectIdx(0) : setSelectedProjectIdx(selectedProjectIdx + 1); 
        }
    }
    return(
        <div className={styles['project-wrapper']}>
            <button onClick={() => handleArrowClick('back')} className={styles['nav-btn-previous']} ><img src={leftArrowIcon} className={styles['arrow-icon']} alt="previous project"/></button>
                <SwitchTransition>
                <CSSTransition
                in={true} appear={true} unmountOnExit={true} timeout={750}
                key={selectedProjectIdx}
                classNames={{
                    appear: styles['content-appear'],
                    appearActive: styles['content-appear-active'],
                    appearDone: styles['content-appear-active'],
                    enter: styles['content-enter'],
                    enterActive: styles['content-enter-active'],
                    enterDone: styles['content-enter-active'],
                    exit: styles['content-exit'],
                    exitActive: styles['content-exit-active'],
                    exitDone: styles['content-exit-active']
                    }}
                >
                    <div className={styles.content}>
                        <Project project={PROJECTS[selectedProjectIdx]}/>
                    </div>
                </CSSTransition>
                </SwitchTransition>
             <button onClick={() => handleArrowClick('forward')} className={styles['nav-btn-next']}><img src={rightArrowIcon} className={styles['arrow-icon']} alt="next project"/></button>
        </div>
    );
}