
import '@/app/components/footer/footer.css';
import { Col, Row } from 'antd';
import Logo from '../logo';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

export default async function Footer({ locale }: { locale: Locale }) {
 
  //const t: any = (await getMessages({ locale })).Footer;

  const dictionary = await getDictionary(locale);
        const t = dictionary["Footer"];

  return (
    <footer className='footerContainer z-50'>

      <Row gutter={[10, 30]}>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <h3>{t.Title}</h3>
          <p> {t.Desc}</p>

        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <div className='footerCols'>
            <h3><span className="highlight"> {t.About}</span></h3>
            <ul>
              <li><a href="/about-us">{t.about2}</a></li>
              <li><a href="/board-of-directors">{t.boardOfDirectors2}</a></li>
            </ul>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
        <div className='footerCols'>
          <h3><span className="highlight">{t.Other}</span></h3>
          <ul>
            <li><a href="/about-us">{t.Contact}</a></li>
          </ul>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
        <Logo/>
        <img className='golfLogoFooter' src="/Golf.png" alt="" />
        </Col>
      </Row>
      <p className='copyright'>{t.Copyrights}</p>
    </footer >
  );
}