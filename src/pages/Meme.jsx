import Layout from "../components/Layout";
import { rootPath } from "../routes/Routes";

function Meme() {
    return (
        <Layout>
            <div className="max-w-2xl m-auto pb-24 pt-36">
                <div className="m-auto bg-neutral-900 w-full h-96 shadow-lg rounded-md"></div>
                <div className="grid grid-cols-2 gap-10 pt-24">
                    <div className="m-auto bg-neutral-900 w-full h-48 shadow-lg rounded-md"></div>
                    <div className="m-auto bg-neutral-900 w-full h-48 shadow-lg rounded-md"></div>
                </div>
            </div>
        </Layout>
    );
}

export default Meme;
