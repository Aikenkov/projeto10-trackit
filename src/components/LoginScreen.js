import styled from "styled-components"
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import FormStyle from "../styles/FormStyle"
import { makeLogin } from "../services/trackit";


export default function LoginScreen() {

    function login(e) {
        e.preventDefault();
        const body = {
            email: "fabio.rod@gmail.com",
            password: "31071999",
        }
        const promise = makeLogin(body);

        promise.then(console.log('deu certo')).catch(console.log('deu errado'))
    }


    return (
        <Wrapper>
            <img src={logo} alt="logo" />
            <form onSubmit={login}>
                <FormStyle>
                    <input placeholder="email" type="email" />
                    <input placeholder="senha" type="password" />
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

