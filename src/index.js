import React from 'react';
import ReactDOM from 'react-dom';

import styles from './themes.modules.css';

import App from './app.jsx';

// Turns focus on for screen reader accessibility
document.addEventListener('keydown', (e) => {
	if (e.key === 'Tab') {
		document.body.classList.add(styles.keyboardAccessible);
	}
});

document.addEventListener('mousedown', () => {
	document.body.classList.remove(styles.keyboardAccessible);
});

ReactDOM.render(<App />, document.getElementById('root'));