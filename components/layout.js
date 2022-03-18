import Navbar from "./navbar"
import Footer from "./footer"
import Head from 'next/head'

export default function Layout({children}) {
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <meta charSet="UTF-8"/>
                <link rel="icon" href="/favicon.ico" sizes="16*16" type="image/png"/>

                <title>Medium Clone</title>
            </Head>
            <Navbar/>

            <div className={"container"}>
                <main>
                    {children}
                </main>
            </div>

            <Footer/>
        </>
    )
}
