import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import { Carousel, Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import Clock from '/public/images/clock.webp'
import moment from 'moment';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderUrl = `https://dn.wcprojects.in/api/1/slider`;
const latestUrl = `https://dn.wcprojects.in/api/1/latest/latest-news`;
const politicsUrl = `https://dn.wcprojects.in/api/1/politics/politics`;
const puneUrl = `https://dn.wcprojects.in/api/1/pune/pune`;
const editorUrl = `https://dn.wcprojects.in/api/1/editorpick`;
const crimeUrl = `https://dn.wcprojects.in/api/1/crime/crime`;
const impUrl = `https://dn.wcprojects.in/api/1/imp/important-news`;
const entUrl = `https://dn.wcprojects.in/api/1/entertainment/entertainment`;
const healthUrl = `https://dn.wcprojects.in/api/1/health/health`;

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  swipe: false,
  autoplay: true,
  arrows: true,
  initialSlide: 0,
  className: "list_post",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const entsettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipe: false,
  autoplay: true,
  arrows: true,
  initialSlide: 0,
  className: "post_slide",
};

export default function Home({ sliders, latest, politics, pune, editor, crime, imp, ent, health, }) {
  return (
    <>
      <Head>
        <title>Daily News | Get Latest news in pune and maharashtra</title>
        <meta property="og:title" content="Daily News | Get Latest news in pune and maharashtra" />
        <meta name="twitter:title" content="Daily News | Get Latest news in pune and maharashtra" />
        <meta name="description" content="policenama | pune-pimpri news, pune-pimpri chinchwad crime news, crime branch police, municipal corporation, anti corruption, inspector" />
        <meta property="og:description" content="policenama | pune-pimpri news, pune-pimpri chinchwad crime news, crime branch police, municipal corporation, anti corruption, inspector" />
        <meta name="twitter:description" content="policenama | pune-pimpri news, pune-pimpri chinchwad crime news, crime branch police, municipal corporation, anti corruption, inspector" />
        <meta property="og:url" content="https://nitinpatil.vercel.app" />
        <meta property="og:image" content="https://dn.wcprojects.in/media/logo.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="https://dn.wcprojects.in/media/logo.webp" />
        <meta property="og:locale" content="en" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Daily News" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@policenama1" />
        <link sizes="16x16" type="image/png" rel="icon" href="https://dn.wcprojects.in/media/fav-16.webp" />
        <link sizes="32x32" type="image/png" rel="icon" href="https://dn.wcprojects.in/media/fav-32.webp" />
        <link sizes="96x96" type="image/png" rel="icon" href="https://dn.wcprojects.in/media/fav-96.webp" />
        <link sizes="192x192" type="image/png" rel="icon" href="https://dn.wcprojects.in/media/fav-192.webp" />
      </Head>
      {/* Slider */}
      <section className="featured_post_area pt-4">
        <div className="container">
          <div className="row">
            <Col lg={8} md={12} className="pad-r">
              <Carousel indicators={false} interval={4000} className="header-carousel owl-carousel owl-theme featured_slider content-bottom owl-loaded owl-drag">
                {sliders.slider.map((slide, i) => {
                  return <Carousel.Item key={i}>
                    <Image
                      src={'https:' + slide.img_1}
                      alt={slide.title}
                      title={slide.title}
                      layout="responsive"
                      width={850}
                      height={460}
                    />
                    <Carousel.Caption>
                      <p><Link href={'/category/' + slide.category.slug}><a className="post_cat">{slide.category.name}</a></Link></p>
                      <h2 className="post_title title-extra-large"><Link href={'/' + slide.slug}>{slide.title}</Link></h2>
                      <div className="post_meta">
                        <span className="post_date">
                          <span className="icon">
                            <Image
                              src={Clock}
                              alt="Daily News"
                              layout="fixed"
                              width={13}
                              height={13}
                            />
                          </span>
                          {moment(slide.created_at).format('LL')}</span>
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>
                })}
              </Carousel>
            </Col>
            <Col lg={4} md={12} className="pad-l">
              <Row>
                {sliders.twoPosts.map((post, i) => (
                  <Col md={12} key={i}>
                    <div className="post_overaly_style text-center first clearfix">
                      <div className="post_thumb">
                        <a href="#link">
                          <Image
                            src={'https:' + post.img_1}
                            alt={post.title}
                            title={post.title}
                            layout="responsive"
                            width={366}
                            height={260}
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcWQ8AAdcBKrJda2oAAAAASUVORK5CYII="
                          />
                        </a>
                      </div>
                      <div className="post_content">
                        <Link className="post_cat" href={'/category/' + post.category.slug}><a className="post_cat">{post.category.name}</a></Link>
                        <h2 className="post_title title-medium"><Link href={`[slug]`} as={`/${post.slug}`}>{post.title}</Link></h2>
                        <div className="post_meta">
                          <span className="post_date">
                            <span className="icon">
                              <Image
                                src={Clock}
                                alt="Daily News"
                                layout="fixed"
                                width={13}
                                height={13}
                              />
                            </span> {moment(post.created_at).format('LL')}</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </div>
        </div>
      </section>
      {/* Latest , Political and Pune */}
      <section className="block_wrapper p-top-0 p-bottom-0">
        <Container>
          <Row>
            <Col lg={4} className="mt-30">
              <div className="block color-default">
                <h3 className="block_title"><span>{latest.category.name}</span></h3>
                <div className="post_overaly_style clearfix">
                  <div className="post_thumb">
                    <a href="#link">
                      <Image
                        src={'https:' + latest.posts[0].img_4}
                        alt={latest.posts[0].title}
                        title={latest.posts[0].title}
                        layout="responsive"
                        width={360}
                        height={240}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcWQ8AAdcBKrJda2oAAAAASUVORK5CYII="

                      />
                    </a>
                  </div>
                  <div className="post_content">
                    <h2 className="post_title"><Link href={'/' + latest.posts[0].slug}><a>{latest.posts[0].title}</a></Link></h2>
                    <div className="post_meta">
                      <span className="post_date">
                        <span className="icon">
                          <Image
                            src={Clock}
                            alt="Daily News"
                            layout="fixed"
                            width={13}
                            height={13}
                          />
                        </span> {moment(latest.posts[0].created_at).format('LL')}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="list_post_block">
                  <ul className="list_post">
                    {latest.posts.slice(1).map((post, i) => (
                      <li className="clearfix" key={i}>
                        <div className="post_block_style post-float clearfix">
                          <div className="post_thumb">
                            <Image
                              src={'https:' + post.img_4}
                              alt={post.title}
                              title={post.title}
                              layout="responsive"
                              width={100}
                              height={75}
                              placeholder="blur"
                              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcWQ8AAdcBKrJda2oAAAAASUVORK5CYII="
                            />
                          </div>
                          <div className="post_content">
                            <h2 className="post_title  title-small">
                              <Link href={'/' + post.slug}>
                                <a >
                                  <span className="clamped">{post.title}</span>
                                </a>
                              </Link>
                              <span className="post_date">
                                <span className="icon">
                                  <Image
                                    src={Clock}
                                    alt="Daily News"
                                    layout="fixed"
                                    width={13}
                                    height={13}
                                  />
                                </span> {moment(post.created_at).format('LL')}
                              </span>
                            </h2>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>

            <Col lg={4} className="mt-30">
              <div className="block color-default">
                <h3 className="block_title"><span>{politics.category.name}</span></h3>
                <div className="post_overaly_style clearfix">
                  <div className="post_thumb">
                    <a href="#link">
                      <Image
                        src={'https:' + politics.posts[0].img_4}
                        alt={politics.posts[0].title}
                        title={politics.posts[0].title}
                        layout="responsive"
                        width={360}
                        height={240}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcWQ8AAdcBKrJda2oAAAAASUVORK5CYII="
                      />
                    </a>
                  </div>
                  <div className="post_content">
                    <h2 className="post_title"><Link href={'/' + politics.posts[0].slug}><a>{politics.posts[0].title}</a></Link></h2>
                    <div className="post_meta">
                      <span className="post_date">
                        <span className="icon">
                          <Image
                            src={Clock}
                            alt="Daily News"
                            layout="fixed"
                            width={13}
                            height={13}
                          />
                        </span> {moment(politics.posts[0].created_at).format('LL')}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="list_post_block">
                  <ul className="list_post">
                    {politics.posts.slice(1).map((post, i) => (
                      <li className="clearfix" key={i}>
                        <div className="post_block_style post-float clearfix">
                          <div className="post_thumb">
                            <Image
                              src={'https:' + post.img_4}
                              alt={post.title}
                              title={post.title}
                              layout="responsive"
                              width={100}
                              height={75}
                              placeholder="blur"
                              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcWQ8AAdcBKrJda2oAAAAASUVORK5CYII="
                            />
                          </div>
                          <div className="post_content">
                            <h2 className="post_title  title-small">
                              <Link href={'/' + post.slug}>
                                <a>
                                  <span className="clamped">{post.title}</span>
                                </a>
                              </Link>
                              <span className="post_date">
                                <span className="icon">
                                  <Image
                                    src={Clock}
                                    alt="Daily News"
                                    layout="fixed"
                                    width={13}
                                    height={13}
                                  />
                                </span> {moment(post.created_at).format('LL')}
                              </span>
                            </h2>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>

            <Col lg={4} className="mt-30">
              <div className="block color-default">
                <h3 className="block_title"><span>{pune.city.name}</span></h3>
                <div className="post_overaly_style clearfix">
                  <div className="post_thumb">
                    <Image
                      src={'https:' + pune.posts[0].img_4}
                      alt={pune.posts[0].title}
                      title={pune.posts[0].title}
                      layout="responsive"
                      width={360}
                      height={240}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcWQ8AAdcBKrJda2oAAAAASUVORK5CYII="
                    />
                  </div>
                  <div className="post_content">
                    <h2 className="post_title"><Link href={'/' + pune.posts[0].slug}><a>{pune.posts[0].title}</a></Link></h2>
                    <div className="post_meta">
                      <span className="post_date">
                        <span className="icon">
                          <Image
                            src={Clock}
                            alt="Daily News"
                            layout="fixed"
                            width={13}
                            height={13}
                          />
                        </span> {moment(pune.posts[0].created_at).format('LL')}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="list_post_block">
                  <ul className="list_post">
                    {pune.posts.slice(1).map((post, i) => (
                      <li className="clearfix" key={i}>
                        <div className="post_block_style post-float clearfix">
                          <div className="post_thumb">
                            <Image
                              src={'https:' + post.img_4}
                              alt={post.title}
                              title={post.title}
                              layout="responsive"
                              width={100}
                              height={75}
                              placeholder="blur"
                              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcWQ8AAdcBKrJda2oAAAAASUVORK5CYII="
                            />
                          </div>
                          <div className="post_content">
                            <h2 className="post_title  title-small">
                              <Link href={'/' + post.slug}>
                                <a>
                                  <span className="clamped">{post.title}</span>
                                </a>
                              </Link>
                              <span className="post_date">
                                <span className="icon">
                                  <Image
                                    src={Clock}
                                    alt="Daily News"
                                    layout="fixed"
                                    width={13}
                                    height={13}
                                  />
                                </span> {moment(post.created_at).format('LL')}
                              </span>
                            </h2>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Editors Pick */}
      <section className="latest_new_area pb-bottom-20">
        <Container>
          <div className="latest_news block color-red">
            <div className="carousel-container">
              <h3 className="block_title"><span>Editor&apos;s Picks</span></h3>
            </div>
            <div className="latest_news_slide">
              <Slider {...settings}>
                {editor.posts.map((post, i) => {
                  return <div key={i}>
                    <div className="post_block_style clearfix px-2">
                      <div className="post_thumb">
                        <Image
                          src={'https:' + post.img_4}
                          alt={post.title}
                          title={post.title}
                          layout="responsive"
                          width={360}
                          height={190}
                          placeholder="blur"
                          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcWQ8AAdcBKrJda2oAAAAASUVORK5CYII="
                        />
                      </div>
                      <Link href={'/category/' +post.category.slug}><a className="post_cat">{post.category.name}</a></Link>
                      <div className="post_content">
                        <h2 className="post_title clamped title-small">
                          <Link href={'/' + post.slug}>
                            <a>
                              <span className="clamped">{post.title}</span>
                            </a>
                          </Link>
                          <span className="post_date">
                            <span className="icon">
                              <Image
                                src={Clock}
                                alt="Daily News"
                                layout="fixed"
                                width={13}
                                height={13}
                              />
                            </span> {moment(post.created_at).format('LL')}
                          </span>
                        </h2>
                      </div>
                    </div>
                  </div>
                })}

              </Slider>
            </div>
          </div>
        </Container>
      </section>

      <section className="block_wrapper p-bottom-0">
        <Container>
          <Row>
            <Col lg={8} md={12}>
              <div className="featured_tab color-default">
                <h3 className="block_title"><span>{crime.category.name}</span></h3>
                <Tab.Container id="left-tabs-example" defaultActiveKey="all">
                  <Row>
                    <Col sm={12}>
                      <Nav variant="pills" className="flex-row" >
                        <Nav.Item>
                          <Nav.Link eventKey="all">All</Nav.Link>
                        </Nav.Item>
                        {crime.categories.map((subcat, i) => {
                          return <Nav.Item key={i}>
                            <Nav.Link eventKey={subcat.slug}>{subcat.name}</Nav.Link>
                          </Nav.Item>
                        })}
                      </Nav>
                    </Col>
                    <Col sm={12}>
                      <Tab.Content>
                        <Tab.Pane eventKey="all">
                          <Row>
                            <Col lg={6} md={6}>
                              <div className="post_block_style clearfix">
                                <div className="post_thumb">
                                  <Link href={'/' + crime.allposts[0].slug}>
                                    <a>
                                      <Image
                                        src={'https:' + crime.allposts[0].img_4}
                                        alt={crime.allposts[0].title}
                                        title={crime.allposts[0].title}
                                        layout="responsive"
                                        width={360}
                                        height={240}
                                        placeholder="blur"
                                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcWQ8AAdcBKrJda2oAAAAASUVORK5CYII="
                                      />
                                    </a>
                                  </Link>
                                </div>
                                <div className="post_content">
                                  <h2 className="post_title title-small">
                                    <Link href={'/' + crime.allposts[0].slug}>
                                      <a>
                                        <span className="clamped">{crime.allposts[0].title}</span>
                                      </a>
                                    </Link>
                                    <span className="post_date"><span className="icon">
                                      <Image
                                        src={Clock}
                                        alt="Daily News"
                                        layout="fixed"
                                        width={13}
                                        height={13}
                                      />
                                    </span> {moment(crime.allposts[0].created_at).format('LL')}</span>
                                  </h2>
                                  <p>{crime.allposts[0].details.substr(0, 120).replace(/(<([^>]+)>)/gi, "")}...
                                  </p>
                                </div>
                              </div>
                            </Col>
                            <Col lg={6} md={12}>
                              <div className="list_post_block">
                                <ul className="list_post">
                                  {crime.allposts.slice(1).map((post, i) => (
                                    <li className="clearfix" key={i}>
                                      <div className="post_block_style post-float clearfix">
                                        <div className="post_thumb">
                                          <Image
                                            src={'https:' + post.img_4}
                                            alt={post.title}
                                            title={post.title}
                                            layout="responsive"
                                            width={100}
                                            height={75}
                                            placeholder="blur"
                                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcWQ8AAdcBKrJda2oAAAAASUVORK5CYII="

                                          />
                                        </div>
                                        <div className="post_content">
                                          <h2 className="post_title  title-small">
                                            <Link href={'/' + post.slug}>
                                              <a>
                                                <span className="clamped">{post.title}</span>
                                              </a>
                                            </Link>
                                            <span className="post_date">
                                              <span className="icon">
                                                <Image
                                                  src={Clock}
                                                  alt="Daily News"
                                                  layout="fixed"
                                                  width={13}
                                                  height={13}
                                                />
                                              </span> {moment(post.created_at).format('LL')}
                                            </span>
                                          </h2>
                                        </div>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </Col>
                          </Row>
                        </Tab.Pane>
                        {crime.categories.map((post) => (
                          <Tab.Pane eventKey={post.slug} key={post.slug}>
                            <Row>
                              <Col lg={6} md={12}>
                                <div className="post_block_style clearfix">
                                  <div className="post_thumb">
                                    <Link href={'/' + post.posts[0].slug}>
                                      <a>
                                        <Image
                                          src={'https:' + post.posts[0].img_4}
                                          alt={post.posts[0].title}
                                          title={post.posts[0].title}
                                          layout="responsive"
                                          width={360}
                                          height={240}
                                          placeholder="blur"
                                          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcWQ8AAdcBKrJda2oAAAAASUVORK5CYII="
                                        />
                                      </a>
                                    </Link>
                                  </div>
                                  <div className="post_content">
                                    <h2 className="post_title  title-small">
                                      <Link href={'/' + post.posts[0].slug}>
                                        <a>
                                          <span className="clamped">{post.posts[0].title}</span>
                                        </a>
                                      </Link>
                                      <span className="post_date">
                                        <span className="icon">
                                          <Image
                                            src={Clock}
                                            alt="Daily News"
                                            layout="fixed"
                                            width={13}
                                            height={13}
                                          />
                                        </span> {moment(post.posts[0].created_at).format('LL')}
                                      </span>
                                    </h2>
                                    <p>{post.posts[0].details.substr(0, 120).replace(/(<([^>]+)>)/gi, "")}... </p>
                                  </div>
                                </div>
                              </Col>
                              <Col lg={6} md={12}>
                                <div className="list_post_block">
                                  <ul className="list_post">
                                    {post.posts.slice(1, 5).map((catpost, i) => {
                                      return <li className="clearfix" key={i} >
                                        <div className="post_block_style post-float clearfix">
                                          <div className="post_thumb">
                                            <Link href={'/' + catpost.slug}>
                                              <a>
                                                <Image
                                                  src={'https:' + catpost.img_3}
                                                  alt={catpost.title}
                                                  title={catpost.title}
                                                  layout="responsive"
                                                  width={100}
                                                  height={75}
                                                  placeholder="blur"
                                                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcWQ8AAdcBKrJda2oAAAAASUVORK5CYII="
                                                />
                                              </a>
                                            </Link>
                                          </div>
                                          <div className="post_content">
                                            <h2 className="post_title  title-small">
                                              <Link href={'/' + catpost.slug}>
                                                <a>
                                                  <span className="clamped">{catpost.title}</span>
                                                </a>
                                              </Link>
                                              <span className="post_date">
                                                <span className="icon">
                                                  <Image
                                                    src={Clock}
                                                    alt="Daily News"
                                                    layout="fixed"
                                                    width={13}
                                                    height={13}
                                                  />
                                                </span> {moment(catpost.created_at).format('LL')}
                                              </span>
                                            </h2>

                                          </div>
                                        </div>
                                      </li>
                                    })}
                                  </ul>
                                </div>
                              </Col>

                            </Row>
                          </Tab.Pane>
                        ))}
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </div>
              <div className="gap-30"></div>

              <div className="featured_tab color-default">
                <h3 className="block_title"><span>{imp.category.name}</span></h3>
                <Tab.Container id="left-tabs-example" defaultActiveKey="all">
                  <Row>
                    <Col sm={12}>
                      <Nav variant="pills" className="flex-row" >
                        <Nav.Item>
                          <Nav.Link eventKey="all">All</Nav.Link>
                        </Nav.Item>
                        {imp.categories.map((subcat, i) => {
                          return <Nav.Item key={i}>
                            <Nav.Link eventKey={subcat.slug}>{subcat.name}</Nav.Link>
                          </Nav.Item>
                        })}
                      </Nav>
                    </Col>
                    <Col sm={12}>
                      <Tab.Content>
                        <Tab.Pane eventKey="all">
                          <Row>
                            <Col lg={6} md={6}>
                              <div className="post_block_style clearfix">
                                <div className="post_thumb">
                                      <Image
                                        src={'https:' + imp.allposts[0].img_4}
                                        alt={imp.allposts[0].title}
                                        title={imp.allposts[0].title}
                                        layout="responsive"
                                        width={360}
                                        height={240}
                                        placeholder="blur"
                                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcWQ8AAdcBKrJda2oAAAAASUVORK5CYII="
                                      />
                                </div>
                                <div className="post_content">
                                  <h2 className="post_title title-small">
                                    <Link href={'/' + imp.allposts[0].slug}>
                                      <a>
                                        <span className="clamped">{imp.allposts[0].title}</span>
                                      </a>
                                    </Link>
                                    <span className="post_date"><span className="icon">
                                      <Image
                                        src={Clock}
                                        alt="Daily News"
                                        layout="fixed"
                                        width={13}
                                        height={13}
                                      />
                                    </span> {moment(imp.allposts[0].created_at).format('LL')}</span>
                                  </h2>
                                  <p>{imp.allposts[0].details.substr(0, 120).replace(/(<([^>]+)>)/gi, "")}... </p>
                                </div>
                              </div>
                            </Col>
                            <Col lg={6} md={12}>
                              <div className="list_post_block">
                                <ul className="list_post">
                                  {imp.allposts.slice(1).map((post, i) => (
                                    <li className="clearfix" key={i}>
                                      <div className="post_block_style post-float clearfix">
                                        <div className="post_thumb">
                                          <Image
                                            src={'https:' + post.img_3}
                                            alt={post.title}
                                            title={post.title}
                                            layout="responsive"
                                            width={100}
                                            height={75}
                                            placeholder="blur"
                                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcWQ8AAdcBKrJda2oAAAAASUVORK5CYII="
                                          />
                                        </div>
                                        <div className="post_content">
                                          <h2 className="post_title  title-small">
                                            <Link href={'/' + post.slug}>
                                              <a>
                                                <span className="clamped">{post.title}</span>
                                              </a>
                                            </Link>
                                            <span className="post_date">
                                              <span className="icon">
                                                <Image
                                                  src={Clock}
                                                  alt="Daily News"
                                                  layout="fixed"
                                                  width={13}
                                                  height={13}
                                                />
                                              </span> {moment(post.created_at).format('LL')}
                                            </span>
                                          </h2>

                                        </div>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </Col>
                          </Row>
                        </Tab.Pane>
                        {imp.categories.map((post) => (
                          <Tab.Pane eventKey={post.slug} key={post.slug}>
                            <Row>
                              <Col lg={6} md={12}>
                                <div className="post_block_style clearfix">
                                  <div className="post_thumb">
                                        <Image
                                          src={'https:' + post.posts[0].img_3}
                                          alt={post.posts[0].title}
                                          title={post.posts[0].title}
                                          layout="responsive"
                                          width={360}
                                          height={240}
                                          placeholder="blur"
                                          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcWQ8AAdcBKrJda2oAAAAASUVORK5CYII="
                                        />
                                  </div>
                                  <div className="post_content">
                                    <h2 className="post_title  title-small">
                                      <Link href={'/' + post.posts[0].slug}>
                                        <a>
                                          <span className="clamped">{post.posts[0].title}</span>
                                        </a>
                                      </Link>
                                      <span className="post_date">
                                        <span className="icon">
                                          <Image
                                            src={Clock}
                                            alt="Daily News"
                                            layout="fixed"
                                            width={13}
                                            height={13}
                                          />
                                        </span> {moment(post.posts[0].created_at).format('LL')}
                                      </span>
                                    </h2>
                                    <p>{post.posts[0].details.substr(0, 120).replace(/(<([^>]+)>)/gi, "")}... </p>
                                  </div>
                                </div>
                              </Col>
                              <Col lg={6} md={12}>
                                <div className="list_post_block">
                                  <ul className="list_post">
                                    {post.posts.slice(1, 5).map((catpost, i) => {
                                      return <li className="clearfix" key={i} >
                                        <div className="post_block_style post-float clearfix">
                                          <div className="post_thumb">
                                                <Image
                                                  src={'https:' + catpost.img_3}
                                                  alt={catpost.title}
                                                  title={catpost.title}
                                                  layout="responsive"
                                                  width={100}
                                                  height={75}
                                                  placeholder="blur"
                                                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcWQ8AAdcBKrJda2oAAAAASUVORK5CYII="
                                                />
                                          </div>
                                          <div className="post_content">
                                            <h2 className="post_title  title-small">
                                              <Link href={'/' + catpost.slug}>
                                                <a>
                                                  <span className="clamped">{catpost.title}</span>
                                                </a>
                                              </Link>
                                              <span className="post_date">
                                                <span className="icon">
                                                  <Image
                                                    src={Clock}
                                                    alt="Daily News"
                                                    layout="fixed"
                                                    width={13}
                                                    height={13}
                                                  />
                                                </span> {moment(catpost.created_at).format('LL')}
                                              </span>
                                            </h2>
                                          </div>
                                        </div>
                                      </li>
                                    })}
                                  </ul>
                                </div>
                              </Col>

                            </Row>
                          </Tab.Pane>
                        ))}
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </div>

            </Col>
            <Col lg={4} md={12}>
              <div className="sidebar sidebar_right">
                <div className="sidebar sidebar_right">

                  <div className="widget color-default ms-0">
                    <h3 className="block_title"><span>{ent.category.name}</span></h3>
                    <Slider {...entsettings}>
                      {ent.posts.map((post, i) => (

                        <div className="item" key={i}>
                          <div className="post_overaly_style text-center clearfix">
                            <div className="post_thumb">
                              <Image
                                src={'https:' + post.img_4}
                                alt={post.title}
                                title={post.title}
                                layout="responsive"
                                width={360}
                                height={240}
                                placeholder="blur"
                                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcWQ8AAdcBKrJda2oAAAAASUVORK5CYII="
                              />
                            </div>
                            <div className="post_content">
                              <Link href={'/category/' +ent.category.slug}><a className="post_cat">{ent.category.name}</a></Link>
                              <h2 className="post_title">
                                <Link href={'/' + post.slug}>
                                  <a>
                                    <span className="clamped">{post.title}</span>
                                  </a>
                                </Link>
                              </h2>
                              <div className="post_meta">
                                <span className="post_date mx-auto">
                                  <span className="icon">
                                    <Image
                                      src={Clock}
                                      alt="Daily News"
                                      layout="fixed"
                                      width={13}
                                      height={13}
                                    />
                                  </span> {moment(post.created_at).format('LL')}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>

                  <div className="widget color-default ms-0">
                    <div className="post_overaly_style clearfix">
                      <div className="post_thumb">
                        <Image
                          src={'https:' + health.posts[0].img_4}
                          alt={health.posts[0].title}
                          title={health.posts[0].title}
                          layout="responsive"
                          width={360}
                          height={240}
                          placeholder="blur"
                          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcWQ8AAdcBKrJda2oAAAAASUVORK5CYII="
                        />
                      </div>
                      <div className="post_content">
                        <h2 className="post_title">
                          <Link href={'/' + health.posts[0].slug}>
                            <a>{health.posts[0].title}</a>
                          </Link>
                        </h2>
                        <div className="post_meta">
                          <span className="post_date">
                            <span className="icon">
                              <Image
                                src={Clock}
                                alt="Daily News"
                                layout="fixed"
                                width={13}
                                height={13}
                              />
                            </span> {moment(health.posts[0].created_at).format('LL')}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="list_post_block">
                      <ul className="list_post">
                        {health.posts.slice(1).map((post, i) => (
                          <li className="clearfix" key={i}>
                            <div className="post_block_style post-float clearfix">
                              <div className="post_thumb">
                                <Image
                                  src={'https:' + post.img_3}
                                  alt={post.title}
                                  title={post.title}
                                  layout="responsive"
                                  width={100}
                                  height={75}
                                  placeholder="blur"
                                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcWQ8AAdcBKrJda2oAAAAASUVORK5CYII="
                                />
                                
                              </div>
                              <div className="post_content">
                                <h2 className="post_title clamped title-small">
                                  <Link href={'/' + post.slug}>
                                    <a>{post.title}</a>
                                  </Link>
                                </h2>
                                <div className="post_meta">
                                  <span className="post_date">
                                    <span className="icon">
                                      <Image
                                        src={Clock}
                                        alt="Daily News"
                                        layout="fixed"
                                        width={13}
                                        height={13}
                                      />
                                    </span> {moment(post.created_at).format('LL')}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>


                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export async function getStaticProps(context) {

  const sliderResponse = await fetch(sliderUrl);
  const sliders = (await sliderResponse.json());

  const latestResponse = await fetch(latestUrl);
  const latest = (await latestResponse.json());

  const politicsResponse = await fetch(politicsUrl);
  const politics = (await politicsResponse.json());

  const puneResponse = await fetch(puneUrl);
  const pune = (await puneResponse.json());

  const editorResponse = await fetch(editorUrl);
  const editor = (await editorResponse.json());

  const crimeResponse = await fetch(crimeUrl);
  const crime = (await crimeResponse.json());

  const impResponse = await fetch(impUrl);
  const imp = (await impResponse.json());

  const entResponse = await fetch(entUrl);
  const ent = (await entResponse.json());

  const healthResponse = await fetch(healthUrl);
  const health = (await healthResponse.json());

  return { props: { sliders: sliders, latest: latest, politics: politics, pune: pune, editor: editor, crime: crime, imp: imp, ent: ent, health: health }, revalidate: 1 }
};

