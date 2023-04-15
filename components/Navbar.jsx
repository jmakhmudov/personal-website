import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
    const nav = useRef()
    const [navbarBack, setnavbarBack] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 0) {
                setnavbarBack(true);
            } else {
                setnavbarBack(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const showNavbar = () => {
        nav.current.style.right = 0
    }

    const closeNavbar = () => {
        nav.current.style.right = "-100dvw"
    }

    return (
        <nav className={navbarBack ? 'navbar-back' : ''}>
            <Link className="logo" href='/'>
                JM
            </Link>

            <section className="nav-links">
                <Link className="first" href='/about'>
                    About me
                </Link>

                <Link href='/projects'>
                    Projects
                </Link>

                <Link href='/contact'>
                    Contacts
                </Link>
            </section>

            <div className="menu-bar">
                <FontAwesomeIcon onClick={showNavbar} icon={faBars} size='xl' />
            </div>

            <div className="my-name">
                <span>JALOLIDDIN</span>
                <br />
                MAKHMUDOV
            </div>

            <div ref={nav} className="nav-links-box">
                <FontAwesomeIcon onClick={closeNavbar} className="close-btn" icon={faClose} size="xl" />
                <Link className="first" href='/about'>
                    About me
                </Link>

                <Link href='/projects'>
                    Projects
                </Link>

                <Link href='/contact'>
                    Contacts
                </Link>
            </div>
        </nav>
    )
}