import React from 'react';
import styles from './about-me.modules.css';

import self from '../static/self.JPG';

export default function AboutMe (props) {
    return(
        <div className={styles.container}>
            <h1 className={styles.header}>Hello!</h1>
            <h2 className={styles.subhead}>My name is Summer Rain Rizzo.</h2>
            <img src={self} className={styles['self-img']} alt="a picture of myself that is totally not a selfie"></img>
            <div className={styles.content}>
            <p>I've always had an affinity for creativity. Seeing the visions that float around my mind come to life is pure magic. I've worn the hat of a filmmaker, photographer, radio DJ, barista and most recently, a developer. Although the context & execution varies, my drive for each of them comes from the same place in my heart - to make things that make a difference. <span className={styles.noMatter}>(no matter how small)</span> </p>
            <p>I'm a firm advocate of diversity, inclusion, and accessibility. A few other interests of mine include listening to music, film photography, making various things from scratch, eating apples, and enthusing about my interests.  And, if I know and like you well enough, I'm known to mix a pretty good cocktail.</p>
            <p>I'll leave the rest of getting to know me to you.</p>
            <p>♡</p>
            </div>
        </div>
    )
}