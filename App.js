import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import LoginPage from "./login_setup/login";
import UserInterface from "./main_page/user_interface";
function App() {
  return (
    <>
            <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path="/login"
                        element={<LoginPage/>}
                    />
                    <Route
                        exact
                        path="/user"
                        element={<UserInterface/>}
                    />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </BrowserRouter>
        </>
  );
}

export default App;
