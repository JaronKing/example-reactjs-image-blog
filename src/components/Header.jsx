import { Link } from "react-router-dom";
import {
    rootPath,
    adminPath,
    loginPath
} from "../routes/Routes";

function Layout({children}) {
    return (
        <header className="w-full text-2xl fixed">
            <div className="flex flex-row bg-sky-950 m-auto max-w-7xl p-5 shadow-lg">
                <Link to={rootPath} className="m-auto text-center text-7xl font-bold text-neutral-950">
                    Halloween Meme Factory
                </Link>
                {/* this is temporary links to test out pages*/}
                <div className="flex flex-col">
                    <Link to={loginPath}>Login</Link>
                    <Link to={adminPath}>Admin</Link>
                </div>
            </div>
        </header>
    );
}

export default Layout;
