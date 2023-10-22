import { Icon } from '@iconify/react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { MENU_FOOTER } from './_menu'
export default function Footer() {
    return (
        <>
            <footer className="container-fluid text-white">
                <div className="row text-center">
                    <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
                        <div className="logo-out d-flex justify-content-start">
                            <img href="#home" src={logo} className="logo" />
                            <p>
                                <span className="text-white mt-8">MAGNA </span>JUARA KREASI
                            </p>
                        </div>
                        <div className="logo-adr">
                            <p>
                                Infinity Office MTH Square Ground Floor A4 A <br /> Jl. Letjen M.T.
                                Haryono Kaveling 10 <br />
                                Kota Jakarta Selatan
                            </p>
                            <div className="mb-1 copyright">Magna Juara Kreasi © 2023</div>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center' }} className="col-md-4 col-xl-4 col-lg-4 col-xs-12 col-sm-12 footer-info-column text-center">
                        <div className="mb-3">
                            <h4 className="title">Explore</h4>
                        </div>
                        <div className="mx-3 site-links">
                            <ul style={{ lineHeight: 3, fontWeight: 500 }}>
                                {
                                    MENU_FOOTER?.map((v) => {
                                        return (
                                            <>
                                                <li>
                                                    <Link to={v.path}>
                                                        {v.name}
                                                    </Link>
                                                </li>
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <Col style={{ textAlign: 'center' }} lg={4} md={4} xs={12} sm={12} className="footer-info-column">
                        <div className="mb-4">
                            <h4 className="title">Follow Our Social Media</h4>
                        </div>
                        <div className="email" style={{ marginTop: 30 }}>info@magnakreasi.com</div>
                        <div style={{ marginTop: 30 }} className="social-icons mt-3">
                            <a
                                href="https://instagram.com/magnajuarakreasi?igshid=OGQ5ZDc2ODk2ZA=="
                                target="_blank"
                            >
                                <Icon width={24} height={24} icon={'mdi:instagram'} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/magna-juara-kreasi/"
                                target="_blank"
                            >
                                <Icon width={24} height={24} icon={'mdi:linkedin'} />
                            </a>
                            <a href="https://wa.me/6285280082423" target="_blank">
                                <Icon width={24} height={24} icon={'ic:baseline-whatsapp'} />
                            </a>
                        </div>
                    </Col>
                </div>
            </footer>

        </>
    )
}