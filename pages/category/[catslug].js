import Link from 'next/link'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap';
import Clock from '/public/images/clock.webp'
import moment from 'moment';

function Category({ data }) {
    const scats = data.subcategories != null ? <ul className="subCategory unstyled">{data.subcategories.map((sub, i) => (
        <li key={i}><a href="#" >{sub.name}</a></li>))} </ul> : '';
    return (
        <>
            <div className="page-title">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="breadcrumb">
                                <li><Link href="/"><a>Home</a></Link></li>
                                <li><Link href="/"><a>{data.category.name}</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <section className="block_wrapper">
                <Container>
                    <Row>
                        <Col lg={8} md={12}>
                            <div className="block category-listing category-style2">
                                <h3 className="block_title"><span>{data.category.name}</span></h3>
                                {scats}
                                {data.posts.data.map((post, i) => (
                                    <div className="post_block_style post-list clearfix" key={i}>
                                        <div className="row">
                                            <div className="col-lg-5 col-md-6">
                                                <div className="post_thumb thumb-float-style">
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
                                            </div>
                                            <div className="col-lg-7 col-md-6">
                                                <div className="post_content">
                                                    <h2 className="post_title title-large">
                                                        <Link href={'/' + post.slug}>
                                                            <a>{post.title}</a>
                                                        </Link>
                                                    </h2>

                                                    <div className="post_meta"><span className="post_date"><span className="icon">
                                                        <Image
                                                            src={Clock}
                                                            alt="Daily News"
                                                            layout="fixed"
                                                            width={13}
                                                            height={13}
                                                        />
                                                    </span> {moment(post.created_at).format('LL')}</span>  </div>
                                                    <p>{post.details.substr(0, 120).replace(/(<([^>]+)>)/gi, "")}...
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://dn.wcprojects.in/api/english/categories')
    const cats = await res.json()
    const paths = cats.categories.map((category) => ({
        params: { catslug: category.slug }
    }))
    return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }) {

    const res = await fetch(`https://dn.wcprojects.in/api/english/category/${params.catslug}`)
    const data = (await res.json());
    return { props: { data }, revalidate: 1 }
}

export default Category
