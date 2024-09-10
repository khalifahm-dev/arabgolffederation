
import '@/app/components/welcome.css';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import { Col, Row } from 'antd';
import { getMessages } from "next-intl/server";

export default async function HomeGetInTouch( {locale}:{locale:Locale}) {
      //  const t: any = (await getMessages({ locale })).GetInTouch;

      const dictionary = await getDictionary(locale);
      const t = dictionary["GetInTouch"];
        return (

                <div className='getInTouchContainter'>
                        <div className='getInTouchSubContainter'>
                                <Row className='' gutter={[36, 0]}>

                                        <Col className='relative' xs={24} sm={24} md={24} lg={20} xl={20} >
                                                <h2>{t.Title}</h2>
                                                <p className='aboutDesc'>
                                                {t.SubTitle}
                                                </p>

                                        </Col>
                                        <Col className='flex justify-center items-center' xs={24} sm={24} md={24} lg={4} xl={4}>
                                                <div><a className='button' href="">{t.Button}</a></div>
                                        </Col>
                                </Row>
                        </div>
                </div >
        );

}