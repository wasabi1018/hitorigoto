import React from 'react';
import Menu from './menu';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="l-header">
            <h1><Link href='/'>ヒトリゴト</Link></h1>
            <Menu />
        </header>
    );
};

export default Header;