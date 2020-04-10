import React from 'react';
import styles from './resume.modules.css';

import resume from '../static/resume.pdf'

export default function Resume () {

    // returns true if device view width is less than or equal to 768px
    let mobileViewWidth = window.matchMedia('(max-width: 768px)').matches;

    return (
        <div className={styles.content}>
            <object data={ mobileViewWidth ? resume + '?#zoom=50' : resume + '?#zoom=90'} className={styles['resume-pdf']}/>
        </div>
    )
}