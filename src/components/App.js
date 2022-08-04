import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../styles/globalStyles";

import LoginScreen from "./LoginScreen";
import RegistrationScreen from "./RegistrationScreen";
import PrivatePage from "./PrivatePage";
import HabitsPage from "./HabitsPage";

import UserContext from "../contexts/UserContext";
import { useState } from "react";


export default function App() {
    const [userImage, setUserImage] = useState("teste")

    return (
        <>
            <GlobalStyle />
            <UserContext.Provider value={{ userImage, setUserImage }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={< LoginScreen />} />
                        <Route path="/cadastro" element={< RegistrationScreen />} />
                        <Route path="/habitos" element={
                            <PrivatePage>
                                <HabitsPage />
                            </PrivatePage>
                        } />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>

    )
}