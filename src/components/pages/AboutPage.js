
import '../../assets/css/services.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Navigation, Pagination, Scrollbar, A11y, Keyboard, Autoplay } from 'swiper/modules';
import { useState } from 'react';
import imageSlide1 from '../../assets/images/dev.jpeg'
import imageSlide2 from '../../assets/images/integ.jpeg'
import imageSlide3 from '../../assets/images/valid.jpeg'
import imageSlide4 from '../../assets/images/integ.jpeg'
import imageSlide5 from '../../assets/images/dev.jpeg'
import { Button, Col, Row } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
export default function AboutPage() {

    const [activeTab, setActiveTab] = useState(1)
    const visionGoal = [
        {
            id: 1,
            title: 'Create Goal',
            child: {
                title: 'Carry solution to greater heights',
                content: `Once you find the winning formula and the proven hypothesis, then it’s time to
                bring that solution in to a bigger audience, reach virality, and earn the hearts
                and minds of the masses.`,
                image: imageSlide1
            }
        },
        {
            id: 2,
            title: 'Trick Matrics',
            child: {
                title: 'Integrate new Technology, Adapting to digital',
                content: `Integrating advanced technology, intelligent data management, and efficient team collaboration to create innovative solutions that meet customer needs and support sustainable business growth. `,
                image: imageSlide2
            }
        },
        {
            id: 3,
            title: 'Problem Detection',
            child: {
                title: 'Validate and Research largest paint points',
                content: `Identify the root causes of problems and understand their impact on customers and company operations. Next, it is necessary to analyze the relevant technological requirements, the costs associated with solving the problem, as well as the risks that may arise, such as security issues or long-term impacts. Evaluating alternative solutions, involving stakeholders, and careful implementation planning are key steps in solving problems effectively `,
                image: imageSlide3
            }
        },
        {
            id: 4,
            title: 'Experiment',
            child: {
                title: 'Test solutions, increase success probability',
                content: `Getting things right on the first try is possible, albeit ultra rare. Constant
                hypothesis testing and refinement on every iteration significantly increases the
                probability of finding a sustainable solution, for eventual scaling.`,
                image: imageSlide4
            }
        },
        {
            id: 5,
            title: 'Scale',
            child: {
                title: 'Carry solutions to greater heights',
                content: `Once you find the winning formula and the proven hypothesis, then it’s time to
                bring that solution in to a bigger audience, reach virality, and earn the hearts
                and minds of the masses.`,
                image: imageSlide5
            }
        }
    ]


    const [swiper, setSwiper] = useState(null);

    const slideTo = (index) => {
        if (swiper)
            swiper.slideTo(index)
    };
    return (
        <>
            <div className="container-fluid" style={{ padding: "8em 0 0px 0" }}>
                <section className="page-title">
                    <div className="thm-container">
                        <h3>About Us</h3>
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
                                <span>About Us</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <section className="hero-service mt-5">
                <div className="container-fluid">
                    <div className="row d-flex flex-column-reverse flex-lg-row justify-content-between">
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
                            <div className="content p-4">
                                <h2 className="text-dark">MAGNA JUARA KREASI</h2>
                                <h3>
                                    {" "}
                                    We’ve been involved first-hand with scaling multiple startups and
                                    businessess, from its first conception to becoming world-class
                                    unicorns.{" "}
                                </h3>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 m-8">
                            <img
                                src="https://kanvasaur.com/wp-content/uploads/2022/10/hero_about.png"
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mt-3 vision-service">
                <div className="card" style={{ border: "none" }}>
                    <div className="card-body">
                        <h2 className="text-center text-dark">Vision And Goals</h2>
                        <div className="row w-100 justify-content-center text-center"></div>
                    </div>
                </div>
            </div>
            <div className="container mt-3 mb-5 vision-service">
                <div className='d-flex justify-content-center mb-5 swiper-row'>
                    {
                        visionGoal.map((v) => {
                            return (
                                <>
                                    <Button onClick={() => {
                                        swiper.slideTo(v.id - 1)
                                    }} className={`mr-2 btn-swipper ${activeTab === v.id ? 'active' : ''}`} >{v.title}</Button>
                                </>
                            )
                        })
                    }

                </div>

                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    position: "relative",
                    top: "8rem",
                    zIndex: 100
                }} className="swipper-nav">
                    <Button role="presentation" className="swipper-btn swipper-arrow-left">
                        <span aria-label="Previous"><Icon icon="mingcute:left-fill"></Icon></span>
                    </Button>
                    <Button role="presentation" className="swipper-btn swipper-arrow-right">
                        <span aria-label="Next"><Icon icon="mingcute:right-fill"></Icon></span>
                    </Button>
                </div>
                <Swiper
                    // loop={true}
                    onSwiper={setSwiper}
                    onSlideChange={(index) => {
                        setActiveTab(index?.activeIndex + 1)
                    }}
                    slidesPerView={1}
                    spaceBetween={100}
                    keyboard={{
                        enabled: true,

                    }}
                    navigation={{ nextEl: ".swipper-arrow-right", prevEl: ".swipper-arrow-left" }}
                    pagination={{
                        paginationClickable: true,
                        dynamicBullets: true,
                        clickable: true,
                        keyboard: {
                            enabled: true
                        },
                        el: null,
                        // progressbarOpposite: true
                    }}

                    // autoplay={{
                    //     delay: 10000,
                    //     disableOnInteraction: false
                    // }}
                    modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard, Autoplay]}
                    className="mySwiper"
                >

                    {
                        visionGoal?.map((obj) => {
                            return (
                                <>
                                    <SwiperSlide>
                                        <div className="row swiper-slide-row justify-content-center">
                                            <div className="col-12 col-lg-5">
                                                <h3>
                                                    <b className='text-dark'>{obj.child.title}</b>
                                                </h3>
                                                <p>
                                                    {obj.child.content}
                                                </p>
                                                <p />
                                            </div>
                                            <div className="col-12 col-lg-5 text-center">
                                                <img style={{
                                                    borderRadius: 20,
                                                    height: 250,
                                                    width: 450
                                                }} className="img-aset" src={obj.child.image} />
                                            </div>
                                        </div>

                                    </SwiperSlide>
                                </>
                            )
                        })
                    }


                </Swiper >


            </div>
        </>
    )
}