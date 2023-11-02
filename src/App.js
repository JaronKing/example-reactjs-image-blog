import {
    Routes,
    Route,
} from "react-router-dom";
import {
    rootPath,
    memeShowPath,
    adminPath,
    loginPath,
} from "./routes/Routes"
import Home from "./pages/Home";
import Meme from "./pages/Meme";
import Admin from "./pages/admin/Admin";
import Login from "./pages/auth/Login";
function App() {
    return (
        <Routes>
            <Route exact path={rootPath} element={<Home />} />
            <Route exact path={memeShowPath} element={<Meme />} />

            <Route exact path={adminPath} element={<Admin />} />
            <Route exact path={loginPath} element={<Login />} />
        </Routes>
    );
}

export default App;
