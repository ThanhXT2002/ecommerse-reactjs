// Layout component
import React from 'react';
import styles from '@styles/main.module.scss';

function MainLayout({ children }) {
    return (
        <div className={styles.layout}>
            {children}
        </div>
    );
}

export default MainLayout;
