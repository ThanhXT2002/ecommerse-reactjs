// Layout component
import React from 'react';
// import styles from '@styles/main.module.scss';
import styles from './Layout.module.scss';

function MainLayout({ children }) {

    const {wrapLayout, container} = styles;
    return (
        <main className={wrapLayout}>
            <div className={container}>
            {children}
            </div>
        </main>
    );
}

export default MainLayout;
