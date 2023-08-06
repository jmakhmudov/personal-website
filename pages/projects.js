import Head from "next/head"
import Navbar from '../components/Navbar'
import Blob from '../components/Blob'
import { supabase } from "@/components/supabase"
import Image from "next/image"
import Link from "next/link"

export default function Projects({ projects }) {

    return (
        <>
            <Head>
                <title>JM | Projects</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="main">
                <Navbar />
                <section className="section-box">

                    <div className="title">Projects</div>

                    <section className="projects-list">
                        {projects.map(project => (
                            <Link rel="noopener noreferrer" target="_blank" href={project.website_url} className="project-card" key={project.id}>

                                <div className="project-preview">
                                    <Image src={project.image_url} layout="fill" loading="eager" className="project-preview" />
                                </div>

                            </Link>
                        ))}
                    </section>
                </section>

                <Blob />
            </main>
        </>
    )
}

async function fetchProjects() {
    const { data, error } = await supabase.from('projects').select('*');

    if (error) {
        console.error(error);
    } else {
        return data;
    }
}

export async function getServerSideProps() {
    const data = await fetchProjects();

    return ({
        props: {
            projects: data
        }
    })
}