import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../styles/globalStyles";

import LoginScreen from "./LoginScreen";
import RegistrationScreen from "./RegistrationScreen";
import PrivatePage from "./PrivatePage";
import HabitsPage from "./HabitsPage";



export default function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={< LoginScreen />} />
                    <Route path="/cadastro" element={< RegistrationScreen />} />
                    <Route path="/hoje" element={
                        <PrivatePage>
                            <HabitsPage />
                        </PrivatePage>
                    } />
                </Routes>
            </BrowserRouter>
        </>

    )
}