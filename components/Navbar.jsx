import Link from "next/link"

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

            <div className="my-name">
                <span>JALOLIDDIN</span>
                <br />
                MAKHMUDOV
            </div>
        </nav>
    )
}