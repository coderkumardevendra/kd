import axios from 'axios';
import { Fragment, useEffect, useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Image from 'next/image'
import Times from '/public/images/times.webp'
import Whatsapp from '/public/images/whatsapp.webp'
import Facebook from '/public/images/facebook.webp'
import Twitter from '/public/images/twitter.webp'
import Rss from '/public/images/rss.webp'


const Topbar = () => {
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [langs, setLangs] = useState();
    const [language, setLanguage] = useState();
    const langsFunction = async () => {
        try {
            const lid = localStorage.getItem('langid');
            const lsg = localStorage.getItem('langslug');
            if (!lid || !lsg) {
                localStorage.setItem('langid', 1);
                localStorage.setItem('langslug', 'english');
            }
            const response = await axios
                .get("https://dn.wcprojects.in/api/languages")
            setLangs(response.data.languages);
            setLanguage(localStorage.getItem('langid'))
        } catch (error) {
            setError('Error while loading data. Try again later.')
        } finally {
            setLoading(true);
        }
    }
    useEffect(() => {
        langsFunction();
    }, []);
    const langSwitch = (e) => {
        let id = e.target.id;
        let slug = e.target.innerText.toLowerCase();
        localStorage.setItem('langid', id);
        localStorage.setItem('langslug', slug);
        window.location = "/";
    }
    return (
        <>
            <div className="top-bar">
                <Container>
                    <Row>
                        <Col md={8}>
                            <ul className="top-nav ps-0">
                                {loading ? '' : <Fragment><li><button disabled><Spinner animation="border" size="sm" /></button></li><li><button disabled><Spinner animation="border" size="sm" /></button></li><li><button disabled><Spinner animation="border" size="sm" /></button></li></Fragment>}
                                {langs && langs.map((lang, i) => {
                                    return <li key={i}><button id={lang.id} onClick={langSwitch} className={language == lang.id ? "active" : "inactive"}>{lang.name}</button></li>
                                })}
                                {error ? <Fragment><li><button disabled><Image
                                    src={Times}
                                    alt="Daily News"
                                    layout="fixed"
                                    width={14}
                                    height={14}
                                /></button></li><li><button disabled><Image
                                    src={Times}
                                    alt="Daily News"
                                    layout="fixed"
                                    width={14}
                                    height={14}
                                /></button></li><li><button disabled><Image
                                    src={Times}
                                    alt="Daily News"
                                    layout="fixed"
                                    width={14}
                                    height={14}
                                /></button></li></Fragment> : ''}
                            </ul>
                        </Col>
                        <Col md={4} className="top-social d-flex justify-content-end">
                            <ul className="unstyled">
                                <li>
                                    <a title="Facebook" href="https://facebook.com" rel="noreferrer" target="_blank">
                                        <span className="social-icon">
                                            <Image
                                                src={Whatsapp}
                                                alt="Daily News"
                                                layout="fixed"
                                                width={12}
                                                height={12}
                                            />
                                        </span>
                                    </a>
                                    <a title="Skype" href="https://facebook.com" rel="noreferrer" target="_blank">
                                        <span className="social-icon">
                                            <Image
                                                src={Facebook}
                                                alt="Daily News"
                                                layout="fixed"
                                                width={12}
                                                height={12}
                                            />
                                        </span>
                                    </a>

                                    <a title="Twitter" href="https://twitter.com" rel="noreferrer" target="_blank">
                                        <span className="social-icon">
                                            <Image
                                                src={Twitter}
                                                alt="Daily News"
                                                layout="fixed"
                                                width={12}
                                                height={12}
                                            />
                                        </span>
                                    </a>
                                    <a title="Linkdin" href="https://facebook.com" rel="noreferrer" target="_blank">
                                        <span className="social-icon">
                                            <Image
                                                src={Rss}
                                                alt="Daily News"
                                                layout="fixed"
                                                width={12}
                                                height={12}
                                            />
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Topbar
