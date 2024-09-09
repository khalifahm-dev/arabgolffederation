import React from "react";
import Link from "next/link";
import { Menu, MenuProps } from 'antd';

import styles from '@/app/components/header/header.module.css';
import '@/app/components/header/header.css';
import Logo from '../logo';
import logoImg from '@/public/Golf.png'
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

type HeaderContainerProps = {
  locale: string;
  children: React.ReactNode;
};

async function HeaderContainer({ locale,onClick ,menuIconToggle,style,current}: {locale:Locale , onClick:MenuProps['onClick'], menuIconToggle:() => void, style: {
  visibility: string;
},current:string}) {


  const dictionary = await getDictionary(locale);

  const t = dictionary["Header"];



  var menuItems: any[];
  menuItems = [];
  menuItems.push({ 'label': t.home, 'key': 'Home' });
  menuItems.push({ 'label': t.about, 'key': 'AboutUs' });
  menuItems.push({ 'label': t.boardOfDirectors, 'key': 'BoardofDirectors' });
  menuItems.push({ 'label': t.tournaments, 'key': 'Tournaments' });
  menuItems.push({ 'label': t.news, 'key': 'News' });
  menuItems.push({ 'label': t.contact, 'key': 'ContactUs' });

  
  return (
    <header className='header-section'>
      {/* desktop */}

      <div className='col p-4 mx-14'>

        <div className='flex'>
          <div className='row m-auto items-center justify-center'>
            <span className='partText'>
              {t.partnership}
            </span>
            <img className='golfLogo' src={logoImg.src} alt="" />
          </div>

          <div className='row'>
            <Link href="/en" className="text-2xl">English</Link>
            <div className="h-[17px] w-[2px] bg-white m-2"></div>
            <Link href="/ar" className="text-2xl">العربية</Link>
          </div>

        </div>
        <div className='hideTablet'>
          <div className={styles.mainHeader}>
            <Logo />
            <Menu className='m-auto w-11/12 bg-transparent' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={menuItems} />
          </div>
        </div>
        <div className='hideDesktop'>
          <div className={styles.mainHeader}>
            <Logo />
            <svg onClick={menuIconToggle} width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" /></svg>
          </div>

          <div style={style} className='fixed top-32 left-0 w-full h-full mainBackgroundColor	 z-30'>
            <Menu className='m-auto w-11/12 bg-transparent' onClick={onClick} selectedKeys={[current]} mode="vertical" items={menuItems} />

          </div>
        </div>

      </div>

    </header>
  );
}

export default HeaderContainer;