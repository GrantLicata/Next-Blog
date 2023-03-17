import Layout from '../../components/layout';
import { getAllPostIds } from '../../lib/posts';

export async function getStaticPaths() {
    const paths = getAllPostIds();
    // paths contains the array of known paths returned by getAllPostIds(), 
    // which include the params defined by pages/posts/[id].js
    return {
        paths,
        fallback: false,
    };
}

export default function Post() {
    return <Layout>...</Layout>;
}