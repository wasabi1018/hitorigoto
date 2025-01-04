"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { HiMiniBars3 } from 'react-icons/hi2';
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoMdMail } from "react-icons/io";

/**
 * メニュー
 * @returns メニュー ブロック
 */
const Menu = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function changeIsMenuOpen() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className='u-content-center'>
            <HiMiniBars3 size={30} color={'#006fb4'} onClick={changeIsMenuOpen} />
            <div className={`c-humburger ${isMenuOpen ? 'c-humburger--open' : ''}`} onClick={changeIsMenuOpen}>
                <ul>
                    <li><IoMdHelpCircleOutline size={20} color={'#006fb4'} /><Link href="/faq">FAQ</Link></li>
                    <li><IoMdMail size={20} color={'#006fb4'} /><Link href="/faq">お問い合わせ</Link></li>
                </ul>
            </div>
        </div> 
    );
};

export default Menu;