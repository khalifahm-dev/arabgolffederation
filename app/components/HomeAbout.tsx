import '@/app/components/welcome.css';
import { Col, Row } from 'antd';
import { getMessages } from "next-intl/server";
import imgMain from '@/public/homeabout.webp'


export default async function HomeAbout({locale}:{locale:string}) {
        const t: any = (await getMessages({ locale })).AboutHomePage;

        return (
                        <div className="homeAboutContainer ">
                                <div className='pd-h-115'>
                                        <div className='h-220'></div>
                                        <Row className='pd-v-32 z-10' gutter={[48, 32]}>
                                                <Col xs={24} sm={24} md={24} lg={11} xl={13}  >
                                                        <img   src={imgMain.src} alt="" />
                                                </Col>
                                                <Col className='relative' xs={24} sm={24} md={24} lg={11} xl={11} >
                                                        <h2>{t.Title}</h2>
                                                        <span className='about'>{t.aboutSubTitle}</span>
                                                        <p className='aboutDesc'> {t.Desc} </p>

                                                        <div><a className='button' href="">{t.Button}</a></div>

                                                </Col>

                                        </Row>


                                </div>
                        </div>

        );

}