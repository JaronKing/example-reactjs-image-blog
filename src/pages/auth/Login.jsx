import { Link } from "react-router-dom";

import Layout from "../../components/admin/Layout";
import { adminPath } from "../../routes/Routes";

function Login() {
    return (
        <div className="w-full h-screen bg-gray-800">
            <div className="max-w-lg m-auto pb-24 pt-36">
                <div className="flex flex-col pt-10 bg-gray-600 p-10 rounded-lg">
                    <div className="text-center text-2xl">Login</div>
                    Email:
                    <input type="text" className="p-2 rounded-md"/>
                    Password
                    <input type="password" className="p-2 rounded-md"/>
                    <Link to={adminPath} className="w-full bg-blue-900 hover:bg-blue-950 rounded-lg p-3 mt-10 text-center">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
