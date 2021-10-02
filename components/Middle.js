import Image from 'next/image'
import Logo from '/public/images/logo.png'
import TopAd from '/public/images/topAd.png'
import Link from 'next/link'

export default function Middle() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                            <div className="logo">
                                <Link href="/">
                                    <a>
                                        <Image
                                            src={Logo}
                                            alt="Daily News"
                                            layout="responsive"
                                            placeholder="blur"
                                        />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-12 header-right">
                            <div className="ad-banner">
                                <a href="https://whalecoders.com" target="_blank" rel="noreferrer">
                                    <Image
                                        src={TopAd}
                                        alt="Daily News"
                                        layout="responsive"
                                        placeholder="blur"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

