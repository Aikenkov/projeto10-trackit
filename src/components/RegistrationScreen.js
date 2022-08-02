import styled from "styled-components"
import Form from "../styles/Form"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"


export default function RegistrationScreen() {
    return (
        <Wrapper>
            <img src={logo} alt="logo" />
            <Form>
                <input placeholder="email" type="email"></input>
                <input placeholder="senha" type="password"></input>
                <input placeholder="nome" type="text"></input>
                <input placeholder="foto" type="text"></input>

                <button>Cadastrar</button>
                <Link to="/">
                    Já tem uma conta? Faça login!
                </Link>
            </Form>

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