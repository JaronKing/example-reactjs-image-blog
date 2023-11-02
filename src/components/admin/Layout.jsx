import { Link } from "react-router-dom";
import {
    adminPath,
    rootPath,
} from "../../routes/Routes";

function Layout({children}) {
    return (
        <div className="bg-blue-200/50 min-h-screen flex flex-row">
            <div className="flex flex-col bg-blue-300/50 w-80 h-screen float-left text-center">
                <div className="w-full pl-3 pb-2 bg-stone-400 text-lg flex flex-row">
                    <div className="mt-3">Halloween Memes</div>
                </div>
                <div className="pt-4 flex flex-col bg-neutral-500 shadow-lg h-full relative">
                    <Link to={adminPath} className="bg-indigo-200 hover:bg-indigo-500/80 p-2 m-2">Home</Link>
                    <Link to={adminPath} className="bg-indigo-200 hover:bg-indigo-500/80 p-2 m-2">Memes</Link>
                    <Link to={adminPath} className="bg-indigo-200 hover:bg-indigo-500/80 p-2 m-2">Settings</Link>
                    <Link to={rootPath} className="bg-indigo-200 hover:bg-indigo-500/80 bottom-0 absolute w-full h-10">Logout</Link>
                </div>
            </div>

            <div className="bg-gray-800 w-full">
                { children }
            </div>
        </div>
    );
}

export default Layout;
