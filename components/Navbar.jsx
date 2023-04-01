import Link from "next/link";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {

    return (
        <nav>
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
                <FontAwesomeIcon icon={faBars} size='xl' />
            </div>

            <div className="my-name">
                <span>JALOLIDDIN</span>
                <br />
                MAKHMUDOV
            </div>
        </nav>
    )
}