import {
    Routes,
    Route,
} from "react-router-dom";
import { rootPath, memeShowPath } from "./routes/Routes"
import Home from "./pages/Home";
import Meme from "./pages/Meme";
function App() {
    return (
        <Routes>
            <Route exact path={rootPath} element={<Home />} />
            <Route exact path={memeShowPath} element={<Meme />} />
        </Routes>
    );
}

export default App;
