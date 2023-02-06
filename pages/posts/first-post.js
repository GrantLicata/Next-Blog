import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';


export default function FirstPost() {
    return (
        <>
            {/* Next.js includes a head component that allows you to specify the head of each page shown in the app. It is imported from the next library and provided within the page. */}
            <Head>
                <title>First Post</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    );
}