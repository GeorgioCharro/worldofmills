
import React, { useRef } from 'react';
import Header from './Header';

function Layout({ children }) {
    const searchClickHandlerRef = useRef(null);

    return (
        <>
            <Header onSearchClick={(handler) => (searchClickHandlerRef.current = handler)} />
            <main>{children}</main>
        </>
    );
}

export default Layout;
