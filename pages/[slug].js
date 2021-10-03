import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Clock from '/public/images/clock.webp'
import moment from "moment"
import { Col, Container, Nav, Row } from "react-bootstrap"

export default function Post({ data }) {
  const p = data.post;
  const subcat = p.subcategory != null ? <li><Link href={'/subcategory/' + p.subcategory.slug}><a>{p.subcategory.name}</a></Link></li> : '';
  const prev = data.previous != null ? <div className="post-previous">
    <Link href={'/' + data.previous.slug}><a> <span><span className="icon me-0"> <Image src={Clock} alt="Daily News" layout="fixed" width={13} height={13} /></span><i className="fa fa-angle-left"></i>Previous Post</span>
      <h3>{data.previous.title}</h3>
    </a></Link>
  </div> : <div className="post-previous">
    <span><i className="fa fa-angle-left"></i>Previous Post</span>
    <h3>End of Result</h3>
  </div>
  const next = data.next != null ? <div className="post-next">
    <Link href={'/' + data.next.slug}><a> <span>Next Post <span className="icon ms-2 me-0"> <Image src={Clock} alt="Daily News" layout="fixed" width={13} height={13} /></span></span>
      <h3>{data.next.title}</h3>
    </a></Link>
  </div> : <div className="post-next">
    <span>Next Post <span className="icon ms-2 me-0"> <Image src={Clock} alt="Daily News" layout="fixed" width={13} height={13} /></span></span>
    <h3>End of Result</h3>
  </div>
  return (
    <>
      <Head>
        <title>{p.meta_title}</title>
        <meta property="og:title" content={p.meta_title} />
        <meta name="twitter:title" content={p.meta_title} />
        <meta name="description" content={p.meta_desc} />
        <meta property="og:description" content={p.meta_desc} />
        <meta name="twitter:description" content={p.meta_desc} />
        <meta property="og:url" content={`https://nitinpatil.vercel.app/${p.slug}`} />
        <meta property="og:image" content={"https:" + p.img_2} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content={`https:${p.img_2}`} />
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
      <div className="page-title">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="breadcrumb">
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href={'/category/' + p.category.slug}><a>{p.category.name}</a></Link></li>
                {subcat}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="block_wrapper">
        <Container>
          <Row>
            <Col lg={8} md={12}>
              <div className="single-post">
                <div className="post_title-area">
                  <h1 className="post_title">{p.title}</h1>
                  <div className="post_meta d-flex align-items-center">
                    <span className="post_date"> <span className="icon"> <Image src={Clock} alt="Daily News" layout="fixed" width={13} height={13} /> </span> {moment(p.created_at).format('LL')} </span>
                    <span className="post_date"><span className="icon"> <Image src={Clock} alt="Daily News" layout="fixed" width={13} height={13} /> </span> {p.views}</span>
                    {p.cities.map((city, i) => (
                      <span className="post_date" key={i}><span className="icon"> <Image src={Clock} alt="Daily News" layout="fixed" width={13} height={13} /> </span> {city.name}</span>
                    ))}
                  </div>
                </div>
                <div className="post_content-area">
                  <div className="post-media post-featured-image">
                    <Image
                      src={'https:' + p.img_1}
                      alt={p.title}
                      title={p.title}
                      layout="responsive"
                      width={850}
                      height={446}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcWQ8AAdcBKrJda2oAAAAASUVORK5CYII="
                    />
                  </div>
                </div>
                <div className="entry-content" dangerouslySetInnerHTML={{ __html: p.details }}>
                </div>
                <div className="tags-area clearfix">
                  <div className="post-tags">
                    {p.tags.map((t, i) => (
                      <a href="#" key={i}># {t.name}</a>
                    ))}
                  </div>
                </div>

                <div className="share-items clearfix mt-0">
                  <ul className="post-social-icons unstyled">
                    <li className="facebook"> <a href="#"> <i className="fa fa-facebook"></i> <span className="ts-social-title">Facebook</span></a> </li>
                    <li className="twitter"> <a href="#"> <i className="fa fa-twitter"></i> <span className="ts-social-title">Twitter</span></a> </li>
                    <li className="gplus"> <a href="#"> <i className="fa fa-google-plus"></i> <span className="ts-social-title">Google +</span></a> </li>
                    <li className="pinterest"> <a href="#"> <i className="fa fa-pinterest"></i> <span className="ts-social-title">Pinterest</span></a> </li>
                  </ul>
                </div>

                <nav className="post-navigation clearfix">
                  {prev}
                  {next}

                </nav>

              </div>
            </Col>
            <Col lg={4} md={12}></Col>
          </Row>
        </Container>
      </section>
    </>
  )
}


export async function getStaticPaths() {
  const res = await fetch('https://dn.wcprojects.in/api/all/posts')
  const posts = await res.json()
  const paths = posts.map((post) => ({
    params: { slug: post.slug }
  }))
  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }) {

  const res = await fetch(`https://dn.wcprojects.in/api/english/post/${params.slug}`)
  const data = (await res.json());
  return { props: { data }, revalidate: 1 }
}