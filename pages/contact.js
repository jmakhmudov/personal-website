import Head from "next/head"
import Navbar from '../components/Navbar'
import Blob from '../components/Blob'
import Link from "next/link"
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contact() {

    return (
        <>
            <Head>
                <title>JM | Contacts</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="main">
                <Navbar />
                <section className="contacts-box">
                    <div>
                        makhmudov@tuta.io
                    </div>
                </section>
                <Blob />
            </main>
        </>
    )
}