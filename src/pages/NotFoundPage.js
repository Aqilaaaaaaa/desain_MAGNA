import { Icon } from "@iconify/react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <>
            <div className="container-fluid" style={{ marginBottom: 200, marginTop: 200 }}>
                <Row className="justify-content-center mb-5">
                    <div id="notfound">
                        <div className="notfound">
                            <div className="notfound-404 text-center">
                                <h1 style={{ color: ' #ed6d1d', fontSize: 100 }}>
                                    4<span style={{ color: 'rgb(66 97 171)' }}>0</span>4
                                </h1>
                            </div>
                            <h2>the page you requested could not found</h2>

                        </div>
                    </div>
                </Row>
                <Row className="justify-content-center mb-5">
                    <Link
                        style={{ color: 'rgb(66 97 171)' }}
                        className="read-more fas fa-angle-right"
                        to={'/'}>
                        <Icon icon={'lucide:move-left'}></Icon> Back to home
                    </Link>
                </Row>
            </div>
        </>
    )
}