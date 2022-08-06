import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import FormStyle from "../styles/FormStyle";
import { makeRegister } from "../services/trackit";
import ButtonContent from "../styles/ButtonContent";

export default function RegistrationScreen() {
    const [form, setForm] = useState({
        email: "",
        name: "",
        image: "",
        password: ""
    });
    const [loading, setLoading] = useState('false');
    const navigate = useNavigate();

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    function Register(e) {
        setLoading('true');
        e.preventDefault();
        const body = {
            ...form
        }
        makeRegister(body)
            .then(() => {
                navigate("/");
            })
            .catch((res) => {
                alert(res.response.data.message);
                setLoading('false');
            });
    }

    return (
        <Wrapper>
            <img src={logo} alt="logo" />
            <form onSubmit={Register}>
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
                    <input
                        placeholder="nome"
                        type="text"
                        name="name"
                        onChange={handleForm}
                        value={form.name}
                    />
                    <input
                        placeholder="foto"
                        type="text"
                        name="image"
                        onChange={handleForm}
                        value={form.image}
                    />
                    <button ><ButtonContent loading={loading} text="Cadastrar" /></button>
                    <Link to="/">
                        Já tem uma conta? Faça login!
                    </Link>
                </FormStyle>
            </form>
        </Wrapper>
    );
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