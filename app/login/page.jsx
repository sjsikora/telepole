import Head from 'next/head'
import Hero from './components/Hero'
 
function login() {
    return (
        <div>
            <Head>
                <title>Login to Telepole</title>
            </Head>
            <Hero />
        </div>
    )
}

export default login
