import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { buildMemeShowPath } from "../routes/Routes";

function Home() {
    return (
        <Layout>
            <div className="max-w-7xl m-auto grid grid-cols-4 gap-5 pb-24 pt-36">
                <Link to={buildMemeShowPath(1)} className="bg-neutral-900 w-full h-60 shadow-lg rounded-md"></Link>
                <div className="bg-neutral-900 w-full h-60 shadow-lg rounded-md"></div>
                <div className="bg-neutral-900 w-full h-60 shadow-lg rounded-md"></div>
                <div className="bg-neutral-900 w-full h-60 shadow-lg rounded-md"></div>
                <div className="bg-neutral-900 w-full h-60 shadow-lg rounded-md"></div>
                <div className="bg-neutral-900 w-full h-60 shadow-lg rounded-md"></div>
                <div className="bg-neutral-900 w-full h-60 shadow-lg rounded-md"></div>
                <div className="bg-neutral-900 w-full h-60 shadow-lg rounded-md"></div>
                <div className="bg-neutral-900 w-full h-60 shadow-lg rounded-md"></div>
                <div className="bg-neutral-900 w-full h-60 shadow-lg rounded-md"></div>
                <div className="bg-neutral-900 w-full h-60 shadow-lg rounded-md"></div>
                <div className="bg-neutral-900 w-full h-60 shadow-lg rounded-md"></div>

                <div className="bg-neutral-900 w-full h-60 shadow-lg rounded-md meme-loading"></div>
                <div className="bg-neutral-900 w-full h-60 shadow-lg rounded-md meme-loading"></div>
                <div className="bg-neutral-900 w-full h-60 shadow-lg rounded-md meme-loading"></div>
                <div className="bg-neutral-900 w-full h-60 shadow-lg rounded-md meme-loading"></div>
            </div>
        </Layout>
    );
}

export default Home;
