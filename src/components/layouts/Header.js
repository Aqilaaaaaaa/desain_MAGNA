

import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import { MENU_HEADER } from "./_menu";
export default function Header() {

    const location = useLocation()
    const [scroll, setScroll] = useState(false);
    const [isExpand, setIsExpand] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 100);
        });
    }, []);
    return (
        <>
            <header className={`position-absolute w-100 ${location.pathname === '/' ? scroll ? 'fixed sliding' : '' : 'fixed sliding'} ${isExpand ? 'active' : ''}`}>
                <div className="container d-flex flex-roww">
                    <div className="logo-bg" style={{ background: "none" }}>
                        <img href="#home" src={logo} className="logo" />
                        <p className="w-100 title">
                            <span>MAGNA </span>JUARA KREASI
                        </p>
                    </div>
                    <ul className="menus" style={isExpand ? { display: 'block' } : {}}>
                        {
                            MENU_HEADER.map((obj) => {
                                return (
                                    <>
                                        <li>
                                            {
                                                location.pathname !== '/' ?
                                                    <Link onClick={() => {
                                                        setIsExpand(false)
                                                    }} style={{ color: location.pathname === obj.path ? '#676cdb' : isExpand ? '#000' : '#212025' }} to={obj.path}>
                                                        {obj.name}
                                                    </Link>
                                                    :
                                                    <Link onClick={() => {
                                                        setIsExpand(false)
                                                    }} style={{ color: location.pathname === obj.path ? '#676cdb' : scroll ? '#212025' : isExpand ? '#000' : '#fff' }} to={obj.path}>
                                                        {obj.name}
                                                    </Link>
                                            }

                                        </li>
                                    </>
                                )
                            })
                        }

                    </ul>
                    <div className="social-icons">
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
                    <div className="toggle" onClick={() => {
                        setIsExpand(!isExpand)
                    }}>
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
            </header>
            <div style={isExpand ? { visibility: 'visible', transform: 'translate(356px, 45px)' } : {}} className="cursor"></div>
        </>
    )
}