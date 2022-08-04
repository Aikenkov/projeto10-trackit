import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png"
import FormStyle from "../styles/FormStyle"
import { makeLogin } from "../services/trackit";
import ButtonContent from "../styles/ButtonContent";

export default function LoginScreen() {
    const [form, setForm] = useState({
        email: "",
        name: "",
        image: "",
        password: "",
    })

    const [loading, setLoading] = useState('false')

    const navigate = useNavigate();

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    function login(e) {
        setLoading('true');
        e.preventDefault();
        const body = {
            email: "neycalvo@gmail.com",
            password: "calvo",
        }

        makeLogin(body)
            .catch(() => { console.log('deu errado'); setLoading('false') })
            .then(res => {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("userImage", res.data.image);
                navigate("/habitos");
            })

    }


    return (
        <Wrapper>
            <img src={logo} alt="logo" />
            <form onSubmit={login}>
                <FormStyle loading={loading}>
                    <div></div>
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
                    <button><ButtonContent loading={loading} text="Entrar" /></button>
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
    width: 100vw;
    background-color: #ffffff;
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

