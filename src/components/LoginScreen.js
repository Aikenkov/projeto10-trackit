import styled from "styled-components"
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import Form from "../styles/Form";


export default function LoginScreen() {
    return (
        <Wrapper>
            <img src={logo} alt="logo" />
            <Form>
                <input placeholder="email" type="email"></input>
                <input placeholder="senha" type="password"></input>
                <button>Entrar</button>
                <Link to="/cadastro">
                    Não tem uma conta? Cadastre-se!
                </Link>
            </Form>

        </Wrapper>
    )
}


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
        width: 180px;
        height: 178.38px;
        margin-bottom: 35px;
    }
    
`;

