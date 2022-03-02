import Head from 'next/head'
export default function headTags() {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.png" sizes="16*16" type="image/png" />
        <title>Medium Clone</title>
      </Head>
    </>
  )
}
