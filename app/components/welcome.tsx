import '@/app/components/welcome.css';
import { Col, Row } from 'antd';
import imgMain from '@/public/welcome.webp'
import { getMessages } from "next-intl/server";

export default async function HomeWelcome( {locale}:{locale:string}) {
       const t: any = (await getMessages({ locale })).WelcomeHomePage;

        return (
                <div className='absolute'>
                         {/* <div className='h-[125px]'></div> */}
                        <Row className='pd-h-115 pt-6' gutter={[16, 48]}>
                                <Col className='relative' xs={24} sm={24} md={24} lg={11} xl={11} >
                                         <h1>{t.Title}</h1>
                                        <span className='welcome'>{t.SubTitle}</span>
                                        <p className='welcomeDesc'>{t.Desc}</p>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={13} xl={13}  >
                                        <img className='intoImg' src={imgMain.src} alt="" />
                                </Col>
                        </Row>
                </div >
        );

}