import React, {useState} from 'react';
import styles from './projects.modules.css';

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
        Contrast ratios are based on WCAG guidelines for text readability. Color blindness vulernabilities are determined based on a custom method that evaluates hue, contrast, and color distance (based on hue). For color quantization, I'm using the median cut algorithim as a base on the RGB values of the image's pixels. From there, I extract a portion of the colors recieved from median cut to produce the final palette. <br/> <br/>
        I built In Harmony both to gain a better understanding of accessibility and engage with my interest in color theory and quantization.`
    },
    {
        name: "The Fractal Zone",
        logo: fractalZoneLogo,
        subhead: "An interactive fractal machine.",
        screencap: fractalZoneScreencap,
        repoLink: "https://github.com/Rizz0S/Everybody-Loves-Fractals-Frontend",
        appLink: "https://www.thefractal.zone/",
        description: ""
    },
    {
        name: "Multi-Viz",
        logo: multiVizLogo,
        subhead: "An audio visualizer that can handle multiple sound inputs concurrently.",
        screencap: multiVizScreencap,
        repoLink: "https://github.com/Rizz0S/multi-viz",
        appLink: " https://rizz0s.github.io/multi-viz",
        description: ""
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
        <>
            {/* <h1 className={styles.header}>Projects</h1> */}
            <div className={styles['project-wrapper']}>
                <button onClick={() => handleArrowClick('back')}><i className="material-icons-outlined">navigate_before</i></button>
                <div className={styles.content}>
                    <Project project={PROJECTS[selectedProjectIdx]}/>
                </div>
                <button onClick={() => handleArrowClick('forward')}><i className="material-icons-outlined">navigate_next</i></button>
            </div>
        </>
    )
}