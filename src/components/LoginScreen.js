import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png"
import FormStyle from "../styles/FormStyle"
import { makeLogin } from "../services/trackit";


export default function LoginScreen() {
    const [form, setForm] = useState({
        email: "",
        name: "",
        image: "",
        password: "",
    })
    const navigate = useNavigate();

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    function login(e) {
        e.preventDefault();
        const body = {
            email: "fabio.rod@gmail.com",
            password: "31071999",
        }

        makeLogin(body)
            .then(res => {
                localStorage.setItem("token", res.data.token);
                navigate("/habitos");
            })
            .catch(() => { console.log('deu errado') })
    }


    return (
        <Wrapper>
            <img src={logo} alt="logo" />
            <form onSubmit={login}>
                <FormStyle>
                    <input
                        placeholder="email"
                        type="email"
                        name="email"
                        onChange={handleForm}
                        value={form.email}
                    />
                    <input
                        placeholder="senha"
                        type="password"
                        name="password"
                        onChange={handleForm}
                        value={form.password}
                    />
                    <button>Entrar</button>
                    <Link to="/cadastro">
                        Não tem uma conta? Cadastre-se!
                    </Link>
                </FormStyle>
            </form>

        </Wrapper>
    )
}


const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 180px;
        height: 178.38px;
        margin-bottom: 35px;
        margin-top: 70px;
    }
    
`;

