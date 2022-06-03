import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { Chat } from "./pages/chat/chat";
import { Login } from "./pages/login/login";
import { SignUp } from "./pages/signup/signup";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Chat />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </Router>
    )
}