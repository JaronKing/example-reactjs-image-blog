import {
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import { rootPath } from "./routes/Routes"
function App() {
    return (
        <Routes>
            <Route exact path={rootPath} element={<Home />} />

        </Routes>
    );
}

export default App;
