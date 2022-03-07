import Head from 'next/head'
//import "antd/dist/antd.css";
import '../styles/globals.css';
import Layout from "../components/layout"

function MyApp({Component, pageProps}) {
    return (
        <Layout>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <meta charSet="UTF-8"/>
                <link rel="icon" href="/favicon.ico" sizes="16*16" type="image/png"/>

                <title>Medium Clone</title>
            </Head>

            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp
