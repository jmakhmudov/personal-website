import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useState, useEffect } from 'react'

const Admin = () => {
    const session = useSession()
    const supabase = useSupabaseClient()

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function getProjects() {
            const { data, error } = await supabase
                .from('projects')
                .select('*');

            if (error) {
                console.error(error);
            } else {
                setProjects(data);
            }
        }

        getProjects();
    }, []);

    return (
        <div className="container" style={{ padding: '50px 0 100px 0' }}>
            {!session ? (
                <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" />
            ) : (
                <div>
                    <div>
                        <button className="button block" onClick={() => supabase.auth.signOut()}>
                            Sign Out
                        </button>
                    </div>
                    <h1>Projects</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Image URL</th>
                                <th>GitHub URL</th>
                                <th>Website URL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map(project => (
                                <tr key={project.id}>
                                    <td>{project.id}</td>
                                    <td>{project.title}</td>
                                    <td>{project.description}</td>
                                    <td>{project.image_url}</td>
                                    <td>{project.github_url}</td>
                                    <td>{project.website_url}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default Admin
