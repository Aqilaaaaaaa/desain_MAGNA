
import { Icon } from "@iconify/react";
import { Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import porto1 from '../../assets/images/portfolio/porto1.png'
import porto2 from '../../assets/images/portfolio/porto2.png'
import porto3 from '../../assets/images/portfolio/porto3.png'
export default function ProjectPage() {

    const listProject = [
        {
            name: 'Banking Finance Simulation System',
            description: 'Simulation can be used for lecturers, corporate university students, and customers.',
            image: porto1,
            features: [
                'Facilitate teaching & financial simulation case studies',
                'Learning process more efficient, effective, easy, and fast',
                'User friendly display and can be customized according to user needs',
            ]
        },
        {
            name: 'Self Assesment System',
            description: 'Determine the grade of job candidates that is not subjective',
            image: porto2,
            features: [
                'Question Bank based on worker criteria',
                'Learning process more efficient, effective, easy, and fast',
                'Analyze of the capabilities and suitability of the user in the intended position ',
                'Database for existing materials',
            ]
        },
        {
            name: '360 Virtual Tour',
            description: '360-based learning management system simulation ',
            image: porto3,
            features: [
                'Virtualize the room',
                'Interactive virtual display of the room',
            ]
        }
    ]
    return (
        <>
            <div className="container-fluid" style={{ padding: "8em 0 0px 0" }}>
                <section className="page-title">
                    <div className="thm-container">
                        <h3>Projects</h3>
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
                                <span>Projects</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="mt-5 mb-5">
                <Container>
                    <div className="section-title">
                        <h2 style={{ fontSize: '2em' }}>
                            Showcasing <br />
                            some of my best work
                        </h2>
                    </div>
                    <Card
                        style={{
                            border: 'none',
                            boxShadow: '0px 20px 35px 10px rgba(4, 9, 30, 0.05)'
                        }}
                        className="mt-5">
                        <CardBody>
                            {
                                listProject.map((v) => {
                                    return (
                                        <>
                                            <Row className="mt-5">
                                                <Col md={5}>
                                                    <div className="card-img">
                                                        <img
                                                            src={v.image}
                                                        />
                                                    </div>
                                                </Col>
                                                <Col md={7}>
                                                    <CardTitle>
                                                        <h3 className="text-primary">
                                                            {v.name}
                                                        </h3>
                                                    </CardTitle>
                                                    <CardText>
                                                        <p>
                                                            {v.description}
                                                        </p>
                                                        {
                                                            v.features?.map((f) => {
                                                                return (
                                                                    <>
                                                                        <div className="d-flex mb-3">
                                                                            <div className="mr-2">
                                                                                <Icon icon="icon-park-outline:dot"></Icon>
                                                                            </div>
                                                                            <div>
                                                                                {f}
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                )
                                                            })
                                                        }

                                                    </CardText>
                                                </Col>
                                            </Row>
                                        </>
                                    )
                                })
                            }

                        </CardBody>
                    </Card>

                </Container>
            </section>
        </>
    )
}