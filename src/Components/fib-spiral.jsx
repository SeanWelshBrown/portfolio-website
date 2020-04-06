import React, {useRef} from 'react';
import styles from '../themes.modules.css';

export default function FibSpiral () {

    const path = useRef();

    return (
        <svg version="1.1"
            x="0px" y="0px" viewBox="-3 25 920 500" preserveAspectRatio="none"
            // style={{enableBackground: "new 0 0 915 580"}}
            className={styles['fib-spiral']}>
            <path id="path2782" className={styles.st0} d="M0,0"/>
            <path id="path1030" className={styles.st1} ref={path}  d="M682.5,383.4c-0.2-0.5-2-4.5-6.5-5.8c-3.5-1-7.1,0.1-9.3,2.2c-4,3.8-3.8,11.2-0.9,15.1
            c5.6,7.5,24.2,6.6,32.2-3c6.2-7.6,5.2-19.8,1.1-27.7c-12.2-24-64.8-34.2-98.7-12.4c-27.8,18-40.4,55.8-33.7,85.7
            c14.1,63,115.9,99.5,190.6,81.5c32.1-7.7,56.7-26.1,67.5-34.1c0,0,39.6-29.4,64-74.3c37-68,31-164.8-4.6-232.4
            C792.1,3.6,503,27,474.3,29.7c-136.7,13-229,75-246.7,87.2C29.3,254.3,5.4,488.7,2.2,526"/>
        </svg>
    )
}