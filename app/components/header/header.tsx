'use client';
import React, { useEffect, useState } from 'react';
import type { MenuProps, TabsProps } from 'antd';
import HeaderContainer from "./HeaderContainer";


export default function Header({ locale }: { locale: string }) {
    const [current, setCurrent] = useState('mail');
    const [menu, setMenu] = useState({ isHidden: true });

    // Sticky Menu Area
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });


    const isSticky = () => {
        const header = document.querySelector('.header-section');
        const scrollTop = window.scrollY;
        scrollTop >= 1 ? header?.classList.add('sticky') : header?.classList.remove('sticky');
    };

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };


    const menuIconToggle = () => {
        console.log("menu icon Toggle")
        setMenu({ isHidden: !menu.isHidden });
    }

    const style = { visibility: menu.isHidden ? 'hidden' : 'visible' };


   




    // const handleLanguageChange = (newLanguage: string) => {
    //     // 👇 Effectuate the language change
    //     console.log(newLanguage)
    //     i18n.changeLanguage(newLanguage)
    //     document.dir = newLanguage=='ar' ? "rtl" : "ltr"
    //    // useWtxI18n()
    //   }






    return (
        <div className='header-section'>
            <HeaderContainer locale={locale}  onClick = {onClick} menuIconToggle = {menuIconToggle} style ={style} current={current}/>
        </div>

    );
}