import profile1 from '../assets/images/user/img-1.jpg'
import profile2 from '../assets/images/user/img-2.jpg'
import profile3 from '../assets/images/user/img-3.jpg'
import profile4 from '../assets/images/user/img-4.jpg'
import profile5 from '../assets/images/user/img-5.jpg'
import phoneBanner from '../assets/images/home1-3.png'
import ourCompany from '../assets/images/our company.jpg'

import softWareHouseIcon from '../assets/icons/software.svg'
import videoProductionIcon from '../assets/icons/video.png'
import contentMarketingIcon from '../assets/icons/content.svg'
import brandingIcon from '../assets/icons/branding.svg'
import graphicDesignIcon from '../assets/icons/web_dev.svg'
import NET from 'vanta/dist/vanta.net.min'
import { useEffect, useRef, useState } from 'react'
import CustomDialog from '../components/reusable/CustomDialog'
import { Link } from 'react-router-dom'

export default function HomePage() {
    const [vantaEffect, setVantaEffect] = useState(null)
    const [showDialog, setShowDialog] = useState(false)
    const [dialogTitle, setDialogTitle] = useState()
    const [dialogContent, setDialogContent] = useState()
    const myRef = useRef(null)

    const myServices = [
        {
            id: 1,
            name: 'Software House',
            icon: softWareHouseIcon,
            description: `Menghadirkan solusi teknologi inovatif melalui layanan pembuatan
            software aplikasi yang dipersonalisasi sesuai dengan kebutuhan
            bisnis Anda`
        },
        {
            id: 2,
            name: 'Video Production',
            icon: videoProductionIcon,
            description: `Menghasilkan karya visual melalui layanan video mulai dari
            production hingga editing yang menggabungkan kreativitas,
            keahlian teknis.`
        },
        {
            id: 3,
            name: 'Content Marketing',
            icon: contentMarketingIcon,
            description: `Menggabungkan strategi content marketing mulai dari pembuatan
            artikel, SEO untuk meningkatkan visibilitas bisnis Anda, menarik
            target audience yang relevan, dan memperkuat otoritas merek Anda
            di dunia digital.`
        },
        {
            id: 4,
            name: 'Company Branding',
            icon: brandingIcon,
            description: `Membantu perusahaan membangun identitas merek yang kuat
            seperti logo, slogan, brand playbook, dan strategi
            komunikasi melalui layanan branding yang strategis dan
            kreatif.`
        },
        {
            id: 5,
            name: 'Desain Grafis',
            icon: graphicDesignIcon,
            description: `Mengkomunikasikan Informasi dengan Visual yang Menarik dan Mudah
            Dipahami berupa desain infografis, social media design dan
            kebutuhan visualisasi lainnya.`
        }
    ]

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x373737,
                backgroundColor: 0xe0e1b,
                points: 8.00,
                maxDistance: 19.00,
                spacing: 19.00
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return (
        <>
            {/* HERO BANNER */}
            <section ref={myRef} id="home" className="bg-home-bg dark">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-7 col-12 title">
                            <h2>
                                Empowering Businesses Technology <br /> with Impactful Solutions
                            </h2>
                            <p className="short-bio text-white">
                                We are a team of experts who are professional and highly motivated.
                                We work in agile and follow the best practices to deliver quality to
                                our clients.
                            </p>
                            <div className="hero-btn d-flex flex-row align-center">
                                <a
                                    style={{ border: "2px solid #ed6d1d", background: "transparent" }}
                                    href="https://wa.me/6285280082423"
                                    className="cf-btn"
                                >
                                    Connect With Me
                                </a>
                                <p>
                                    or{" "}
                                    <a
                                        style={{ color: "#ed6d1d" }}
                                        href="#portfolio"
                                        className="text-primary mr-5"
                                    >
                                        Our Projects{" "}
                                    </a>{" "}
                                </p>
                            </div>
                            <div className="counter d-flex flex-column align-center">
                                <img src={phoneBanner} className="imghero" alt="" />
                            </div>
                            <div className="home-circle">
                                <span className="ring1 animate-v2">
                                    <img
                                        src={profile1}
                                        className="img-fluid"
                                        alt=""
                                    />
                                </span>
                                <span className="ring2 animate-v3">
                                    <img
                                        src={profile2}
                                        className="img-fluid"
                                        alt=""
                                    />
                                </span>
                                <span className="ring3 animate-v2">
                                    <img
                                        src={profile3}
                                        className="img-fluid"
                                        alt=""
                                    />
                                </span>
                                <span className="ring4 animate-v3">
                                    <img
                                        src={profile4}
                                        className="img-fluid"
                                        alt=""
                                    />
                                </span>
                                <span className="ring5 animate-v2">
                                    <img
                                        src={profile5}
                                        className="img-fluid"
                                        alt=""
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="extra-bg" />
                </div>
            </section>

            {/* SERVICES */}
            <section id="services">
                <div className="container">
                    <div className="section-title">
                        <p className="sub-title">My services</p>
                        <h2>
                            What I do <br />
                            for My Customers
                        </h2>
                    </div>
                    <div className="card-container swiper">
                        <div className="row" style={{ justifyContent: "center" }}>
                            {
                                myServices?.map((v, i) => {
                                    return (
                                        <div key={i}>
                                            <div className="col-md-6 col-xl-4">
                                                <div className="service-card">
                                                    <div className="icon-container">
                                                        <img
                                                            src={v.icon}
                                                            className="icon"
                                                            alt=""
                                                        />
                                                        <h3>{v.name}</h3>
                                                    </div>
                                                    <p>
                                                        {v.description}
                                                    </p>
                                                    <Link onClick={() => {
                                                        setShowDialog(true)
                                                        setDialogContent(v.description)
                                                        setDialogTitle(v.name)
                                                    }} className="link" />
                                                </div>
                                                {/* <div className="mfp-fade mfp-hide" id="services_1">
                                                    <div className="content">
                                                        <div className="des">
                                                            <h4>Software House</h4>
                                                            <p>
                                                                Menghadirkan solusi teknologi inovatif melalui layanan
                                                                pembuatan software aplikasi yang dipersonalisasi sesuai
                                                                dengan kebutuhan bisnis Anda
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT */}
            <section id="about">
                <div className="container">
                    <div className="row mt-2">
                        <div className="col-lg-5 about-column">
                            <div className="author-image-container">
                                <div className="image-bg moving-effect" />
                                <div className="image-area">
                                    <img src={ourCompany} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7">
                            <div className="section-title left">
                                <p className="sub-title">About Company</p>
                                <h2>MAGNA JUARA KREASI</h2>
                            </div>
                            <p>
                                Partner terpercaya yang mengkhususkan diri dalam membantu bisnis
                                meraih kesuksesan melalui pemanfaatan potensi penuh dunia digital.
                            </p>
                            <p>
                                Kami memahami setiap bisnis memiliki kebutuhan yang unik, oleh
                                karena itu, kami menyediakan layanan konsultasi yang dipersonalisasi
                                dan solusi yang disesuaikan dengan tujuan dan target pasar
                                perusahaan&nbsp;anda.
                            </p>
                            <div className="d-flex align-center btn-container">
                                <Link className="cf-btn" to={'/about'}>  Read More</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <CustomDialog
                title={dialogTitle}
                show={showDialog}
                content={dialogContent}
                handleClose={() => {
                    setShowDialog(false)
                }}

            />
        </>
    )
}