import { Link } from "react-router-dom";

export default function ContactPage() {
    return (
        <>
                <div className="container-fluid" style={{ padding: "8em 0 0px 0" }}>
                <section className="page-title">
                    <div className="thm-container">
                        <h3>Contact</h3>
                    </div>
                </section>
                <div className="breadcumb-wrapper">
                    <div className="thm-container">
                        <ul className="breadcumb">
                            <li>
                            <Link to={'/'}>Homepage</Link>
                            </li>
                            {/*
           */}
                            <li>
                                <span className="sep">-</span>
                            </li>
                            {/*
           */}
                            <li>
                                <span>Contact</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <section id="contact">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <div className="section-title left">
                                <p className="sub-title">Get In Touch!</p>
                                <h3>Contact us for a quote, help to join the team</h3>
                            </div>
                            <ul className="info-details">
                                <li>
                                    <h4>Email</h4>
                                    <p className="col-md-8">info@magnakreasi.com</p>
                                </li>
                                <li>
                                    <h4>Address</h4>
                                    <p className="col-md-8">
                                        {" "}
                                        Infinity Office MTH Square Ground Floor A4 A Jl. Letjen M.T.
                                        Haryono Kaveling 10 <br />
                                        Kota Jakarta Selatan
                                    </p>
                                </li>
                                <li>
                                    <h4>Phone</h4>
                                    <p className="col-md-8">+6285280082423</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <form action="#" className="contact-form">
                                <div className="form-group">
                                    <input type="text" placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="Corporate Name" />
                                </div>
                                <div className="form-group">
                                    <input type="number" placeholder="WhatsApp" />
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="form-group">
                                    <a type="submit" className="sub-btn text-white">
                                        Send me message
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}