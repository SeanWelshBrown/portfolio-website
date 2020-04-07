import React, {useState} from 'react';
import { SwitchTransition,  CSSTransition } from 'react-transition-group';
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
                <SwitchTransition>
                
                <CSSTransition
                    key={selectedTab}
                    in={true} appear={true} timeout={750}
                    classNames={{
                        appear: styles['content-appear'],
                        appearActive: styles['content-appear-active'],
                        appearDone: styles['content-appear-active'],
                        enter: styles['content-enter'],
                        enterActive: styles['content-enter-active'],
                        enterDone: styles['content-exit'],
                        exit: styles['content-exit'],
                        exitActive: styles['content-exit-active'],
                        exitDone: styles['content-enter']
                        }}
                    >
                        {TABS[selectedTab]}
                    </CSSTransition>
                </SwitchTransition>
            </TabWindow>
            <TabContainer setSelectedTab={setSelectedTab}/>
            <FibSpiral />
        </div>
    )
}