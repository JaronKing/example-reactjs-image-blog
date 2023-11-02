import {
    Routes,
    Route,
} from "react-router-dom";
import {
    rootPath,
    memeShowPath,
    adminPath,
    adminMemesPath,
    adminSettingsPath,
    loginPath,
} from "./routes/Routes"
import Home from "./pages/Home";
import Meme from "./pages/Meme";
import Admin from "./pages/admin/Admin";
import AdminMemes from "./pages/admin/Memes";
import AdminSettings from "./pages/admin/Settings";
import Login from "./pages/auth/Login";

function App() {
    return (
        <Routes>
            <Route exact path={rootPath} element={<Home />} />
            <Route exact path={memeShowPath} element={<Meme />} />

            <Route exact path={adminPath} element={<Admin />} />
            <Route exact path={adminMemesPath} element={<AdminMemes />} />
            <Route exact path={adminSettingsPath} element={<AdminSettings />} />
            <Route exact path={loginPath} element={<Login />} />
        </Routes>
    );
}

export default App;
