import styled from "styled-components"
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import UserContext from "../contexts/UserContext";
import { useContext } from "react";

export default function Footer() {
    const { percentage } = useContext(UserContext)


    console.log(percentage)
    return (
        <Wrapper>
            <Link to="/habitos">Hábitos</Link>
            <Link to="/hoje">
                <Progressbar>
                    <CircularProgressbar styles={buildStyles({
                        pathColor: `rgb(255, 255, 255)`,
                        textColor: "#ffffff",
                        trailColor: 'transparent',
                        textSize: '22px',
                    })} value={percentage} text={`Hoje`} />
                </Progressbar>
            </Link>
            <Link to="/historico">Histórico</Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    height: 70px;
    width: 100vw;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    a{
        text-decoration: none;
        color: var(--light-blue);
        font-size: 18px;
        padding: 0 30px;
    }
    
`;

const Progressbar = styled.div`
position: absolute;
bottom: 10px;
left: calc(50vw - 45.5px);
    height: 91px;
    width: 91px;
    padding: 6px;
    box-sizing: border-box;
    background-color: var(--light-blue);
    border-radius: 50%;
    
    
`;