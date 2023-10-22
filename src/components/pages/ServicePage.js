
import '../../assets/css/swiper-bundle.min.css'
import '../../assets/css/services.css'
import softWareHouseIcon from '../../assets/icons/software.svg'
import videoProductionIcon from '../../assets/icons/software.svg'
import contentMarketingIcon from '../../assets/icons/content.svg'
import brandingIcon from '../../assets/icons/branding.svg'
import graphicDesignIcon from '../../assets/icons/web_dev.svg'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import sh_1 from '../../assets/images/services/sh-analisis.jpg'
import sh_2 from '../../assets/images/services/sh-plan.jpeg'
import sh_3 from '../../assets/images/services/sh-desain.jpeg'
import sh_4 from '../../assets/images/services/sh-dev.jpg'

import vid_1 from '../../assets/images/services/vid-plan.jpg'
import vid_2 from '../../assets/images/services/vid-shoot.jpg'
import vid_3 from '../../assets/images/services/vid-edit.jpg'
import vid_4 from '../../assets/images/services/vid-efek.jpg'

import ct_1 from '../../assets/images/services/content-riset.jpeg'
import ct_2 from '../../assets/images/services/content-plan.jpeg'
import ct_3 from '../../assets/images/services/content-made.jpeg'
import ct_4 from '../../assets/images/services/content-made.jpeg'
import ct_5 from '../../assets/images/services/content-made.jpeg'


import br_1 from '../../assets/images/services/brand-plan.jpeg'
import br_2 from '../../assets/images/services/brand-dev.jpeg'
import br_3 from '../../assets/images/services/brand-nilai.jpeg'
import br_4 from '../../assets/images/services/brand-nilai.jpeg'

import ds_1 from '../../assets/images/services/ds-know.jpeg'
import ds_2 from '../../assets/images/services/ds-know.jpeg'
import ds_3 from '../../assets/images/services/ds-know.jpeg'


export default function ServicePage() {

    const [selectedTabContent, setSelectedTabContent] = useState(null)
    const myServices = [
        {
            id: 1,
            name: 'Software House',
            icon: 'printify-icon-computer-monitor-back-view',
            description: `Menghadirkan solusi teknologi inovatif melalui layanan pembuatan software aplikasi yang dipersonalisasi sesuai dengan kebutuhan bisnis Anda. Terdiri dari tim pengembang, desainer, manajer proyek, dan orang-orang lain yang bekerja sama untuk membuat software yang berkualitas`,
            features: {
                description: 'Melakukan pengembangan, perencanaan, pengujian, dan development software aplikasi untuk memenuhi kebutuhan klien. Membuat aplikasi dalam bentuk mobile maupun berbasis website',

            },
            cta: {
                cta_title: 'We Make Every Software',
                cta_description: 'Kami membuat segala jenis aplikasi software yang sesuai dengan kebutuhan anda',
                cta_link: '#'
            },
            steps: [
                {
                    id: 1,
                    title: 'Analisis Kebutuhan',
                    description: `Memahami kebutuhan dan tujuan proyek perangkat lunak. melibatkan identifikasi masalah yang perlu dipecahkan dan merancang solusi perangkat lunak yang sesuai.`,
                    image: sh_1,
                },
                {
                    id: 2,
                    title: 'Planning Software Aplikasi',
                    description: `merencanakan proyek, termasuk penjadwalan, alokasi sumber daya, dan estimasi biaya. melibatkan pemilihan metode pengembangan perangkat lunak yang sesuai, seperti model pengembangan waterfall atau agile.`,
                    image: sh_2,
                },
                {
                    id: 3,
                    title: 'Desain Software Aplikasi',
                    description: `merancang UI da UX Aplikasi. Membuat blueprints atau prototipe perangkat lunak yang akan dikembangkan. Memberikan gambaran aplikasi dalam bentuk Mockup`,
                    image: sh_3,
                },
                {
                    id: 4,
                    title: 'Development Aplikasi',
                    description: `Melakukan coding dan membangun aplikasi sesuai dengan desain yang telah disetujui.melakukan pengujian dan perbaikan secara berkala selama proses pengembangan`,
                    image: sh_4,
                }
            ]
        },
        {
            id: 2,
            name: 'Video Production',
            icon: 'printify-icon-old-camera',
            description: `Membuat konten video, termasuk produksi video pemasaran, iklan, film, dokumenter, video musik, dan lainnya. Kami mengelola seluruh proses produksi video, mulai dari perencanaan konsep, pengambilan gambar, penyuntingan, pascaproduksi, hingga distribusi, dengan tujuan menciptakan video berkualitas tinggi yang memenuhi kebutuhan dan visi klien`,
            features: {
                description: 'Menciptakan dan mengelola konten video, mulai dari Production sampai Post Production',

            },
            cta: {
                cta_title: 'We Make Every Video Content',
                cta_description: 'Kami membuat berbagai jenis video, mulai dari video lecturing,Animasi 2D/3D, Podcast, Dokumenter, Video Series, dll sesuai dengan kebutuhan anda',
                cta_link: '#'
            },
            steps: [
                {
                    id: 1,
                    title: 'Perencanaan Konsep',
                    description: `Mengembangkan ide dan konsep video yang sesuai dengan tujuan dan pesan yang ingin disampaikan.`,
                    image: vid_1,
                },
                {
                    id: 2,
                    title: 'Pengambilan Gambar (Shooting)',
                    description: `Mengatur dan melaksanakan proses pengambilan gambar atau syuting, termasuk penggunaan kamera, pencahayaan, dan audio.`,
                    image: vid_2,
                },
                {
                    id: 3,
                    title: 'Penyuntingan (Editing)',
                    description: `Melakukan proses editing footage yang diambil, menambahkan elemen visual dan audio, serta memotong dan mengatur video agar sesuai dengan konsep yang telah ditetapkan.`,
                    image: vid_3,
                },
                {
                    id: 4,
                    title: 'Efek Visual dan Grafis',
                    description: `Menambahkan efek visual, grafis, animasi, atau efek khusus untuk meningkatkan kualitas video.`,
                    image: vid_4,
                }
            ]
        },
        {
            id: 3,
            name: 'Content Marketing',
            icon: 'printify-icon-notepad-with-text',
            description: `Menggabungkan strategi content marketing mulai dari pembuatan artikel, SEO untuk meningkatkan visibilitas bisnis Anda, menarik target audience yang relevan, dan memperkuat otoritas merek Anda di dunia digital.`,
            features: {
                description: 'Pembuatan konten yang relevan dan bernilai untuk target audiens, serta menerapkan strategi pemasaran untuk mengoptimalkan hasil dari konten yang dibuat.',

            },
            cta: {
                cta_title: 'We Make Every Content Marketing',
                cta_description: `
                Kami membuat berbagai jenis content marketing sesuai dengan kebutuhan anda meningkatkan visibilitas merek, dan mencapai tujuan pemasaran seperti peningkatan penjualan, Awarness, atau konversi pelanggan`,
                cta_link: '#'
            },
            steps: [
                {
                    id: 1,
                    title: 'Analisis Kebutuhan dan Riset',
                    description: `Memahami tujuan pemasaran, audiens target, dan pesan yang ingin disampaikan. Melakukan riset pasar dan pesaing untuk mengembangkan strategi yang efektif.`,
                    image: ct_1,
                },
                {
                    id: 2,
                    title: 'Perencanaan Strategi Konten',
                    description: `Merancang rencana konten yang mencakup jenis konten yang akan diproduksi, jadwal publikasi, serta saluran distribusi yang akan digunakan.`,
                    image: ct_2,
                },
                {
                    id: 3,
                    title: 'Pembuatan Konten',
                    description: `Membuat berbagai jenis konten, seperti artikel, blog post, video, infografis, panduan, dan lain-lain, sesuai dengan rencana yang telah dibuat.`,
                    image: ct_3,
                },
                {
                    id: 4,
                    title: 'Optimisasi SEO',
                    description: `Melibatkan praktik SEO (Search Engine Optimization) untuk memastikan bahwa konten muncul di hasil pencarian mesin pencari seperti Google.`,
                    image: ct_4,
                },
                {
                    id: 4,
                    title: 'Distribusi Konten',
                    description: `Mengelola distribusi konten melalui berbagai saluran seperti situs web, media sosial, email, dan platform lainnya untuk mencapai audiens target.`,
                    image: ct_5,
                }
            ]
        },
        {
            id: 4,
            name: 'Company Branding',
            icon: 'printify-icon-hanging-billboard',
            description: `Membantu perusahaan membangun identitas merek yang kuat seperti logo, slogan, brand playbook, dan strategi komunikasi melalui layanan branding yang strategis dan kreatif.`,
            features: {
                description: 'Menciptakan dan memelihara identitas merek yang kuat dan konsisten, membangun loyalitas pelanggan, dan mencapai kesuksesan jangka panjang. Menciptakan hubungan positif antara merek dan audiens targetnya.',

            },
            cta: {
                cta_title: 'We Make Every Company Branding',
                cta_description: `Kami membuat segala kebutuhan untuk Branding Perusahaan sesuai dengan kebutuhan anda meningkatkan visibilitas merek, dan mencapai tujuan pemasaran seperti peningkatan penjualan, Awarness, atau konversi pelanggan`,
                cta_link: '#'
            },
            steps: [
                {
                    id: 1,
                    title: 'Penyusunan Strategi Komunikasi',
                    description: `Mengembangkan strategi komunikasi merek yang melibatkan komunikasi, kampanye iklan, media sosial, dan konten branding.`,
                    image: br_1,
                },
                {
                    id: 2,
                    title: 'Pengembangan Branding',
                    description: `Menciptakan atau memperbarui elemen identitas merek, seperti logo, nama merek, slogan, dan panduan merek`,
                    image: br_2,
                },
                {
                    id: 3,
                    title: 'Pengembangan Nilai Branding',
                    description: `Merumuskan nilai-nilai dan pesan merek yang ingin disampaikan kepada audiens. Ini mencakup pengembangan narasi merek yang kuat.`,
                    image: '',
                    image: br_3,
                },
                {
                    id: 4,
                    title: 'Desain dan Visualisasi',
                    description: `Merancang elemen visual merek, termasuk desain logo, warna, tipografi, dan elemen-elemen grafis lainnya.`,
                    image: br_4,
                }
            ]
        },
        {
            id: 5,
            name: 'Desain Grafis',
            icon: 'printify-icon-inclilned-paint-brush',
            description: `Mengkomunikasikan Informasi dengan Visual yang Menarik dan Mudah Dipahami berupa desain infografis, social media design dan kebutuhan visualisasi lainnya.`,
            features: {
                description: `Membantu klien dalam menciptakan materi visual yang menarik, profesional, dan kohesif untuk memenuhi kebutuhan client. Desain grafis yang baik dapat membantu merek berkomunikasi dengan jelas, menarik perhatian, dan membedakan diri di pasar yang kompetitif.`,

            },
            cta: {
                cta_title: 'We Make Every Design Graphic',
                cta_description: 'Kami dapat membuat segala jenis konten grafis seperti infograhics,playbook, sosial media, dll sesuai dengan kebutuhan perusahaan anda',
                cta_link: '#'
            },
            steps: [
                {
                    id: 1,
                    title: 'Pemahaman Kebutuhan Visual',
                    description: `Memahami kebutuhan klien dan konsep desain. Mendiskusikan tentang pesan yang ingin disampaikan, audiens target.`,
                    image: ds_1,
                },
                {
                    id: 2,
                    title: 'Penyusunan Sketsa (Sketching)',
                    description: `Membuat design mockup sketsa moodboard yang sesuai dengan ide-ide yang sudah di susun.`,
                    image: ds_2,
                },
                {
                    id: 3,
                    title: 'Pengembangan Desain',
                    description: `Mulai mengembangkan desain dengan lebih rinci. Gunakan perangkat lunak desain grafis seperti Adobe Illustrator, Photoshop, atau InDesign, tergantung pada jenis proyek.`,
                    image: ds_3,
                },

            ]
        }
    ]

    useEffect(() => {
        setSelectedTabContent(myServices[0])
    }, [])

    return (
        <>
            <>
                <div className="container-fluid" style={{ padding: "8em 0 0px 0" }}>
                    <section className="page-title">
                        <div className="thm-container">
                            <h3>Services</h3>
                        </div>
                    </section>
                    <div className="breadcumb-wrapper">
                        <div className="thm-container">
                            <ul className="breadcumb">
                                <li>
                                    <Link to={'/'}>Homepage</Link>
                                </li>
                                <li>
                                    <span className="sep">-</span>
                                </li>

                                <li>
                                    <span>Services</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* /.video-box-design-guide */}
                <section className="video-box-design-guide sec-pad service-tab-box">
                    <div className="thm-container">
                        <div className="tab-title">
                            <ul id="myTab" className="list-inline nav nav-tabs" role="tablist">
                                {
                                    myServices.map((v) => {
                                        return (
                                            <>
                                                <li onClick={() => {
                                                    setSelectedTabContent(v)
                                                }} className="rounded-1">
                                                    <Link
                                                        aria-controls="software-house"
                                                        role="tab"
                                                        data-toggle="tab"
                                                        className={`hvr-bounce-to-bottom ${v.id === selectedTabContent?.id ? 'active' : ''}`}
                                                    >
                                                        <i className={v.icon} />
                                                        <h3>
                                                            {v.name}
                                                        </h3>
                                                    </Link>
                                                </li>
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        {
                            selectedTabContent && <div className="tab-content">
                                <div
                                    className="single-tab-content tab-pane in active"
                                    id="software-house"
                                >
                                    <div className="sec-title text-center mb0">
                                        <span>Our services</span>
                                        <h3>{selectedTabContent?.name}</h3>
                                        <p>
                                            {selectedTabContent?.description}
                                        </p>
                                    </div>
                                    <section className="what-we-do sec-pad service-page">
                                        <div className="thm-container">
                                            <div className="sec-title text-center">
                                                <span>Our features</span>
                                                <h3>What We Do</h3>
                                                <p>
                                                    {selectedTabContent?.features?.description}
                                                </p>
                                            </div>
                                            {/* /.sec-title */}
                                            <div className="row">
                                                <div className="col-md-12 col-sm-12 col-xs-12 col-lg-6 col-xl-6">
                                                    <div className="single-what-we-do">
                                                        <div className="text-box hvr-bounce-to-bottom">
                                                            <a href="#">
                                                                <h3 style={{ color: '#202020' }}>{selectedTabContent?.cta?.cta_title}</h3>
                                                            </a>
                                                            <p>
                                                                {selectedTabContent?.cta?.cta_description}
                                                            </p>
                                                            <Link
                                                                target={'_blank'}
                                                                className="read-more fas fa-angle-right"
                                                                to={selectedTabContent?.cta?.cta_link}>
                                                                Show Projects
                                                            </Link>
                                                        </div>
                                                        {/* /.text-box */}
                                                    </div>
                                                    {/* /.single-what-we-do */}
                                                </div>
                                                {/* /.col-md-6 */}
                                                <div className="col-md-12 col-sm-12 col-xs-12 col-lg-6 col-xl-6">
                                                    {
                                                        selectedTabContent?.steps?.map((value) => {
                                                            return (
                                                                <>

                                                                    <div className="single-what-we-do-two clearfix">
                                                                        <div className="img-box">
                                                                            <img
                                                                                src={value?.image}
                                                                                alt="Awesome Image"
                                                                            />
                                                                        </div>
                                                                        <div className="text-box">
                                                                            <h3 style={{ color: '#202020' }}>{value?.title}</h3>
                                                                            <p>
                                                                                {value?.description}
                                                                            </p>
                                                                        </div>


                                                                    </div>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>

                                        </div>

                                    </section>
                                    {/* /.sec-title */}
                                </div>
                            </div>
                        }

                        {/* /.tab-content */}
                    </div>
                    {/* /.thm-container */}
                </section>
            </>

        </>
    )
}