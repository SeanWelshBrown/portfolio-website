import React from 'react';
import styles from './contact.modules.css';

import self from '../static/self.JPG';

import twitterIcon from '../static/icons/twitter.png';
import linkedinIcon from '../static/icons/linkedin.png';
import githubIcon from '../static/icons/github.png';
import blogIcon from '../static/icons/blog.png';
import emailIcon from '../static/icons/email.png';
import phoneIcon from '../static/icons/phone.png';

export default function Contact (props) {

    return (
        <div className={styles.container}>
            <div className={styles['contact-card']}>
                <div className={styles.header}>
                    Summer Rain Rizzo
                </div>
                <div className={styles['contact-info-container']}>
                    <div className={styles['contact-info']}>
                        <img src={emailIcon} className={styles.icon} alt="e-mail icon"/>
                        srainrizzo@gmail.com
                    </div>

                    <div className={styles['contact-info']}>
                        <img src={phoneIcon} className={styles.icon} alt="phone icon"/>
                        979.450.4778
                    </div>

                    <div className={styles['contact-info']}>
                        <img src={blogIcon} className={styles.icon} alt="blog icon"/>
                        <a href="https://dev.to/Rizz0s" target="blank">blog</a>
                    </div>

                    <div className={styles['contact-info']}>
                        <img src={twitterIcon} className={styles.icon} alt="twitter icon"/>
                        <a href="https://twitter.com/_rizz0s" target="blank">twitter</a>
                    </div>
                    <div className={styles['contact-info']}>
                        <img src={linkedinIcon} className={styles.icon} alt="linked in icon"/>
                        <a href="www.linkedin.com/in/summerrizzo" target="blank">linkedin</a>
                    </div>
                    <div className={styles['contact-info']}>
                        <img src={githubIcon} className={styles.icon} alt="github icon"/>
                        <a href="https://github.com/Rizz0S" target="blank">github</a>
                    </div>
                </div>
            </div>
        </div>
    )

}