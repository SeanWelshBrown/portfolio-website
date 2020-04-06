import React from 'react';
import styles from './tabs.modules.css';

export default function TabWindow (props) {

    const child = props.children;

    return(
        <div className={styles.tabWindow}>
            {child}
        </div>
    )
}