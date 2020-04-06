import React from 'react';
import styles from './tabs.modules.css'

import aboutMeIcon from '../static/icons/about-me.png';
import projectIcon from '../static/icons/project.png';
import resumeIcon from '../static/icons/resume.png';
import contactIcon from '../static/icons/contact.png';


const TAB_INFO = {
    aboutMe: {
        icon: aboutMeIcon,
        title: 'about me'
    },
    projects: {
        icon: projectIcon,
        title: 'projects'
    },
    resume: {
        icon: resumeIcon,
        title: 'resume'
    },
    contact: {
        icon: contactIcon,
        title: 'contact'
    }
}

const Tab =  ({tabName, onClick}) => {

    return(
        <div className={[styles[tabName], styles.tab].join(' ')} onClick={onClick}>
            <img src={TAB_INFO[tabName].icon} className={styles.icon}/>
            {TAB_INFO[tabName].title}
        </div>
    )
}

export default function TabContainer ({setSelectedTab}) {

    return(
        <>
            <Tab tabName={'aboutMe'} onClick={() => setSelectedTab('aboutMe')} />
            <Tab tabName={'projects'} onClick={() => setSelectedTab('projects')}  />
            <Tab tabName={'resume'} onClick={() => setSelectedTab('resume')} />
            <Tab tabName={'contact'} onClick={() => setSelectedTab('contact')} />
        </>
    )
}