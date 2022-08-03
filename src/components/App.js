import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../styles/globalStyles";

import LoginScreen from "./LoginScreen";
import RegistrationScreen from "./RegistrationScreen";
import PrivatePage from "./PrivatePage";
import HabitsPage from "./HabitsPage";

import UserContext from "../contexts/UserContext";
import { useState } from "react";


export default function App() {
    const [teste, setTeste] = useState("teste")

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={< LoginScreen />} />
                    <Route path="/cadastro" element={< RegistrationScreen />} />

                    <Route path="/hoje" element={
                        <UserContext.Provider value={{ teste, setTeste }}>
                            <PrivatePage>
                                <HabitsPage />
                            </PrivatePage>
                        </UserContext.Provider>
                    } />
                </Routes>
            </BrowserRouter>
        </>

    )
}