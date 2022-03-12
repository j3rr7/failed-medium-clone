import Head from 'next/head'
//import "antd/dist/antd.css";
import '../styles/globals.css';
import Layout from "../components/layout"
import { SessionProvider } from "next-auth/react";

function MyApp({Component, pageProps : {session, ...pageProps}}) {
    return (
        <SessionProvider session={session}>
        <Layout>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <meta charSet="UTF-8"/>
                <link rel="icon" href="/favicon.ico" sizes="16*16" type="image/png"/>

                <title>Medium Clone</title>
            </Head>

            <Component {...pageProps} />
        </Layout>
        </SessionProvider>
    );
}

export default MyApp
