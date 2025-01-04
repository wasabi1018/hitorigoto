import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="l-footer">
            <nav>
                <Link href='/faq' className='l-footer--link'>利用規約</Link>
                <Link href='/faq' className='l-footer--link'>FAQ</Link>
                <Link href='/faq' className='l-footer--link'>ガイドライン</Link>
                <Link href='/faq' className='l-footer--link'>お問い合わせ</Link>
                <Link href='https://twitter.com/mark_wsb10' className='l-footer--link'>公式X</Link>
            </nav>
            <small>
                開発・運営 <a href="https://twitter.com/mark_wsb10">@mark_wsb10</a> Copyright ©2025 All rights reserved.
            </small>
        </footer>
    );
};

export default Footer;