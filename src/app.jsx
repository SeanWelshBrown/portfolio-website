import React, {useState} from 'react';
import styles from './themes.modules.css';

import FibSpiral from './Components/fib-spiral';

import TabWindow from './Components/tab-window';
import TabContainer from './Components/tab-container';

import AboutMe from './Components/about-me';
import Projects from './Components/projects';
import Resume from './Components/resume';
import Contact from './Components/contact';

const TABS = {
    aboutMe: <AboutMe />,
    projects: <Projects />,
    resume: <Resume />,
    contact: <Contact />
}

export default function App () {

   const [selectedTab, setSelectedTab] = useState("aboutMe");


    return(
        <div className={styles.app}>
            <TabWindow>
                {TABS[selectedTab]}
            </TabWindow>
            <TabContainer setSelectedTab={setSelectedTab}/>
            <FibSpiral />
        </div>
    )
}