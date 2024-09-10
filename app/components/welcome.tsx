import '@/app/components/welcome.css';
import { Col, Row } from 'antd';
import imgMain from '@/public/welcome.webp'
import { getMessages } from "next-intl/server";
import Image from 'next/image'
import AppImage from './AppImage';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

export default async function HomeWelcome( {locale}:{locale:Locale}) {

        const dictionary = await getDictionary(locale);
        const t = dictionary["WelcomeHomePage"];

      // const t: any = (await getMessages({ locale })).WelcomeHomePage;
       
        return (
                <div>
                         {/* <div className='h-[125px]'></div> */}
                        <Row className='pd-h-115 pt-6'>
                                <Col className='relative' xs={24} sm={24} md={24} lg={11} xl={11} >
                                         <h1>{t.Title}</h1>
                                        <span className='welcome'>{t.SubTitle}</span>
                                        <p className='welcomeDesc'>{t.Desc}</p>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={13} xl={13}  >
                                        <AppImage  />
                                </Col>
                        </Row>
                </div >
        );

}