import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import logo from "../assets/logo.png"
import FormStyle from "../styles/FormStyle"
import { makeRegister } from "../services/trackit"


export default function RegistrationScreen() {
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

    function Register(e) {
        e.preventDefault();
        const body = {
            ...form,
        }

        makeRegister(body).catch(err => { alert("Algo está errado aí") }).then(res => { navigate("/") })

    }



    return (
        <Wrapper>
            <img src={logo} alt="logo" />
            <form onSubmit={Register}>
                <FormStyle >
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

                    <button>Cadastrar</button>

                </FormStyle>
            </form>
            <Link to="/">
                Já tem uma conta? Faça login!
            </Link>
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