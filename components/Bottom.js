import axios from 'axios';;
import { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Home from '/public/images/home.webp';
import Search from '/public/images/search.webp';

export default function Bottombar() {
    const router = useRouter()
    const [error, setError] = useState();
    const [menus, setMenus] = useState();
    const [loading, setLoading] = useState(false);
    const [scroll, setScroll] = useState("main_nav_area clearfix");
    const [language, setLanguage] = useState();

    const menusFunction = async () => {
        try {
            const lsg = localStorage.getItem('langslug');
            const response = await axios
                .get("https://dn.wcprojects.in/api/" + lsg + "/categories")
            setMenus(response.data.categories);
            setLanguage(lsg)

        } catch (error) {
            setError('Error while loading data. Try again later.')
        } finally {
            setLoading(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll());
        menusFunction();
    }, []);

    function onScroll() {
        if (window.scrollY > 100) {
            setScroll({ navBarfixed: "main_nav_area clearfix sticky sticky fade_down_effect" })
        } else if (window.scrollY < 100) {
            setScroll({ navBarfixed: "main_nav_area clearfix" })
        }
    }

    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
      }



    return (
        <>
            <div className="main_nav_area clearfix">
                <Container>
                    <Row>
                        <Navbar bg="light" expand="lg" sticky="top">
                            <Container>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <ul className="nav navbar-nav">
                                            <li className="nav-item categories">
                                                <Link href="/">
                                                    <a className={
                                                        router.pathname === '/' ? 'nav-link active' : 'nav-link inactive'}>
                                                        <Image
                                                            src={Home}
                                                            alt="Daily News"
                                                            layout="fixed"
                                                            width={14}
                                                            height={14}
                                                        />
                                                    </a>
                                                </Link>
                                            </li>
                                            {menus && menus.map((menu, i) => (
                                                <li key={i} className="nav-item categories"><Link className={
                                                    router.pathname === `/category/${menu.slug}` ? 'nav-link active' : 'nav-link inactive'} href={`/category/${menu.slug}`}><a>{menu.name}</a></Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </Nav>
                                    <div className="nav_search">
                                        <span id="search">
                                            <Image
                                                src={Search}
                                                alt="Daily News"
                                                layout="fixed"
                                                width={12}
                                                height={12}
                                            />
                                        </span>
                                    </div>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </Row>
                </Container>
            </div>
        </>
    )

}


